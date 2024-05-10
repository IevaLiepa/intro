function numberSize(n) {
    const nAsText = '' + n;   // ''  + 2 = '2'
    return nAsText.length;
}
console.log(numberSize(2), '--->', 1);
console.log(numberSize(25), '--->', 2);

console.log('' + 1452);