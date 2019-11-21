FROM ubuntu:20.04
WORKDIR /usr/src
RUN apt-get update && \
apt-get upgrade -y && \
apt-get install -y curl && \
yes | apt-get install wget && \
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash && \
rm /bin/sh && ln -s /bin/bash /bin/sh && \
. $NVM_DIR/nvm.sh && \
nvm install --lts && \
nvm use default && \
mkdir app
WORKDIR /usr/src/app
COPY [".","/usr/src/app"]

EXPOSE 3000

CMD ["npx","nodemon","."]