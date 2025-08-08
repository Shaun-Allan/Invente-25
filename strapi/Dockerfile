FROM node:18-alpine

RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git > /dev/null 2>&1

WORKDIR /opt/app

ENV NODE_ENV=development

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

# Create uploads directory and set permissions
RUN mkdir -p /opt/app/public/uploads && \
    chmod 777 /opt/app/public/uploads

EXPOSE 1338

CMD ["npm", "run", "develop"]