"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('сколько фильмов вы уже просмотрели?','');
        while (personalMovieDB.count == '' || 
            personalMovieDB.count == null || 
            isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('сколько фильмов вы уже просмотрели?','');
        }
    },
    rememberMyFilms: function() {
        for (let i=0; i<2; i++){
            const a = prompt('один из последних просмотренных фильмов', '').trim();
            const b = prompt('на сколько оцените его?','');
        
            if (a!=null && b!=null && a!='' && b!='' && a.length<50){
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено мало');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('киноман');
        } else {
            console.log('ошибка');
        }
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    togleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
            
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        // for (let i = 1; i <= 3; i++) {
        //     let genre = prompt(`любимый жанр номер ${i}`);

        //     if (genre === '' || genre == null) {
        //         console.log('Некорректные данные или не ввели данные');
        //         i--;
        //     } else {
        //         personalMovieDB.genres[i-1] = genre;
        //     } 
        // }
        // personalMovieDB.genres.forEach((item, i) => {
        //     console.log(`любимый жанр номер ${i+1} - ${item}`);
        // });

        for (let i = 1; i < 2; i++){
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            if (genres === '' || genres == null) {
                        console.log('Некорректные данные или не ввели данные');
                        i--;
                    } else {
                        personalMovieDB.genres = genres.split(', ');
                        personalMovieDB.genres.sort();
                    } 
                }
                personalMovieDB.genres.forEach((item, i) => {
                    console.log(`любимый жанр номер ${i+1} - ${item}`);
                });
        }

};
