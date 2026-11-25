# Stage 1: Build the Vite Application
FROM node:20 AS build

WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the source code and build
COPY . .
RUN npm run build

# Stage 2: Serve the built static files
FROM node:20-slim

WORKDIR /usr/src/app

# Install 'serve' globally to host the static files
RUN npm install -g serve

# Copy the built 'dist' folder from Stage 1
COPY --from=build /usr/src/app/dist ./dist

# Expose port 8080 for Fly.io
ENV PORT=8080
EXPOSE 8080

# Start the static server on port 8080
CMD ["serve", "-s", "dist", "-l", "8080"]
