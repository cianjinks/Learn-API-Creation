FROM node:17-alpine

WORKDIR /src

COPY package*.json /src/

RUN npm install

COPY . /src/

EXPOSE 8080

CMD ["node", "server.js"]