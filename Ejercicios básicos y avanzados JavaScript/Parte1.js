// Ejercicio 1
// 1. Define tu superhéroe favorito:
let miSuperheroeFavorito = "Hulk";

// 2. Define un número:
let numeroFavorito = 50;

// 3. Define las dimensiones:
let altura = 5;
let longitud = 10;

// 4. Calcula la suma:
let suma = altura + longitud;

// 5. Imprime los resultados:
console.log("miSuperheroeFavorito:", miSuperheroeFavorito);
console.log("numeroFavorito:", numeroFavorito);
console.log("altura:", altura);
console.log("longitud:", longitud);
console.log("suma:", suma);

// Ejercicio 2
// 1. Luke Skywalker cumple años:
const jedi = {nombre: "Luke Skywalker", edad: 19};
jedi.edad = 25;
console.log(jedi);

// 2. Presentación al estilo Leia Organa:
let nombre = "Leia";
let apellido = "Organa";
let edad = 20;
console.log("Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.");

// 3. Calculando el coste total de sables de luz:
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};
let precioTotalSables = sable1.precio + sable2.precio;
console.log("Precio total de los dos sables:", precioTotalSables);

// 4. Actualizando el precio final de las naves:
let precioBaseGlobal = 25000;
const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 50000 + precioBaseGlobal};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 70000 + precioBaseGlobal};
console.log(nave1);
console.log(nave2);

// Ejercicio 3
console.log(10 * 5);           // 3.1
console.log(10 / 2);           // 3.2
console.log(15 % 9);           // 3.3
let p = 10, j = 5; let o = p + j; console.log(o); // 3.4
let c = 10, m = 5; let i = c * m; console.log(i); // 3.5

// Ejercicio 4
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
console.log(aldeanos[3]); // 4.1
aldeanos.push("Cervasio"); // 4.2
aldeanos[0] = "Bambina"; // 4.3
aldeanos.reverse(); // 4.4
aldeanos[aldeanos.indexOf("Canela" || "Narciso")] = "Canela"; // 4.5 (alternativa)
aldeanos[aldeanos.indexOf("Narciso")] = "Canela"; // 4.5
console.log(aldeanos[aldeanos.length - 1]); // 4.6

// Ejercicio 5
const number1 = 10;
const number2 = 20;
const number3 = 2;

if(number1 === 10){
    console.log('number1 es estrictamente igual a 10');
}
if (number2 / number1 === 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}
if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}
if (number3 !== number1) {
  console.log("number3 es distinto number1");
}
if (number3 * 5 === number1) {
  console.log("number3 por 5 es igual a number1");
}
if (number3 * 5 === number1 && number1 * 2 === number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}
if (number2 / 2 === number1 || number1 / 5 === number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

// Ejercicio 6
// 1.1
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// 1.2
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) console.log(i);
}
// 1.3
for (let i = 1; i <= 10; i++) {
  if (i !== 10) {
    console.log('Intentando dormir 🐑');
  } else {
    console.log('¡Dormido!');
  }
}

// Ejercicio 7
function greaterNumber(numberOne , numberTwo) {
  if (numberOne > numberTwo) {
    console.log(numberOne);
  } else {
    console.log(numberTwo);
  }
}
// Ejemplo
greaterNumber(10, 5);

// Ejercicio 8
function findLongestWord(stringList) {
  let longest = stringList[0];
  for (let str of stringList) {
    if (str.length > longest.length) {
      longest = str;
    }
  }
  return longest;
}
const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
console.log(findLongestWord(avengers));

// Ejercicio 9
function sumNumbers(numberList) {
  let sum = 0;
  for (let num of numberList) {
    sum += num;
  }
  return sum;
}
const numbers = [1, 2, 3, 5, 45, 37, 58];
console.log(sumNumbers(numbers));

// Ejercicio 10
function average(numberList) {
  let sum = 0;
  for (let num of numberList) {
    sum += num;
  }
  return sum / numberList.length;
}
const numbersAvg = [12, 21, 38, 5, 45, 37, 6];
console.log(average(numbersAvg));

// Ejercicio 11
function averageWord(list) {
  let sum = 0;
  for (let item of list) {
    if (typeof item === 'number') {
      sum += item;
    } else if (typeof item === 'string') {
      sum += item.length;
    }
  }
  return sum;
}
const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];
console.log(averageWord(mixedElements));

// Ejercicio 12
function removeDuplicates(list) {
  return [...new Set(list)];
}
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
console.log(removeDuplicates(duplicates));

// Ejercicio 13
function nameFinder(nameList, value) {
  const index = nameList.indexOf(value);
  if (index !== -1) {
    return { found: true, position: index };
  } else {
    return { found: false };
  }
}
const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
console.log(nameFinder(names, 'Tony'));
console.log(nameFinder(names, 'Pepper'));

// Ejercicio 14
function repeatCounter(list) {
  const counts = {};
  for (let word of list) {
    counts[word] = (counts[word] || 0) + 1;
  }
  return counts;
}
const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
console.log(repeatCounter(words));

// Ejercicio 15
const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];
for (let product of products) {
  if (product.includes("Camiseta")) {
    console.log(product);
  }
}

// Ejercicio 16
const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];
for (let place of placesToTravel) {
  console.log(place);
}

// Ejercicio 17
const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};
for (let prop in alien) {
  console.log(`La propiedad ${prop} tiene cómo valor: ${alien[prop]}`);
}

// Ejercicio 18
const placesToTravel2 = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];
const filteredPlaces = [];
for (let place of placesToTravel2) {
  if (place.id !== 11 && place.id !== 40) {
    filteredPlaces.push(place);
  }
}
console.log(filteredPlaces);

// Ejercicio 19
const toys = [
    {id: 5, name: 'Transformers'},
    {id: 11, name: 'LEGO'},
    {id: 23, name: 'Hot Wheels'},
    {id: 40, name: 'Rascador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
];
const toysNoGato = [];
for (let toy of toys) {
  if (!toy.name.includes("gato")) {
    toysNoGato.push(toy);
  }
}
console.log(toysNoGato);

// Ejercicio 20
const popularToys = [];
const toys2 = [
    {id: 101, name: 'Super Soaker', sellCount: 15},
    {id: 102, name: 'Tamagotchi', sellCount: 22},
    {id: 103, name: 'Polly Pocket', sellCount: 8},
    {id: 104, name: 'Yo-yo', sellCount: 33},
    {id: 105, name: 'Pikachu plush toy', sellCount: 19},
    {id: 106, name: "Rubik's Cube", sellCount: 27},
    {id: 107, name: 'Fidget Spinner', sellCount: 12},
    {id: 108, name: 'Slinky', sellCount: 5},
    {id: 109, name: 'Magic 8-Ball', sellCount: 38},
    {id: 110, name: 'Troll Doll', sellCount: 20}
];
for (let toy of toys2) {
  if (toy.sellCount > 15) {
    popularToys.push(toy);
  }
}
console.log(popularToys);

// Ejercicio 21
const usersAge = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];
console.log("Usuarios menores de edad:");
for (let user of usersAge) {
  if (user.years < 18) {
    console.log(user.name);
  }
}
console.log("Usuarios mayores de edad:");
for (let user of usersAge) {
  if (user.years >= 18) {
    console.log(user.name);
  }
}

// Ejercicio 22
const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];
let fruitIndex = 0;
for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    foodSchedule[i].name = fruits[fruitIndex];
    fruitIndex++;
  }
}
console.log(foodSchedule);

