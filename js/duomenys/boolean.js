/*
Boolean - logines reiksmes

-true
-false

Boolean logikos operatoriai:
- && (and)
- || (or)
- ! (not)

Kaip interpretuojami kiti duomenu tipai ir ju reiksmes, jei jos yra naudojamos lyg boolean'ai?
String:
- jei tuscias-false
- jei ne tuscias-true

Number:
- jei nulis-false
- jei ne nulis-true
- jei NaN - false
- jei infinity - true
- jei -infinity - true

Array: 
- jei tuscias - true
- jei ne tuscias - true

Object:
- jei tuscias - true
- jei ne tuscias - true

Undefined - false
null - false
*/

const username = 'Jonas';
const age = 99;
const isSunShining = true;
const hasFuel = false;

console.log(isSunShining);
console.log(hasFuel);

console.log('KAIP NENAUDOTI:', (true + true) * (true + true + true));
console.log('KAIP NENAUDOTI:', true * false);

console.log('-------');

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(true && true && true);
console.log(true && true || false);
console.log(true || false);

console.log(true && true || true || true);

console.clear();

// 1

if (2) {
    console.log(true);
} else {
    console.log(false);
}

console.log('-----');

//2


const bbb = 4 > 2
if (bbb) {
    console.log(true);
} else {
    console.log(false);
}



