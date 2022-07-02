"use strict";
const numberOfFilms = +prompt('сколько фильмов вы уже просмотрели?','');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('один из последних просмотренных фильмов', '');
const b = prompt('на сколько оцените его?','');
const c = prompt('один из последних просмотренных фильмов', '');
const d = prompt('на сколько оцените его?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
