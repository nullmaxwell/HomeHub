FROM node:latest

# File Operations and Dependency Installation
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm ci --omit=dev production only

# Copying Source files
COPY . .

# Port allocation
EXPOSE 8080

# Production build and Entrypoint command
RUN npm run build
CMD [ "npm", "run", "start"]