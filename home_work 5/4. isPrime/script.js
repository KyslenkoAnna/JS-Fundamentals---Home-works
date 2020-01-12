//Task #4 - Определить простое ли переданное число.
//Итеративный способ
/* function isPrime(num) {
    if (num < 2) return false;
    for(let i = 2; i < Math.sqrt(num); i++) {
        if(num % i == 0) {
            num = false;   
        }
    }
    return true;
}
console.log(isPrime(11));
console.log(isPrime(3));
console.log(isPrime(1));
console.log(isPrime(5)); */

//Рекурсивный способ
function isPrime(number, i){
    if (number == 1) return false;
    else if (number == 2) return true;
    else if (number % i == 0) return false;
    else if (i <= Math.sqrt(number)) return isPrime(number, i + 1);
    else return true;
}
console.log(isPrime(9,2));