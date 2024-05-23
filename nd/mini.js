console.clear();

console.log('     '.length);

function intervalSum(start, finish) {
    let answer = 0;
    for (let i = start; i <= finish; i++) {
        console.log('>>>', i);
    }
    return answer;
}


//console.log(intervalSum(0 ,0));
console.log(intervalSum(0, 4));
//console.log(intervalSum(0, 100));
//onsole.log(intervalSum(574, 815));
//console.log(intervalSum(-50, 50));
//console.log(intervalSum(-70, 30));
//0..0
//0..4
//0..100
//574..815
//-50..50
//-70..30
console.clear();

function reverseString(text) {
    let answer = ' ';
    for (let i = 0; i < text.length; i++) {

        console.log(i, text[i]);
        //answer += text[text.length - 1 - i];
        answer = text[i] + answer;
    }
    return answer;
}
console.log(reverseString('labas'), '-->', 'sabal');
console.clear();


function numberCount(start, finish, step) {
    let answer = 0;
    for (let i = start; i <= finish; i += step) {
        console.log('>>>', i);
        answer++;
    }
    return 'Skaiciu intervale tarp ' + start + ' ir ' + finish + ', besidalijanciu be liekanos is ' + step + ' yra ' + answer + ' vienetai.';
}
console.log(numberCount(0, 11, 3));
console.clear();
//1
function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());

