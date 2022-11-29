FROM node:16.14-alpine
WORKDIR /app-frontend
# COPY . .
COPY package.json ./
EXPOSE 3000
RUN npm install
# RUN npm run build
ENTRYPOINT [ "npm", "start" ]
