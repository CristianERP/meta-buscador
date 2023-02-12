FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

ENV MONGODB_HOST=mongo-academy-1

ENV PORT=3100

RUN npm install

COPY . .

CMD [ "npm", "start" ]
