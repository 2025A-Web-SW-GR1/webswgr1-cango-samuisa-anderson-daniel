const fs = require("fs").promises;

async function actualizarArchivo() {
  try {
    console.log("Inicio (async/await)");

    const data = await fs.readFile("./callbacks.txt", "utf-8");
    console.log("Leído: " + data);
    const nuevoContenido = data + "\n" + new Date().toString();
    await fs.writeFile("./callbacks.txt", nuevoContenido);
    console.log("Escrito: " + nuevoContenido);
    console.log("Archivo actualizado correctamente (async/await)");
  } catch (err) {
    console.error("Error:", err);
  }

  console.log("Fin (async/await)");
}

actualizarArchivo();
