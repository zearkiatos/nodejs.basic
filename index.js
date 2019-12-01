const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  fs.readFile("./resources/my_page.html", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    response.end(data);
  });
});

console.log("Iniciando servidor...");
server.listen(3000);
