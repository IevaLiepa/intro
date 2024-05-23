/*
Destrukturizavimas
gimininga "siela" - spread
...rest - surenka viska kas liko masyve
*/

const a = [10, 2, 8, 4, 6];
const first = a[0];
const second = a[1];
const rest = a.slice(2);

console.log(first);
console.log(second);
console.log(rest);

const b = [10, 2];
const first2 = a[0];
const second2 = a[1];
const rest2 = b.slice(2);

console.log(first2);
console.log(second2);
console.log(rest2);

console.clear();

const dict = ['labas', 'rytas', 'Lietuva', 'tau'];
const [word1, word2, ...restOfDict] = dict;
console.log(word1);
console.log(word2);
console.log(restOfDict);

function giveMeTwoNumbers() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    return [a, b];
}
console.log(giveMeTwoNumbers());

