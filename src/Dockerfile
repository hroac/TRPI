# Use the Node.js 18 base image
FROM node:18

# Set the working directory inside the container
WORKDIR /src

# Copy only package.json and package-lock.json for dependency installation
COPY src/package*.json ./

# Install application dependencies
RUN npm install --production

# Copy only the build output (dist directory) from the local system
COPY src/dist ./dist

# Expose the port the app runs on
EXPOSE 8080

# Set the command to start the application
CMD ["node", "./dist/index.js"]
