module.exports = {
    greet: function (fullName) {
        console.log(`Hola ${fullName}! Sientes la asincronia?`)
    },
    withPromise: function (name, lastName) {
        console.log("Llamando función con promesa...");
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                console.log("Resolviendo la espera!");
                resolve(`${name} ${lastName}`);
            },5000);
        });
    }
}