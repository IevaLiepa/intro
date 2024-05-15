
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