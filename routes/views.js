module.exports = (app) =>{
    app.get("/",(request, response)=>{
        response.send("I'm on the '/' page.");
    });

    app.get("/route",(request, response)=>{
        response.send("I'm on the '/route' page.");
    });

    app.get("*",(request, response)=>{
        response.send("Where am I?");
    });
}