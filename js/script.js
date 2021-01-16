'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
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
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
			b = prompt('На сколько оцениваете его?', '');

		if (a != null && b != null && a != '' && b != '' && a.length < 50) { //null-закрытый,""-пустая сторока,a.len-длина 
			personalMovieDB.movies[a] = b;
			console.log('done');

		} else {
			i--; //возвращаем цикл назад
			console.log('error');
		}
	}
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 30) {
		console.log('Вы киноман');
	} else if (personalMovieDB.count >= 10 < 30) {
		console.log('Вы классический зритель');
	} else {
		console.log('Произошла ошибка');
	}
}

detectPersonalLevel();

function showMyDB(hidden) { // hidden - аргумент функции

	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privet);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) { //вызываем с 1, тк пользователь не знает порядок в программирован
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`); // [i - 1] - возвращаем верный порядок
	}
}

writeYourGenres();