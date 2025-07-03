# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies separately to leverage Docker layer caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy all project files
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port used by Next.js
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
