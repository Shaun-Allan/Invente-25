# Changelog

All notable changes to the Invente 25 project will be documented in this file.

## [2025-08-16] - Fetch Error Resolution & Application Resilience

### 🐛 Fixed
- **Critical**: Resolved "TypeError: fetch failed" errors that were crashing the application
- **API Resilience**: Application now gracefully handles backend unavailability
- **Error Handling**: Implemented comprehensive error handling for all API calls

### ✨ Added
- **Error Recovery**: Application loads successfully even when Strapi backend is unavailable
- **Graceful Degradation**: UI displays correctly without data when API calls fail
- **Docker Infrastructure**: Complete Docker setup for PostgreSQL and Strapi backend
- **Development Environment**: Streamlined development setup with Docker Compose

### 🔧 Changed

#### Core API Layer (`lib/api.ts`)
- **Enhanced `fetchAPI` function**:
  - Added `{ next: { revalidate: 0 } }` option to fetch calls
  - Changed error handling to return empty data structures instead of throwing errors
  - Added fallback response structure for failed API calls

- **Updated all API functions with error handling**:
  - `getEvents()`: Now returns empty array `[]` on failure
  - `getSponsors()`: Now returns empty array `[]` on failure  
  - `getSchedule()`: Now returns `null` on failure with null check
  - `getSettings()`: Now returns `null` on failure with null check
  - Added optional chaining (`?.`) for safer data access
  - Wrapped all functions in try-catch blocks

#### Main Page (`app/page.tsx`)
- **Changed from `Promise.all()` to `Promise.allSettled()`**:
  - Prevents application crashes when individual API calls fail
  - Allows partial data loading when some endpoints are available
  - Added proper data extraction with status checking

- **Added data validation**:
  - `eventsData`: Extracts events or defaults to empty array
  - `sponsorsData`: Extracts sponsors or defaults to empty array
  - `scheduleData`: Extracts schedule or defaults to null
  - `settingsData`: Extracts settings or defaults to null

#### Docker Configuration
- **Added `.dockerignore`**:
  - Excludes `node_modules`, `.next`, and other unnecessary files
  - Reduces Docker build context size
  - Improves build performance

- **Docker Compose Services**:
  - **PostgreSQL**: Database service with health checks
  - **Strapi**: CMS backend with proper environment configuration
  - **Next.js**: Frontend service (optional, can run locally)

### 🏗️ Infrastructure

#### Backend Services
- **PostgreSQL Database**:
  - Container: `strapi-db`
  - Port: `5433:5432`
  - Health checks enabled
  - Persistent data volume

- **Strapi CMS**:
  - Container: `strapi-app`
  - Port: `1338:1338`
  - Admin panel: `http://localhost:1338/admin`
  - API endpoints: `http://localhost:1338/api/*`

#### Development Workflow
- **Local Development**:
  - Frontend: `pnpm dev` (runs on port 3000)
  - Backend: `docker-compose up -d postgres strapi`
  - Full stack: `docker-compose up -d`

### 🔍 Technical Details

#### Error Handling Strategy
1. **API Level**: Each API function handles its own errors and returns safe defaults
2. **Page Level**: Main page uses `Promise.allSettled()` to handle partial failures
3. **UI Level**: Components receive safe data structures and render gracefully

#### Data Flow
```
API Call → Error Handling → Safe Default → UI Rendering
   ↓           ↓              ↓              ↓
getEvents() → try/catch → [] → Component renders without data
```

#### Fallback Responses
- **Collection APIs** (events, sponsors): Return `[]` (empty array)
- **Single Item APIs** (schedule, settings): Return `null`
- **API Response Structure**: Maintains Strapi response format for consistency

### 🚀 Deployment Status
- ✅ **Frontend**: Running successfully on http://localhost:3000
- ✅ **Backend**: Strapi running on http://localhost:1338
- ✅ **Database**: PostgreSQL healthy and accessible
- ✅ **Error Handling**: Application resilient to backend failures

### 📋 Next Steps
1. **Configure Strapi Permissions**: Set up public access to API endpoints
2. **Add Sample Data**: Create events, sponsors, schedule, and settings
3. **Test Full Integration**: Verify data flows from Strapi to frontend

### 🔧 Commands Added
```bash
# Start backend services
docker-compose up -d postgres strapi

# Start frontend development
pnpm dev

# View backend logs
docker logs strapi-app

# Check service status
docker ps
```

### 📊 Impact
- **Before**: Application crashed with fetch errors
- **After**: Application loads successfully with or without backend data
- **User Experience**: Seamless loading regardless of backend availability
- **Development**: Faster iteration with resilient error handling

---

## Previous Versions
*No previous versions documented*
