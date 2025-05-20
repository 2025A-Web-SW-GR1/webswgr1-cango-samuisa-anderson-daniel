console.log("Hello Typescript");
// Strings
let nombres = "Anderson Daniel";
let nombresTs: string = "Anderson Daniel TS";
console.log(typeof nombres, "nombres");
// Números enteros
let numeros = 1;
let numerosTs: number = 1;
console.log(typeof numeros, "numeros");
// Números decimales
numeros = 1.1;
console.log(typeof numeros, "numeros decimales");
// Boleanos
let boleanos = true;
let boleanosTs: boolean = false;
boleanos = false;
console.log(typeof boleanos, "Boleanos");
// Nulos
let nulos = null;
let nullosTs: null = null;
console.log(typeof nulos, "nulos");
// Arreglos
let arreglos = [];
let arreglosTs: number[] = [];
let arreglosTs2: Array<number> = [];
console.log(typeof arreglos, "arreglos");
// Undefineds
let undefineds = undefined;
let UndefinedsTs: undefined = undefined;
console.log(typeof undefineds, "undefineds");

// Truty y Falsy
let trutyFalsy: any;
trutyFalsy = "";
if (trutyFalsy) {
  console.log("Truty");
} else {
  console.log("Falsy");
}

trutyFalsy = "Hello";
if (trutyFalsy) {
  console.log("Truty");
} else {
  console.log("Falsy");
}

trutyFalsy = 1;
if (trutyFalsy) {
  console.log("Truty");
} else {
  console.log("Falsy");
}

trutyFalsy = -1;
if (trutyFalsy) {
  console.log("Truty");
} else {
  console.log("Falsy");
}

trutyFalsy = 1.1;
if (trutyFalsy) {
  console.log("Truty");
} else {
  console.log("Falsy");
}

trutyFalsy = null;
if (trutyFalsy) {
  console.log("Truty");
} else {
  console.log("Falsy");
}

trutyFalsy = undefined;
if (trutyFalsy) {
  console.log("Truty");
} else {
  console.log("Falsy");
}

trutyFalsy = {};
if (trutyFalsy) {
  console.log("Truty");
} else {
  console.log("Falsy");
}

trutyFalsy = [];
if (trutyFalsy) {
  console.log("Truty");
} else {
  console.log("Falsy");
}

const anderson: any = {
  name: "Anderson",
  lastname: "Cango",
  age: 21,
  single: true,
  clothe: {
    color: "black",
  },
  pets: ["Orejas 1", "Orejas 2", "Orejas 3"],
};

console.log(anderson);

// Acceder a las propiedades
anderson.name;
anderson["lastname"];
// Modificar valores (reasignar)
anderson.name = "Daniel";
anderson["name"] = "Daniel";

anderson.payment = 12;
anderson["rest"] = 8;

// Eliminar propiedades
anderson.name = undefined;
delete anderson.name;
