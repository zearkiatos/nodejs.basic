const MongoClient = require("mongodb").MongoClient;
const { config } = require("./config");
const connectionUrl = `mongodb://${config.DB_HOST}:${config.DB_PORT}`;
console.log(connectionUrl);
console.log(config.DB_HOST);
module.exports = (() => {
  let instance = null,
    isDisconnecting = false;

  function connect() {
      return new Promise((resolve, reject)=>{
        MongoClient.connect(connectionUrl,{useNewUrlParser: true}, function(err,client){
            if(err) {
                reject(err);
            }
            console.log("Conectado satisfactoriamente al servidor de Mongo!");
            instance = client;
            console.log(client);
            resolve(client.db(config.DB_NAME));
        });
      })
  }

  function disconnect(){
      if(instance && !isDisconnecting) {
          isDisconnecting = true;
          console.log("Desconectado instancia de Mongo");
          return new Promise((resolve, reject)=>{
            if(err) {
                reject(err);
                isDisconnecting = false;
                return;
            }
            console.log("Instancia de Mongo desconectada!");
            resolve();
          })
      }
  }
  return {
      connect,
      disconnect,
      instance
  }
})();
