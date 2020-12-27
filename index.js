let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while (numberOfFilms == '' || numberOfFilms == 0 || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms(){
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
}

rememberMyFilms();

function detectPersonalLevel(){
if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}
}

detectPersonalLevel();



function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB)
    }

}

showMyDB();


function writeYourGenres() {
    for (let i=0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
    }
}

writeYourGenres();




/* Задание на урок:

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/