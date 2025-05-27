// LADO DEL SERVIDOR
const fs = require("fs");
/*
console.log("primero");
fs.readFile("./a.txt", "utf-8", (errorLectura, contenido) => {
  if (errorLectura) {
    console.error("ERROR LECTURA 1");
  } else {
    console.log("TERCERO 1.1", contenido);
  }
});
console.log("segundo");
*/

/*
console.log("primero");
fs.writeFile(
  "./a.txt",
  "Hola!" + new Date().toString(),
  (errorLectura, contenido) => {
    if (errorLectura) {
      console.error("ERROR ESCRITURA");
    } else {
      console.log("ARCHIVO ESCRITO");
    }
  }
);
console.log("segundo");
*/

console.log("primero");
fs.writeFile(
  "./a.txt",
  "Hola!" + new Date().toString(),
  (errorLectura, contenido) => {
    if (errorLectura) {
      console.error("ERROR ESCRITURA");
    } else {
      console.log("ARCHIVO ESCRITO");
    }
  }
);
console.log("segundo");
