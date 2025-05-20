console.log("Hello Typescript");
// Strings
var nombres = "Anderson Daniel";
var nombresTs = "Anderson Daniel TS";
console.log(typeof nombres, "nombres");
// Números enteros
var numeros = 1;
var numerosTs = 1;
console.log(typeof numeros, "numeros");
// Números decimales
numeros = 1.1;
console.log(typeof numeros, "numeros decimales");
// Boleanos
var boleanos = true;
var boleanosTs = false;
boleanos = false;
console.log(typeof boleanos, "Boleanos");
// Nulos
var nulos = null;
var nullosTs = null;
console.log(typeof nulos, "nulos");
// Arreglos
var arreglos = [];
var arreglosTs = [];
var arreglosTs2 = [];
console.log(typeof arreglos, "arreglos");
// Undefineds
var undefineds = undefined;
var UndefinedsTs = undefined;
console.log(typeof undefineds, "undefineds");
// Truty y Falsy
var trutyFalsy;
trutyFalsy = "";
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("Falsy");
}
trutyFalsy = "Hello";
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("Falsy");
}
trutyFalsy = 1;
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("Falsy");
}
trutyFalsy = -1;
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("Falsy");
}
trutyFalsy = 1.1;
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("Falsy");
}
trutyFalsy = null;
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("Falsy");
}
trutyFalsy = undefined;
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("Falsy");
}
trutyFalsy = {};
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("Falsy");
}
trutyFalsy = [];
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("Falsy");
}
var anderson = {
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
var ageAnderson = 21;
var ageDaniel = ageAnderson;
console.log(ageAnderson);
console.log(ageDaniel);
ageAnderson = ageDaniel + 1;
console.log(ageAnderson);
console.log(ageDaniel);
// Variables por referencia
// Object: {} []
var notas = {
    total: 10,
};
var notas2bim = notas; // REFERENCIA
notas2bim.total = notas2bim.total + 1; //
