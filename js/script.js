"use strict";
const NumberofFFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: NumberofFFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i = 0;
while (i < 2) {
    
    const a = prompt ('Один из последних просмотренных вами фильмов?', ''),
          b = prompt ('Насколько вы его оцените?', '');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log("error");
        i--;
    }
    if (personalMovieDB.count < 10){
        console.log("Просмотрено довльно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if ( personalMovieDB.count >= 30){
        console.log("Вы киноман");
    } else {
        console.log('Ошибка');
    }
    i++;
}

console.log(personalMovieDB);