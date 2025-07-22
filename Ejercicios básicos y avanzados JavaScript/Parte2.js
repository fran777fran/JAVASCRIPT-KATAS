// Ejercicio 23
const moviesDur = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];
const smallMovies = [];
const mediumMovies = [];
const largeMovies = [];
for (let movie of moviesDur) {
  if (movie.durationInMinutes < 100) {
    smallMovies.push(movie);
  } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
    mediumMovies.push(movie);
  } else {
    largeMovies.push(movie);
  }
}
console.log("Pequeñas:", smallMovies);
console.log("Medianas:", mediumMovies);
console.log("Grandes:", largeMovies);

// Ejercicio 24
const characters = [
  { name: 'Luke Skywalker', species: 'Human' },
  { name: 'Darth Vader', species: 'Human' },
  { name: 'Chewbacca', species: 'Wookiee' },
  { name: 'Leia Organa', species: 'Human' },
  { name: 'R2-D2', species: 'Droid' },
  { name: 'C-3PO', species: 'Droid' },
  { name: 'Obi-Wan Kenobi', species: 'Human' },
  { name: 'Yoda', species: 'Unknown' },
  { name: 'Han Solo', species: 'Human' }
];
const humanCharacters = [];
for (let char of characters) {
  if (char.species === "Human") {
    humanCharacters.push(char);
  }
}
console.log(humanCharacters);

// Ejercicio 25
const moviesCount = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
];
let before2000 = 0;
let after2000 = 0;
for (let movie of moviesCount) {
  if (movie.releaseYear < 2000) before2000++;
  else after2000++;
}
console.log("Antes del 2000:", before2000);
console.log("Después del 2000:", after2000);

// Ejercicio 26
const songs = [
  { title: 'Bohemian Rhapsody', genre: 'Rock', duration: 5.55 },
  { title: 'Stairway to Heaven', genre: 'Rock', duration: 7.58 },
  { title: 'Billie Jean', genre: 'Pop', duration: 4.54 },
  { title: 'Hotel California', genre: 'Rock', duration: 6.31 },
  { title: 'Sweet Child o Mine', genre: 'Rock', duration: 5.56 },
  { title: 'Smells Like Teen Spirit', genre: 'Rock', duration: 5.01 },
  { title: 'Comfortably Numb', genre: 'Rock', duration: 6.23 },
  { title: 'Wish You Were Here', genre: 'Rock', duration: 5.34 },
  { title: 'Black Dog', genre: 'Rock', duration: 4.54 },
  { title: 'Thunderstruck', genre: 'Rock', duration: 4.52 },
  { title: 'Crazy Love', genre: 'Pop', duration: 3.52 },
];
const rockPlaylist = [];
for (let song of songs) {
  if (song.genre === "Rock" && song.duration > 5) {
    rockPlaylist.push(song);
  }
}
console.log(rockPlaylist);

// Ejercicio 27
const cartoons = [
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
];
let oldestCartoon = cartoons[0];
for (let cartoon of cartoons) {
  if (cartoon.debut < oldestCartoon.debut) oldestCartoon = cartoon;
}
console.log(oldestCartoon.name);

// Ejercicio 28
const albums = [
  { title: 'Led Zeppelin IV', genre: 'Rock', duration: 42.19 },
  { title: 'The Dark Side of the Moon', genre: 'Rock', duration: 42.49 },
  { title: 'Back in Black', genre: 'Rock', duration: 42.11 },
  { title: 'Hotel California', genre: 'Rock', duration: 43.08 },
  { title: 'Abbey Road', genre: 'Rock', duration: 47.23 },
  { title: 'Thriller', genre: 'Pop', duration: 42.19 },
  { title: 'A Night at the Opera', genre: 'Rock', duration: 43.08 },
  { title: 'The Wall', genre: 'Rock', duration: 81.00 },
  { title: 'Born to Run', genre: 'Rock', duration: 39.26 },
  { title: 'The Joshua Tree', genre: 'Rock', duration: 50.11 }
];
let totalRockDuration = 0;
for (let album of albums) {
  if (album.genre === "Rock") {
    totalRockDuration += album.duration;
  }
}
console.log(totalRockDuration);

// Ejercicio 29
const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];
const groupedByDecade = {};
for (let movie of starWarsMovies) {
  let decade = Math.floor(movie.releaseYear / 10) * 10;
  if (!groupedByDecade[decade]) groupedByDecade[decade] = [];
  groupedByDecade[decade].push(movie);
}
console.log(groupedByDecade);

