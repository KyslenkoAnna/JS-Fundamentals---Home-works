//Task #2 - Поиск наибольшего общего делителя.
function greatestDivisor(a,b){
    if (a == b){
        return a;
    }
    if (a > b){
        x = a;
        a = b;
        b = x;
    }
    return greatestDivisor(a,b - a);
}
console.log(greatestDivisor(70,56));