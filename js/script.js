"use strict";
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('сколько фильмов вы уже просмотрели?','');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('сколько фильмов вы уже просмотрели?','');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i=0; i<2; i++){
        const a = prompt('один из последних просмотренных фильмов', '');
        const b = prompt('на сколько оцените его?','');
    
        if (a!=null && b!=null && a!='' && b!='' && a.length<50){
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено мало');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('киноман');
    } else {
        console.log('ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let genre = prompt(`любимый жанр номер ${i}`);
        personalMovieDB.genres[i-1] = genre;
    }
}

writeYourGenres();