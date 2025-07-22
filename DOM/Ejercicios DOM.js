/* Ejercicio 1 */

// 1.1 Mostrar el botón con la clase .showme
const botonShowme = document.querySelector('.showme');
console.log(botonShowme);

// 1.2 Mostrar el h1 con el id #pillado
const h1Pillado = document.querySelector('#pillado');
console.log(h1Pillado);

// 1.3 Mostrar todos los <p>
const allP = document.querySelectorAll('p');
console.log(allP);

// 1.4 Mostrar todos los elementos con la clase .pokemon
const allPokemon = document.querySelectorAll('.pokemon');
console.log(allPokemon);

// 1.5 Mostrar todos los elementos con el atributo data-function="testMe"
const allTestMe = document.querySelectorAll('[data-function="testMe"]');
console.log(allTestMe);

// 1.6 Mostrar el 3er personaje con el atributo data-function="testMe"
const tercerPersonaje = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(tercerPersonaje);


/* Ejercicio 2 */

// 2.1 Inserta dinámicamente un div vacío en el HTML
const divVacio = document.createElement('div');
document.body.appendChild(divVacio);

// 2.2 Inserta dinámicamente un div que contenga una p
const divConP = document.createElement('div');
const pEnDiv = document.createElement('p');
pEnDiv.textContent = "Hola, soy un párrafo dentro de un div.";
divConP.appendChild(pEnDiv);
document.body.appendChild(divConP);

// 2.3 Inserta dinámicamente un div con 6 p usando un loop
const divCon6P = document.createElement('div');
for(let i=1; i<=6; i++) {
    const p = document.createElement('p');
    p.textContent = `Párrafo número ${i}`;
    divCon6P.appendChild(p);
}
document.body.appendChild(divCon6P);

// 2.4 Inserta una p con el texto 'Soy dinámico!'
const pDinamico = document.createElement('p');
pDinamico.textContent = 'Soy dinámico!';
document.body.appendChild(pDinamico);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'
const h2Insert = document.querySelector('.fn-insert-here');
if(h2Insert) h2Insert.textContent = 'Wubba Lubba dub dub';

// 2.6 Basado en el array, crea una lista ul > li
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ulApps = document.createElement('ul');
apps.forEach(app => {
    const li = document.createElement('li');
    li.textContent = app;
    ulApps.appendChild(li);
});
document.body.appendChild(ulApps);

// 2.7 Elimina los nodos con la clase .fn-remove-me
document.querySelectorAll('.fn-remove-me').forEach(node => node.remove());

// 2.8 Inserta una p 'Voy en medio!' entre los dos div
const allDivs = document.querySelectorAll('div');
if(allDivs.length >= 2) {
    const pMedio = document.createElement('p');
    pMedio.textContent = 'Voy en medio!';
    allDivs[0].parentNode.insertBefore(pMedio, allDivs[1]);
}

// 2.9 Inserta p 'Voy dentro!' en todos los div con clase .fn-insert-here
document.querySelectorAll('div.fn-insert-here').forEach(div => {
    const pDentro = document.createElement('p');
    pDentro.textContent = 'Voy dentro!';
    div.appendChild(pDentro);
});


/* Ejercicio 3 */

// 1.1 Crea una lista ul > li con los países
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulCountries = document.createElement('ul');
countries.forEach(country => {
    const li = document.createElement('li');
    li.textContent = country;
    ulCountries.appendChild(li);
});
document.body.appendChild(ulCountries);

// 1.2 Elimina el elemento con clase .fn-remove-me
const rmNode = document.querySelector('.fn-remove-me');
if(rmNode) rmNode.remove();

// 1.3 Lista ul > li de cars dentro de div data-function="printHere"
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const ulCars = document.createElement('ul');
cars.forEach(car => {
    const li = document.createElement('li');
    li.textContent = car;
    ulCars.appendChild(li);
});
const divPrintHere = document.querySelector('div[data-function="printHere"]');
if(divPrintHere) divPrintHere.appendChild(ulCars);

// 1.4 Serie de divs con h4 y img
const countriesDiv = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
const container = document.createElement('div');
container.id = 'countries-container';
countriesDiv.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'country-card';
    const h4 = document.createElement('h4');
    h4.textContent = item.title;
    const img = document.createElement('img');
    img.src = item.imgUrl;
    img.alt = item.title;
    div.appendChild(h4);
    div.appendChild(img);
    container.appendChild(div);
});
document.body.appendChild(container);

// 1.5 Botón que elimina el último div de la serie
const btnRemoveLast = document.createElement('button');
btnRemoveLast.textContent = 'Eliminar último';
btnRemoveLast.onclick = function() {
    const allCards = document.querySelectorAll('#countries-container .country-card');
    if(allCards.length > 0)
        allCards[allCards.length-1].remove();
};
document.body.appendChild(btnRemoveLast);

// 1.6 Botón en cada div que elimina ese elemento
document.querySelectorAll('#countries-container .country-card').forEach(div => {
    const btnRemove = document.createElement('button');
    btnRemove.textContent = 'Eliminar este';
    btnRemove.onclick = function() {
        div.remove();
    };
    div.appendChild(btnRemove);
});


/* Ejercicio 4 */

// 1.1 Añade botón y evento click
const btnClick = document.createElement('button');
btnClick.id = 'btnToClick';
btnClick.textContent = 'Haz click aquí';
document.body.appendChild(btnClick);

btnClick.addEventListener('click', function(event){
    console.log('Click event:', event);
});

// 1.2 Evento focus en input .focus
const inputFocus = document.querySelector('input.focus');
if(inputFocus) {
    inputFocus.addEventListener('focus', function(){
        console.log('Valor actual del input:', inputFocus.value);
    });
}

// 1.3 Evento input en input .value
const inputValue = document.querySelector('input.value');
if(inputValue) {
    inputValue.addEventListener('input', function(){
        console.log('Valor en input:', inputValue.value);
    });
}


/* Ejercicio 5 */

// Crea una lista ul > li para los albums y apariencia web sencilla
const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

// Creamos "web" básica
const main = document.createElement('main');
main.style.width = '400px';
main.style.margin = '30px auto';
main.style.padding = '20px';
main.style.background = '#f9f9f9';
main.style.borderRadius = '10px';
main.style.boxShadow = '0 0 10px #ccc';

const h1 = document.createElement('h1');
h1.textContent = "My Metal Albums";
h1.style.textAlign = 'center';

const ulAlbums = document.createElement('ul');
ulAlbums.style.listStyle = 'none';
ulAlbums.style.padding = '0';

albums.forEach(album => {
    const li = document.createElement('li');
    li.textContent = album;
    li.style.padding = '10px';
    li.style.margin = '8px 0';
    li.style.background = '#222';
    li.style.color = '#eee';
    li.style.fontWeight = 'bold';
    li.style.borderRadius = '5px';
    ulAlbums.appendChild(li);
});

main.appendChild(h1);
main.appendChild(ulAlbums);
document.body.appendChild(main);