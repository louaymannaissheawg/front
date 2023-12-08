# Use the official Node.js 18 base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install



# Copy the rest of the application code
COPY . .

RUN npm run build
# Expose the port your app will run on
EXPOSE 80

# Command to run your application
CMD ["npm", "start"]
