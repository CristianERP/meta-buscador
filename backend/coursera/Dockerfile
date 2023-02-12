FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

ENV MARIADB_HOST=maria-academy-3
ENV MARIADB_USER=root
ENV MARIADB_PASSWORD=password
ENV MARIADB_DB=courseradb
ENV MARIADB_PORT=3306
ENV PORT=3300

RUN npm install

COPY . .

EXPOSE 3300

CMD [ "npm", "start" ]
