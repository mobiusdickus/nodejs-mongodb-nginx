FROM node:14-alpine

WORKDIR /srv

COPY package*.json .

RUN npm install

COPY src/ src/
COPY scripts/ scripts/
COPY start.sh .

CMD ["sh", "start.sh"]
