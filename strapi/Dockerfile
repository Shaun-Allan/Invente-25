FROM node:18

# Install system deps for sharp
RUN apt-get update && apt-get install -y \
    build-essential \
    python3 \
    libvips-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /opt/app

ENV NODE_ENV=development

COPY package.json package-lock.json* ./

RUN npm install



COPY . .

# Create uploads directory
RUN mkdir -p /opt/app/public/uploads && \
    chmod 777 /opt/app/public/uploads

EXPOSE 1338

CMD ["npm", "run", "develop"]
