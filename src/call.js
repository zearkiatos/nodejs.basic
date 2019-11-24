module.exports = {
    sync: function(name){
        return `Hola ${name}! Bienvenido a Node.js`
    },
    withCallback: function(name, cb){
        console.log("Comenzando llamada...");
        setTimeout(()=>{
            console.log(cb(name));
        }, 5000);
    },
    withPromise: function(name){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(name);
            }, 5000);
        })
    }
}