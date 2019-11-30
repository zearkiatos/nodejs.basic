const greet = require('./src/greet');

greet.emit('clap');
greet.emit('shout',"VIVA EL AMOR");
greet.emit("call", "Pedro Capriles",(name)=>{
    console.log("Estamos llamando a: ", name);
});