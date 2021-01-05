
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == 0 || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {            
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = +prompt('На сколько оцените его?');
                  if ( a != null && b != null && a != "" && b != '' && a.length < 50 ) {
                    personalMovieDB.movies[a] = b;
                    console.log('done');
                } else { 
                    console.log('error');
                    i--;
                }
        }
        },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i=0; i < 3; i++) {

            let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`).toLowerCase;

            if (genre == '' || genre == null) {
                i--;
            } else {
                personalMovieDB.genres[i] = genre;
            }                        
        }

        personalMovieDB.genres.forEach((item, i) => console.log(`"Любимый жанр #${i + 1} - это ${item}"`))
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }

    }
}


/* Задание на урок:

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
*/

'use strict';

// Код возьмите из предыдущего домашнего задания