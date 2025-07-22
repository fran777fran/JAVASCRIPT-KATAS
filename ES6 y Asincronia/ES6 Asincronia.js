// Ejercicio 1
// 1.1
const game = {title: 'The Last of Us 2', gender: ['action', 'zombie', 'survival'], year: 2020};
const { title, gender, year } = game;
console.log(title);
console.log(gender);
console.log(year);

// 1.2
const fruits = ['Banana', 'Strawberry', 'Orange'];
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

// 1.3
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'} 
};
const { name, race } = animalFunction();
console.log(name);
console.log(race);

// 1.4
const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }
const { name: carName, itv } = car;
const [year1, year2, year3] = itv;
console.log(carName);
console.log(itv);
console.log(year1, year2, year3);

// Ejercicio 2
// 2.1
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList];
console.log(pointsListCopy);

// 2.2
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyCopy = {...toy};
console.log(toyCopy);

// 2.3
const pointsLis2 = [54,87,99,65,32];
const joinedPoints = [...pointsList, ...pointsLis2];
console.log(joinedPoints);

// 2.4
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};
const mergedToy = {...toy, ...toyUpdate};
console.log(mergedToy);

// 2.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsCopy = [...colors.slice(0,2), ...colors.slice(3)];
console.log(colorsCopy);

// Ejercicio 3
// 3.1
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const names = users.map(user => user.name);
console.log(names);

// 3.2
const namesAnacleto = users.map(user => user.name.startsWith('A') ? 'Anacleto' : user.name);
console.log(namesAnacleto);

// 3.3
const cities = [
	{isVisited:true, name: 'Tokyo'},
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'},
	{isVisited:false, name: 'Seul'}
];
const visitedCities = cities.map(city => city.isVisited ? city.name + ' (Visitado)' : city.name);
console.log(visitedCities);

// Ejercicio 4
// 4.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const adultAges = ages.filter(age => age > 18);
console.log(adultAges);

// 4.2
const evenAges = ages.filter(age => age % 2 === 0);
console.log(evenAges);

// 4.3
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const lolStreamers = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends');
console.log(lolStreamers);

// 4.4
const streamersWithU = streamers.filter(streamer => streamer.name.includes('u'));
console.log(streamersWithU);

// 4.5
const legendsStreamers = streamers.filter(streamer => streamer.gameMorePlayed.includes('Legends'))
    .map(streamer => {
        if (streamer.age > 35) {
            return {...streamer, gameMorePlayed: streamer.gameMorePlayed.toUpperCase()};
        }
        return streamer;
    });
console.log(legendsStreamers);

// Ejercicio 5 (HTML ya dado)
// JS para el input filter
const streamersEj5 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

document.querySelector('input[data-function="toFilterStreamers"]').addEventListener('input', function(e) {
    const value = e.target.value.toLowerCase();
    const filtered = streamersEj5.filter(streamer => streamer.name.toLowerCase().includes(value));
    console.log(filtered);
});

// Ejercicio 6
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martínez Lorenzo', score: 6},
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

// 6.1
const totalScore = exams.reduce((acc, exam) => acc + exam.score, 0);
console.log(totalScore);

// 6.2
const totalApprovedScore = exams.filter(exam => exam.score >= 5).reduce((acc, exam) => acc + exam.score, 0);
console.log(totalApprovedScore);

// 6.3
const averageScore = exams.reduce((acc, exam) => acc + exam.score, 0) / exams.length;
console.log(averageScore);

// Ejercicio 7
const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
];

const rpgGames = videogames.filter(game => game.genders.includes('RPG'));
const rpgAverage = rpgGames.reduce((acc, game) => acc + game.score, 0) / rpgGames.length;
console.log(rpgAverage);

// Ejercicio 8 (index.js para el HTML dado)
document.addEventListener('DOMContentLoaded', async () => {
    const select = document.getElementById('character-list');
    const img = document.querySelector('.character-image');

    const response = await fetch('https://thronesapi.com/api/v2/Characters');
    const characters = await response.json();

    // Rellenar el select con los nombres
    characters.forEach(character => {
        const option = document.createElement('option');
        option.value = character.fullName;
        option.textContent = character.fullName;
        select.appendChild(option);
    });

    // Mostrar imagen del personaje seleccionado
    select.addEventListener('change', () => {
        const selected = characters.find(char => char.fullName === select.value);
        img.src = selected.imageUrl;
    });

    // Mostrar la imagen del primero
    if (characters.length > 0) {
        select.value = characters[0].fullName;
        img.src = characters[0].imageUrl;
    }
});

// Ejercicio 9 (index.js para el HTML dado)
document.addEventListener('DOMContentLoaded', async () => {
    const img = document.querySelector('.random-image');
    // Generar un número aleatorio entre 1 y 151
    const randomId = Math.floor(Math.random() * 151) + 1;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const pokemon = await response.json();
    // Puedes elegir la imagen:
    img.src = pokemon.sprites.other['official-artwork'].front_default;
});