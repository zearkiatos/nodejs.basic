const MongoClient = require("mongodb").MongoClient;
const { config } = require("./config");
const connectionUrl = `mongodb://root:root@${config.DB_HOST}:${config.DB_PORT}`;
module.exports = (() => {
  let instance = null,
    isDisconnecting = false;

  function connect() {
      return new Promise((resolve, reject)=>{
        MongoClient.connect(`${connectionUrl}`,{useNewUrlParser: true,authSource:'admin'}, function(err,client){
            if(err) {
                reject(err);
            }
            console.log("Conectado satisfactoriamente al servidor de Mongo!");
            console.log(client.db(config.DB_NAME));
            instance = client;
            resolve(client.db(config.DB_NAME));
        });
      })
  }

  function disconnect(){
      if(instance && !isDisconnecting) {
          isDisconnecting = true;
          console.log("Desconectado instancia de Mongo");
          return new Promise((resolve, reject)=>{
              instance.close((err, result)=>{
                if (err) { reject(err); isDisconnecting=false; return; }
                console.log("Instancia de Mongo desconectada!");
                resolve();
            });
          })
      }
  }
  return {
      connect,
      disconnect,
      instance: () =>instance
  }
})();
