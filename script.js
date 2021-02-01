const numberOfFilms = prompt ('Сколько фильмов Вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    private: false
};


const a = prompt ("Последний просмотренный фильм", ""),
      b = prompt ("Ваша оценка фильму", ""),
      c=  prompt ("Последний просмотренный фильм", ""),
      d = prompt ("Ваша оценка фильму", "");


personalMovieDB.movie[a] = b,
personalMovieDB.movie[c] = d;

console.log(personalMovieDB);