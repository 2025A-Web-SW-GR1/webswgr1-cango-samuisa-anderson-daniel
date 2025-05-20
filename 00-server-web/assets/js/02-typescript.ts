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

// Variables por valor o por referencia
// Variables por valor
// Primitivas: number string boolean

let ageAnderson = 21;
let ageDaniel = ageAnderson;

console.log(ageAnderson);
console.log(ageDaniel);
ageAnderson = ageDaniel + 1;
console.log(ageAnderson);
console.log(ageDaniel);

// Variables por referencia
// Object: {} []

let notas = {
  total: 10,
};

let notas2bim = notas; // REFERENCIA
notas2bim.total = notas2bim.total + 1; //

// Como clonar
let notasClonadasUno = Object.assign({}, notas);
let arregloACopiar = [1, 2, 3];
let arregloClonado = Object.assign([], arregloACopiar);
notasClonadasUno.total = notasClonadasUno.total + 1;
console.log(notas); // { total: 11 }
console.log(notas2bim); // { total: 11 }
console.log(notasClonadasUno); // { total : 12 }

// Arreglos
const arregloEjemplo = [1, 2, 3, 4, 5];
// for of (Obtenemos el VALOR)
for (let valorDelArreglo of arregloEjemplo) {
  console.log("Valor: ", valorDelArreglo);
}
//for in (Obtenemos el INDICE)
for (let indiceDelArreglo in arregloEjemplo) {
  console.log("Valor: ", indiceDelArreglo);
  console.log("Valor: ", arregloEjemplo[indiceDelArreglo]);
}
// Añadir al final un elemento
arregloEjemplo.push(6);
// Eliminar el úñtimo elemento
arregloEjemplo.pop();
// Añadir añ principio del arreglo
arregloEjemplo.unshift(0);
// Eliminar y agregar elementos
// splice - indice donde empezar
//        - numero de elementos a eliminar
//        - elemento a añadir
arregloEjemplo.splice(
  0, // empezamos en el indice 0
  3, // eliminamos 3 elementos
  3,
  4,
  5
);
/**
 * [1,2,3,4,5] -> Arreglo original
 * [0,1,2] -> Eliminados
 * [3,4,5,3,4,5] -> Arreglo final
 */

// OPERADORES
/**
 * find
 * finIndex
 * foreach
 * map
 * filter
 * some
 * avery
 * reduce
 */

// FUNCIONES
function soloNumeros(a, b, c) {
  return a - b + c;
}

function soloNumerosTs(a: number, b: number, c: number) {
  return a - b + c;
}
function soloImprimir(text: string): void {
  console.log(text);
}
function soloImprimir2(text: string): undefined {
  console.log(text);
}

// FUNCIONES NOMBRADAS
function nombreDeLaFuncion() {}

// FUNCIONES ANONIMAS
const funcionSinNombre = function () {};
nombreDeLaFuncion();
funcionSinNombre();
[].forEach(function () {});

// FAT ARROW FUNCTIONS
const functionFatArrow = (a: number, b: number): number => a + b;
const functionFatArrowSinParametros = () => console.log("sin parametros");

// Parametro infinitos
function sumarNumeros(...todosNumeros: number[]): number {
  let total = 10;
  for (let valorNumero of todosNumeros) {
    total = total + valorNumero;
  }
  return total;
}

sumarNumeros(1, 2, 3, 4, 5, 6, 7, 8, 9);

// DESTRUCTURACION
const andersonDestructuracion = {
  nombre: "Anderson",
};
const danielDestructuracion = {
  nombre: "Daniel",
  apellido: "Samuisa",
};
// MERGE DE LAS DOS VARIABLES -> EL ORDEN IMPORTA
const andersonDanielDest = {
  ...andersonDestructuracion,
  ...danielDestructuracion,
};
// [nombre: "Anderson", apellido: "Samuisa"]
const danielAndersonDest = {
  ...danielDestructuracion,
  ...andersonDestructuracion,
};
// [nombre: "Daniel", apellido: "Samuisa"]

// ARREGLOS
const arreglosUnoDest = [1, 2, 3];
const arreglosDosDest = [4, 5, 6];
//MERGE
const unoDosDest = [...arreglosUnoDest, ...arreglosDosDest];
const dosUnoDest = [...arreglosDosDest, ...arreglosUnoDest];
// La destructuracion es una forma de clonacion
