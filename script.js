'use strict'

let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов Вы посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов Вы посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    private: false
};






function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Последний просмотренный фильм", ""),
            b = prompt("Ваша оценка фильму", "");
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movie[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    
    
    }
}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Мало посмотрели');
    } else if (personalMovieDB.count <= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt (`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();