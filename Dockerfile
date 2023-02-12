FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

ENV PLATZI_HOST=localhost
ENV UDEMY_HOST=localhost
ENV COURSERA_HOST=localhost
ENV PLATZI_PORT=3100
ENV UDEMY_PORT=3200
ENV COURSERA_PORT=3300
ENV PORT=5000

RUN npm install

COPY . .

EXPOSE 80

CMD [ "npm", "start" ]
