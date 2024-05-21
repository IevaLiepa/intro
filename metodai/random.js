//RANDOM
//[0...1)
console.log(Math.random());

function moneta() {
    if (Math.random() < 0.5) {
        //[0..0.5)
        return 'Skaicius';
    } else {
        //[0.5..1)
        return 'Herbas';
    }
}
let herbai = 0;
for (let i = 0; i < 10; i++) {
    const iskrito = moneta();
    if (iskrito === 'Herbas') {
        herbai++;
    }
    console.log(iskrito);
}

