FROM node:14-alpine

WORKDIR /srv

COPY package*.json ./

RUN npm install

COPY ./src .

CMD ["node", "app.js"]
