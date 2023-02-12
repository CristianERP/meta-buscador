FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

ENV MONGODB_URI=mongodb://mongo-academy-1:27017

ENV PORT=3100

RUN npm install

COPY . .

CMD [ "npm", "start" ]
