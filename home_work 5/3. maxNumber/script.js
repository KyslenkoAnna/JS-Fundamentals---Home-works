//Task #3 - Поиск максимальной цифры в числе.
/* let num = '67834'.split('');
console.log(Math.max(...num)); */

function biggestNumber(a) {
    m = a % 10;
    a = a / 10;
    while(a > 0){
        if (a % 10 > m) 
        {
            m = a % 10;
        };
        a = a / 10;
    }
    return m;
}
console.log(parseInt(biggestNumber(6593928)));
