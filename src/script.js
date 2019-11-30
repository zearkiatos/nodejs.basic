const args = require("yargs").argv;
const { base } = args;
function multiplesTable(base) {
  console.log(`Tabla de múltiplos de ${base}`);
  for (let i = 0; i < 10; i++) {
    console.log(`${base}x${i}=${base * i}`);
  }
}

if (base && !isNaN(base)) {
  multiplesTable(base);
} else {
  throw new Error("Argument 'base' not defined");
}

module.exports = {
  table:multiplesTable
}
