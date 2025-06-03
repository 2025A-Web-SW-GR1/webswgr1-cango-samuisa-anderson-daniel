const fs = require("fs");

console.log("Inicio (callbacks)");

fs.readFile("./callbacks.txt", "utf-8", (errLectura, data) => {
  if (errLectura) {
    return console.error("Error al leer:", errLectura);
  }
  console.log("Leído: " + data);
  const nuevoContenido = data + "\n" + new Date().toString();

  fs.writeFile("./callbacks.txt", nuevoContenido, (errEscritura) => {
    if (errEscritura) {
      return console.error("Error al escribir:", errEscritura);
    }

    console.log("Escrito: " + nuevoContenido);
    console.log("Archivo actualizado correctamente (callbacks)");
  });
});

console.log("Fin (callbacks)");
