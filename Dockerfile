FROM node:12.13.0
RUN mkdir /usr/local/nvm
USER root
RUN apt-get update && \
apt-get upgrade -y
WORKDIR /usr/src/app
COPY [".","/usr/src/app"]

RUN npm install && \
node .

EXPOSE 3000

CMD ["npx","nodemon","."]
