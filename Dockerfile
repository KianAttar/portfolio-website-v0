# Stage 1: Build the Next.js application
FROM node:20 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Create the final image with only the necessary files
FROM node:20-slim

# Set the working directory inside the container
WORKDIR /app

# Copy only the .next folder and package*.json files from the builder stage
COPY --from=builder /app/.next/standalone ./standalone
COPY --from=builder /app/public ./standalone/public
COPY --from=builder /app/.next/static ./standalone/.next/static
COPY --from=builder /app/package*.json ./

# Expose the port that the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["node", "./standalone/server.js"]
