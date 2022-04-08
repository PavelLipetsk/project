"use strict";
let NumberofFilms;

function start() {
    NumberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (NumberofFilms == '' || NumberofFilms == null || isNaN(NumberofFilms)) {
        NumberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: NumberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms () {
    let i = 0;
    while (i < 2) {

    const a = prompt('Один из последних просмотренных вами фильмов?', ''),
        b = prompt('Насколько вы его оцените?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log("error");
    
    }
    i ++;
}
}

rememberMyFilms();

function detectPersonalLevel () { 
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довльно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log('Ошибка');
    }
}
detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB);

function writeYourGenres () {
    let i = 0;
    while (i < 3) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    i ++;
    }
}
writeYourGenres();

console.log(personalMovieDB);