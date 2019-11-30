const errors = require('./src/errors');
const handle = require('./src/handling');

try{
    errors.standarErr.range();
}
catch(err){
    console.log(`Ha ocurrido un error: ${err.message}`);
}

console.log("Hola");

handle.errorFirstCallbackWrong
