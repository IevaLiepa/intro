/*
As noriu pamatyti visas galimas laiko/laikrodzio kombinacijas valandos tikslumu
intervalas yra nuo 1 iki 12.
pateikimo formatas: 1:00, 2:00
------
1:00
1:15
1:30
1:45
.....
4:45
*/

// for (let val = 1; val <= 4; val++) {
//     console.log('------');
//     let min = 0;
//     console.log(val + ':' + min);
//     min += 15;
//     console.log(val + ':' + min);
//     min += 15;
//     console.log(val + ':' + min);
//     min += 15;
//     console.log(val + ':' + min);
//     min += 15;

// }
for (let val = 1; val <= 4; val++) {
    console.log('------');
    let min = 0;
    for (let i = 0; i < 4; i++) {
        console.log(val + ':' + min);
        min += 15;

    }
}