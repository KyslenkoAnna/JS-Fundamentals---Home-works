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
function isPrime(number, i = 2){
    if (number < 4 && number > 1) return true;
    if (number == 2) return true;
    if (number % i == 0) return false;
    return (i <= Math.sqrt(number))? isPrime(number, i + 1): true;
}
console.log(isPrime(9));