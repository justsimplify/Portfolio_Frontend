FROM node:current-alpine
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install
EXPOSE 8087
CMD [ "npm", "start" ]