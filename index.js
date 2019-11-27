const fs = require("fs");
const ops = require("./src/fileops");

let incValues;
fs.readFile("./resources/number.txt", "utf8", (err, text) => {
  if (err) throw err;
  const numbers = text.split("\n").map(n => Number(n));
  incValues = ops.incrementValues(numbers);
  fs.writeFile(
    "./resources/numbernew.txt",
    incValues.join("\n"),
    (err, result) => {
      if (err) throw err;
    }
  );
});

fs.readFile("./resources/name.txt","utf8",(err,text)=>{
    if(err) throw err;

    const names = text.split("\n").map(n=> n.trim());

    const greetingList = ops.callNames(names);
    fs.writeFile(
        "./resources/callNames.txt",
        greetingList.join("\n"),
        (err, result) =>{
            if(err) throw err;
        }
    );
})
