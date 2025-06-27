# Build stage
FROM node:20-bullseye AS build

WORKDIR /app
COPY package*.json ./
ENV NODE_OPTIONS=--max-old-space-size=4096
RUN npm install

# ARGs injected from docker-compose build
ARG VITE_API_URL
ARG VITE_BASE_URL
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_BASE_URL=$VITE_BASE_URL

COPY . .
RUN npm run build

# Serve stage
FROM node:20-bullseye
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
