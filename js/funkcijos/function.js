/*
FUNCTION - funkcija, perpanaudojama logika
() - parametru blokas
{} - logikos blokas

Input => Function() => Output
*/

function funkcijosPavadinimas() {

}

const a = funkcijosPavadinimas();
console.log(a);

function empty() {
    return undefined;
}

console.log(empty());

function giveMeFive() {
    return 5;
}
console.log(giveMeFive());

/*
Input:
name: Jonas
surname: Jonaitis

Output:
Laba diena, as esu Jonas Jonaitis!
*/
function intro(name, lastname) {
    return 'Laba diena, as esu ' + name + ' ' + lastname;
}
console.log(intro('Jonas', 'Jonaitis'));
/*
Input:
- pirmas skaicius = 5
- antras skaicius = 7

Output:
35
*/

function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}

console.log(multiply(5, 7));

// Mano vardas yra Jonas, man 99 metai ir as megstu cepelinus.
// Mano vardas yra Maryte, man 88 metai ir as megstu balionus.
function iLike(name, age, item) {
    return 'Mano vardas yra ' + name + ', man ' + age + 'metai ir as megstu ' + item + '.';
    //return 'Mano vardas yra VARDAS, man XX metai ir as megstu DAKYKAS'

}

console.log(iLike('Jonas', 99, 'cepelinus'));

function price(value) {
    const PVM = 21;
    const priceIncrease = 1 + PVM / 100;
const priceForSale = value * priceIncrease;
    return priceForSale;
}

console.log(price(100));
console.log(price(150));