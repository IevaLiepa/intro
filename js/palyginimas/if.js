/*
IF - palyginimas

Palyginimo operatoriai:
VISI: <, >, <=, >=, ==, !=, ===, !==
NAUDOTINI: <, >, <=, >=, ===, !==
NENAUDOTINI: ==, !=

Sablonai :
if () {}
if () {} else {}
if () {} else if () {}
if ( ){} else if () {} else {}
if ( ){} ...else if () {} ...else if (){}

*/

const age = 99;
const ageLimit = 18;

if (age < ageLimit){
    console.log('Sorry, bet esi per jaunas...');

} else {
    console.log('Ok, uzeik');

}

if (4 < 2){
console.log('Taip, daugiau');
} else {
    console.log ('ne, maziau');
}

const color = 'red';

if (color === 'red'){
    console.log('raudona');
} else {
    console.log('nezinau');
}
if (color === 'blue'){
    console.log('melyna');
}
if (color === 'green'){
    console.log('zalia');
}
