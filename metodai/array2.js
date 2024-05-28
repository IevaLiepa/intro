const randomData = [10, 0, 3, 3.14, 5, -1, -3.5];

// teigiami sveikieji skaiciai
// ne neigiami sveikieji skaiciai
const tss = randomData
    .filter(n => true)
    .filter(n => Number.isInteger(n))
    .filter(n => n >= 0);
console.log(tss);