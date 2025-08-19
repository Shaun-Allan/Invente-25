#!/usr/bin/env bash
set -euo pipefail

# Deploy Next.js app (frontend) and Strapi (backend) using PM2
# Requirements: Node.js 18+, pnpm, pm2

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# ---- Config (overridable via env) ----
FRONTEND_NAME="${FRONTEND_NAME:-invente-frontend}"
BACKEND_NAME="${BACKEND_NAME:-strapi-backend}"

# Ports
FRONTEND_PORT="${FRONTEND_PORT:-3000}"
STRAPI_PORT="${STRAPI_PORT:-1338}"

# Hosts
FRONTEND_HOST="${FRONTEND_HOST:-0.0.0.0}"
STRAPI_HOST="${STRAPI_HOST:-0.0.0.0}"

# Public/backend URL for the frontend to consume
STRAPI_URL="${STRAPI_URL:-http://localhost:${STRAPI_PORT}}"

echo "[deploy] Using configuration:"
echo "  FRONTEND_NAME=${FRONTEND_NAME}"
echo "  BACKEND_NAME=${BACKEND_NAME}"
echo "  FRONTEND_PORT=${FRONTEND_PORT}"
echo "  STRAPI_PORT=${STRAPI_PORT}"
echo "  STRAPI_URL=${STRAPI_URL}"

# ---- Ensure prerequisites ----
need_cmd() {
  if ! command -v "$1" >/dev/null 2>&1; then
    return 1
  fi
}

if ! need_cmd node; then
  echo "[deploy] Error: node is not installed or not on PATH" >&2
  exit 1
fi

if ! need_cmd pnpm; then
  echo "[deploy] pnpm not found. Enabling via corepack (recommended)..."
  if command -v corepack >/dev/null 2>&1; then
    corepack enable || true
    corepack prepare pnpm@latest --activate || true
  fi
fi

if ! need_cmd pnpm; then
  echo "[deploy] Installing pnpm globally as a fallback..."
  npm install -g pnpm
fi

if ! need_cmd pm2; then
  echo "[deploy] pm2 not found. Installing globally..."
  npm install -g pm2
fi

# ---- Install & build ----
echo "[deploy] Installing workspace dependencies..."
cd "${ROOT_DIR}"
pnpm install --frozen-lockfile || pnpm install

echo "[deploy] Building frontend (Next.js)..."
pnpm build

echo "[deploy] Building backend (Strapi)..."
pushd "${ROOT_DIR}/strapi" >/dev/null
pnpm install --frozen-lockfile || pnpm install
pnpm build
popd >/dev/null

# ---- Start with PM2 ----
echo "[deploy] Starting backend with PM2: ${BACKEND_NAME}"
# Delete existing process if present to ensure fresh config
pm2 describe "${BACKEND_NAME}" >/dev/null 2>&1 && pm2 delete "${BACKEND_NAME}" || true
pm2 start --name "${BACKEND_NAME}" --cwd "${ROOT_DIR}/strapi" -- bash -lc "PORT=${STRAPI_PORT} HOST=${STRAPI_HOST} NODE_ENV=production pnpm start"

echo "[deploy] Starting frontend with PM2: ${FRONTEND_NAME}"
pm2 describe "${FRONTEND_NAME}" >/dev/null 2>&1 && pm2 delete "${FRONTEND_NAME}" || true
pm2 start --name "${FRONTEND_NAME}" --cwd "${ROOT_DIR}" -- bash -lc "NEXT_PUBLIC_STRAPI_URL=${STRAPI_URL} STRAPI_API_URL=${STRAPI_URL} NODE_ENV=production pnpm start -- -p ${FRONTEND_PORT} -H ${FRONTEND_HOST}"

echo "[deploy] Saving PM2 process list..."
pm2 save

echo "[deploy] Done. Processes:"
pm2 ls | cat

echo
echo "[deploy] Access URLs:"
echo "  Frontend: http://${FRONTEND_HOST}:${FRONTEND_PORT}"
echo "  Strapi API: ${STRAPI_URL}"
echo
echo "[deploy] To auto-start PM2 on boot (macOS launchctl), run the following command once (may require sudo):"
echo "  pm2 startup"
echo "  # then re-run: pm2 save"


