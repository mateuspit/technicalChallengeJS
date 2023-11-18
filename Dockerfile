FROM node:alpine

WORKDIR /technical-challenge-js-barcelos

COPY . .

CMD [ "npm", "start" ]