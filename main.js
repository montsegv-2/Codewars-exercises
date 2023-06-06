const { Tablero } = require("./src/Tablero");
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let fila;
let columna;

rl.question("Escribe el valor de la fila: ", (filaInput) => {
  fila = parseInt(filaInput);
  if (fila > 0) {
    rl.question("Escribe el valor de la columnas: ", (columnaInput) => {
      columna = parseInt(columnaInput);
      if (columna > 0) {
        main();
      } else {
        console.log("Columna debe ser > 0");
      }
      rl.close();
    });
  } else {
    console.log("Fila debe ser > 0");
    rl.close();
  }
});

const main = () => {
  const tablero = new Tablero(fila, columna);
  console.log("Generacion 1: ");
  tablero.printGen1();
  console.log("Generacion 2: ");
  tablero.printGen2();
};
