FROM node:16-alpine AS fzcloud
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN npm install -g npm@8.13.2
RUN sudo npm install

FROM node:latest-slim AS fzcloudapp
COPY --from=fzcloud --chown=node:node /home/node/app .
EXPOSE 5003
CMD ["node", "app.js"]
