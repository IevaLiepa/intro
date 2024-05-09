/*
Duomens tipo nustatymas
TYPEOF (duomens tipo nustatymo operatorius)
*/

console.log(typeof 5);
console.log(typeof 'labas');
console.log(typeof true);
console.log(typeof []);
console.log(typeof empty);
console.log(typeof {});

//kai nori patikrinti ar tai yra masyvas
console.log(Array.isArray([]));

if (null === null) {
    console.log('taip');
} else {
    console.log('ne');
}
console.clear();

const a = 12526;
const aType = typeof a;

if (aType === 'string') {
    console.log('As dirbu su STRING');
} else {
    console.log('As dirbu ne su STRING');
}