/*
ARRAY - masyvas, sarasas, listas, matrica, kolekcija, rinkinys
*/


const marks = [10, 2, 8, 4, 6];
console.log(marks);

const sum2 = 0;
const count2 = marks.length;
const average2 = sum2 / count2;

console.log('Kiekis', count2);
console.log('Vidurkis', average2);

console.log('>>>', marks[0]);
console.log('>>>', marks[1]);
console.log('>>>', marks[2]);
console.log('>>>', marks[3]);
console.log('>>>', marks[4]);

const sum3 = marks[0] + marks[1] + marks[3] + marks[4];
const count3 = marks.length;
const average3 = sum3 / count3;

console.log('Suma', sum3);
console.log('Kiekis', count3);
console.log('Vidurkis', average3);

let sum4 = 0;
sum4 = sum4 + marks[0];
sum4 = sum4 + marks[1];
sum4 = sum4 + marks[2];
sum4 = sum4 + marks[3];
sum4 += marks[4];

console.log(sum4);

let h = 6;
console.log(h);
//pirmiau spausdina poto padidina
console.log(h++);
//pirmiau padidina poto spausdina
console.log(++h);
console.clear();

let g = 6;
console.log(g);
console.log(g--);
console.log(--g);

console.clear ();


function marksAverage(marks) {
    if(marks.length === 0) {
    return 'Vidurkis: nera pazymiu.';
}
}
let sum = 0;

if (marks.length > 0) {
sum += marks[0];
}

if (marks.length > 1) {
sum += marks[1];
}
if (marks.length > 2) {
    sum += marks[2];

    if (marks.length > 3) {
        sum += marks[3];

}
return 'Vidurkis: ' + (sum / marks.length);
}
const jonoPazymiai = [];
console.log(jonoPazymiai);
console.log(marksAverage(jonoPazymiai));

jonoPazymiai.push(10);
console.log(jonoPazymiai);
console.log(marksAverage(jonoPazymiai));

jonoPazymiai.push(2);
console.log(jonoPazymiai);
console.log(marksAverage(jonoPazymiai));

jonoPazymiai.push(8);
console.log(jonoPazymiai);
console.log(marksAverage(jonoPazymiai));