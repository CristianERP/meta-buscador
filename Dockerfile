FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

ENV PLATZI_URL=http://localhost:3100/courses
ENV UDEMY_URL=http://localhost:3200/courses
ENV COURSERA_URL=http://localhost:3300/courses
ENV PORT=5000

RUN npm install

COPY . .

EXPOSE 80

CMD [ "npm", "start" ]
