FROM node:9-slim


RUN mkdir /app

WORKDIR /app

COPY package.json /app

COPY . /app

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]