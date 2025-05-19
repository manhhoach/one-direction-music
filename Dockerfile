# Build stage
FROM node:18 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install

# Nhận ARG từ docker-compose
ARG VITE_API_URL
ARG VITE_BASE_URL

ENV VITE_API_URL=${VITE_API_URL}
ENV VITE_BASE_URL=${VITE_BASE_URL}

COPY . .
RUN npm run build

# Serve stage
FROM node:18-slim
RUN npm install -g serve
WORKDIR /app
COPY --from=build /app/dist ./dist

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
