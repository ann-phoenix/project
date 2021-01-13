'use strict';

console.log(4 + " - object");
console.log(4 + +" - object");

console.log(4 + 6);
console.log(4 + '6');
console.log(4 + +'6');

let incr = 10,
	decr = 10;

	incr++; //постфиксная форма
	decr--;

	console.log(incr);
	console.log(decr);

	--decr; //префиксная форма
	++incr;

console.log(5%2);

console.log(4 == 4);
console.log(4 == '4');
console.log(2 + 2 * 2 == 10);
console.log(2 + 2 * 2 !=10);

console.log(4 === '4');
console.log(4 === 4);
console.log(4 !== 4);

const isOpened = true;
const isClosed = false;

console.log(isOpened && isClosed);
console.log(isOpened || isClosed);

console.log(isOpened && !isClosed);
console.log(!isOpened || isClosed);