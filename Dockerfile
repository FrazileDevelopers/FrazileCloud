FROM node:16-alpine AS fzcloud
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 5003
CMD [ "node", "server.js" ]