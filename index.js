const call = require("./src/call");

// call.greet("Pedro Capriles");

async function callWithPromise() {
    const fullName = await call.withPromise("Pedro", "Capriles");

    console.log(fullName);
}

callWithPromise();