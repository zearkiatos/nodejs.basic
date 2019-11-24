const call = require("./src/call");


// call.withCallback("Pedro Capriles",call.sync);

call.withPromise("Pedro Capriles").then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});
