FROM node:16.14-alpine
WORKDIR /app-backend
# COPY . .
COPY package.json ./
EXPOSE 3001
RUN npm install
ENTRYPOINT [ "npm", "start" ]
