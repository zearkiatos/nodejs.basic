const fs = require("fs");

module.exports = {
  sync: function() {
    try {
      const m = 1;
      const n = m + 2;
    } catch (err) {
      throw `This is a sync ${err}`;
    }
  },
  errorFirstCallbackWrong: function(){
      try{
          fs.readFile('/some/file/that/does-not-exist',(err, data)=>{
              if(err){
                  throw `this is sync ${err}`;
              }
          });
      }
      catch(err){
        console.error(`Catched err: ${err}`);
      }
      console.log("Hola");
  },
  errorFirstCallback: function(){
      fs.readFile('/some/file/that/does-not-exist',(err,data)=>{
          if(err){
              console.error("This error-first callback",err);
              return
          }
          console.log(data);
      });
  }
};
