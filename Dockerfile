FROM node:12.13.0
RUN mkdir /usr/src/app
USER root
RUN apt-get update && \
apt-get upgrade -y 
WORKDIR /usr/src/app
COPY [".","/usr/src/app"]

EXPOSE 3000

CMD ["npx","nodemon","."]