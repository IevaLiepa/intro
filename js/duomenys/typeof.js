/*
Duomens tipo nustatymas
TYPEOF (duomens tipo nustatymo operatorius)
*/
function empty() {

}

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
console.clear();

const x = 'lfsg';
const y = 7;

if (typeof x !== 'number') {
    console.log('ERROR: x');
} else if (typeof y !== 'number') {
    console.log('ERROR: y');
} else {
    console.log('VISKAS OK');
}

const h = '';
const k = 7;

console.log(typeof (h && k));

if (typeof (h && k) !== 'number') {
    console.log('ERROR');
} else {
    console.log('OK');
}