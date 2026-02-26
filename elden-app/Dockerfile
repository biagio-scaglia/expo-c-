# Build Stage
FROM node:20-alpine AS build
WORKDIR /app

# Copy package files and install
COPY package*.json ./
RUN npm install

# Copy source and build web
COPY . .
RUN npx expo export --platform web

# Runtime Stage (Nginx)
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
