
/*
STRING - tekstas, tekstiniu simboliu grandinele

*/

const name = 'Ieva';
console.log(name);

const name2 = "Maryte";
console.log(name2);

const sakinys = 'Labas rytas, Lietuva';
console.log(sakinys);

// Vienguba (') kabute.
const kabutes1 = "vienguba (') kabute.";
console.log(kabutes1);

//Dviguba  ("") kabute.
const kabutes2 = 'Dviguba (") kabute.';
console.log(kabutes2);

// vienguba (') ir dviguba ("") kabutes.
const kabutes12 = "";
console.log(kabutes12);

const personName = 'Chuck';
const personSurname = 'Norris';
const fullname = personName + ' ' + personSurname;

console.log(fullname);
console.clear();

console.log('split()');

console.log('Labas rytas, Lietuva!'.split(' '));
console.log('----');
const sentence = 'Labas rytas, Lietuva!';
const zodziai = sakinys.split(' ');
console.log(zodziai);
console.log(zodziai[0]);
console.log(zodziai[1]);
console.log(zodziai[2]);
console.clear();
const sentence2 = 'aaaWaaaWaaaWaaa';
const dalys = sentence2.split('W');
console.log(dalys);


/*
<header>
    <img>
    <nav>
        <a></a>
        <a></a>
       </nav>
</heater>
*/
// \r - return
// \n - new line
// \t - tab


const backtick = 'Labas rytas, Lietuva!';
console.log(backtick);


const answer = 4;
const step = 3;
const finish = 11;
const start = 0;

const mini2 = `Skaiciu intervale tarp ${start} ir ${finish}, besidalinanciu be liekanos is ${step} yra ${answer} vienetai.`;
console.log(mini2);