// Ejercicio 30
const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];
const tracksByGenre = {};
for (let track of tracks) {
  if (!tracksByGenre[track.genre]) tracksByGenre[track.genre] = [];
  tracksByGenre[track.genre].push(track);
}
console.log(tracksByGenre);

// Ejercicio 31
const artists = [
  { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
  { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
  { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
  { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
  { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
];
for (let artist of artists) {
  for (let influence of artist.influences) {
    console.log(`${artist.name} -> ${influence}`);
  }
}

// Ejercicio 32
function findOldestXMen(xMen) {
  let oldest = xMen[0];
  for (let mutant of xMen) {
    if (mutant.year < oldest.year) oldest = mutant;
  }
  return oldest;
}
const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];
console.log(findOldestXMen(xMen));

// Ejercicio 33
const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};
function getCapital(country) {
  if (capitals[country]) {
    return capitals[country];
  } else {
    return "Capital no encontrada para " + country;
  }
}
console.log(getCapital("France"));
console.log(getCapital("Brazil"));

// Ejercicio 34
function averageMovieDuration(movies) {
  let total = 0;
  for (let movie of movies) {
    total += movie.duration;
  }
  return total / movies.length;
}
const moviesAvg = [
  { title: 'Inception', duration: 148 },
  { title: 'The Dark Knight', duration: 152 },
  { title: 'Interstellar', duration: 169 },
  { title: 'Dunkirk', duration: 106 },
  { title: 'The Prestige', duration: 130 },
  { title: 'Memento', duration: 113 },
  { title: 'Batman Begins', duration: 140 },
  { title: 'The Dark Knight Rises', duration: 164 },
  { title: 'Tenet', duration: 150 },
  { title: 'Insomnia', duration: 118 }
];
console.log(averageMovieDuration(moviesAvg));

// Ejercicio 35
function findMutantByPower(mutants, power) {
  let found = mutants.filter(m => m.power === power);
  if (found.length) {
    return `Mutantes encontrados: ${found.map(m => m.name).join(', ')}`;
  } else {
    return "No se encontró ningún mutante con ese poder.";
  }
}
const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];
console.log(findMutantByPower(mutants, 'telepathy'));
console.log(findMutantByPower(mutants, 'flying'));

// Ejercicio 36
function calculateActorsAges(actors) {
  const year = new Date().getFullYear();
  return actors.map(actor => ({ name: actor.name, age: year - actor.born }));
}
const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
  { name: 'Meryl Streep', born: 1949 },
  { name: 'Brad Pitt', born: 1963 },
  { name: 'Johnny Depp', born: 1963 },
  { name: 'Scarlett Johansson', born: 1984 },
  { name: 'Jennifer Lawrence', born: 1990 },
  { name: 'Denzel Washington', born: 1954 },
  { name: 'Morgan Freeman', born: 1937 },
  { name: 'Cate Blanchett', born: 1969 }
];
console.log(calculateActorsAges(actors));

// Ejercicio 37
const moviesCat = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];
const categorias = [];
for (let movie of moviesCat) {
  for (let cat of movie.categories) {
    if (!categorias.includes(cat)) categorias.push(cat);
  }
}
console.log(categorias);

// Ejercicio 38
const usersVol = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];
let sumVol = 0, countVol = 0;
for (let user of usersVol) {
  for (let sound in user.favoritesSounds) {
    sumVol += user.favoritesSounds[sound].volume;
    countVol++;
  }
}
console.log("Media de volumen:", sumVol / countVol);

// Ejercicio 39
const usersSound = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];
const soundCounts = {};
for (let user of usersSound) {
  for (let sound in user.favoritesSounds) {
    soundCounts[sound] = (soundCounts[sound] || 0) + 1;
  }
}
console.log(soundCounts);

// Ejercicio 40
function findArrayIndex(array, text) {
    return array.indexOf(text);
}
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];
console.log(findArrayIndex(mainCharacters, "Leia"));
console.log(findArrayIndex(mainCharacters, "Obi-Wan"));

// removeItem
function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}
let chars = [...mainCharacters];
console.log(removeItem(chars, "Chewbacca"));

// Ejercicio 41
function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}
console.log(rollDice(6));
console.log(rollDice(20));

// Ejercicio 42
function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
}
const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];
console.log(swap(fantasticFour, 0, 2));