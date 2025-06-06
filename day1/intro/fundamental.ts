////////////////////////////////
//Tipos primitivos
////////////////////////////////
//number - Numeros
let edad: number = 25;
let precio: number = 12.5;

//string - Cadenas de texto
let nombre: string = 'Carlos';

//boolean - Verdadero o falso
let activo: boolean = true;

//null y undefined
let valorNulo: null = null;
let sinValor: undefined = undefined;

////////////////////////////////
//tipos de coleccion
////////////////////////////////
let numeros: number[] = [1, 2, 3];
let palabras: Array<string> = ["uno", "dos"];

//Tuple – Arreglo con tipos fijos
let tupla: [string, number] = ["edad", 30];

//Enumeraciones
enum Dia {
  Lunes,
  Martes,
  Miercoles
}
let hoy: Dia = Dia.Martes;

////////////////////////////////
//Tipos de objeto
////////////////////////////////
let persona: { nombre: string; edad: number } = {
  nombre: "Luis",
  edad: 28
};

//tipos personalizados (alias)
type Usuario = {
  nombre: string;
  correo: string;
};

interface Producto {
  id: number;
  nombre: string;
}
////////////////////////////////
//IF ELSE
////////////////////////////////
let number: number = 18;
let age = 11;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

let score: number = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}


let color: string = "red";

if (color === "blue") {
  console.log("You chose blue.");
} else if (color === "red") {
  console.log("You chose red.");
} else {
  console.log("Unknown color.");
}

let isLoggedIn: boolean = false;

if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please log in.");
}

////////////////////////////////
// LOOPS o Bucles
////////////////////////////////
//1. Contar del 1 al 5
for (let i = 1; i <= 5; i++) {
  console.log("Número:", i);
}

//2. Recorrer un arreglo
let frutas: string[] = ["manzana", "banana", "pera"];

for (let i = 0; i < frutas.length; i++) {
  console.log("Fruta:", frutas[i]);
}

//for...of para recorrer elementos directamente
for (let fruta of frutas) {
  console.log("Fruta con for...of:", fruta);
}
