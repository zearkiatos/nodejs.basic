const loopLimit = 1e10;

module.exports = {
    simulateSync: function () {
        console.log("Comenzando bloqueo simulado...");
        for (let i = 0; i <= loopLimit; i += 1) {
            if(i===loopLimit)
                console.log("He llegado al final!");
        }
        console.log("El bucle ha finalizado!");
    },
    simulateAsync: function(){
        console.log("Comenzando bloqueo simulado...");
        setImmediate(()=>{
            for(let i=0;i<=loopLimit;i+=1){
                if(i===loopLimit)
                    console.log("He llegado al final!");
            }
        });
        console.log("El bucle ha finalizado!");
    }
}