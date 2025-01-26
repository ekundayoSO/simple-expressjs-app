# Use the official Node.js image as the base image for this project
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if present) to the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port your app will run on (adjust if needed)
EXPOSE 3000

# Command to start the application using nodemon (for development)
CMD ["npm", "run", "devStart"]
