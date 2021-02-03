'use strict'

const numberOfFilms = prompt('Сколько фильмов Вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    private: false
};




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


};

if (personalMovieDB.count < 10) {
    console.log ('Мало посмотрели');
} else if (personalMovieDB.count <= 10 && personalMovieDB.count <30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log ('Ошибка');
}

console.log(personalMovieDB);