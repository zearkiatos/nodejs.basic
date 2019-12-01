const express = require('express');
const app = express();

app.get("/",(request,response)=>{
    response.send("Estoy en la ruta Home 🏠");
});

app.get("/app",(request,response)=>{
    response.send("Estoy en la ruta /app 📱");
});

app.get("/home",(request,response)=>{
    response.send("Estoy en la ruta Home 🏠");
});

app.get("*",(request,response)=>{
    response.send("No se donde estoy 🤷‍♂️");
});

app.listen(3000,()=>{
    console.log("The express server is running 🚀");
});