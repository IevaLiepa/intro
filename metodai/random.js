//RANDOM
//[0...1)
//tieosiog random skaicius
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

const week = ['pirm', 'antrad', 'trec', 'ketv', 'penk', 'sest', 'sekm'];

//[0..step) 1
//...
//[6step..7step) 7

for (let i = 0; i < 10; i++) {
    const index = Math.floor(Math.random() * week.length);
    console.log(week[index]);
}
