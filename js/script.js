'use strict';



const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из последних просмотренных фильмов?', ''),
				b = prompt('На сколько оцениваете его?', '');

			if (a != null && b != null && a != '' && b != '' && a.length < 50) { //null-закрытый,""-пустая сторока,a.len-длин
				personalMovieDB.movies[a] = b;
				console.log('done');

			} else {
				i--; //возвращаем цикл назад
				console.log('error');
			}
		}
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count >= 30) {
			console.log('Вы киноман');
		} else if (personalMovieDB.count >= 10 < 30) {
			console.log('Вы классический зритель');
		} else {
			console.log('Произошла ошибка');
		}
	},

	showMyDB: function (hidden) { // hidden - аргумент функции

		if (!hidden) {
			console.log(personalMovieDB);
		}
	},

	writeYourGenres: function () {
		for (let i = 1; i <= 3; i++) { //вызываем с 1, тк пользователь не знает порядок в программирован
			personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`); // [i - 1]-возвращаем верный порядок
		}
	}

};
