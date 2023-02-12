FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

ENV MYSQL_HOST=mysql-academy-2
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=password
ENV MYSQL_DB=udemy_db
ENV PORT=3200

RUN npm install

COPY . .

CMD [ "npm", "start" ]
