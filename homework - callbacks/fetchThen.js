const fs = require("fs").promises;

console.log("Inicio (.then)");

fs.readFile("./callbacks.txt", "utf-8")
  .then((data) => {
    console.log("Leído: " + data);
    const nuevoContenido = data + "\n" + new Date().toString();
    console.log("Escrito: " + nuevoContenido);
    return fs.writeFile("./callbacks.txt", nuevoContenido);
  })
  .then(() => {
    console.log("Archivo actualizado correctamente (.then)");
  })
  .catch((err) => {
    console.error("Error:", err);
  });

console.log("Fin (.then)");
