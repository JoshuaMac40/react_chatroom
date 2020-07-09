FROM node:9-slim



WORKDIR /server

COPY package.json /app

RUN npm i

COPY . /server

EXPOSE 3030

# You can change this
CMD [ "npm", "start" ]