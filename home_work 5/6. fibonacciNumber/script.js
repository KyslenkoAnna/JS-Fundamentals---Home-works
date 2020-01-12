//Task #6 - Написать функцию, которая возвращает число Фибоначчи.
/* function fib(n) {
    if (n <= 1) {
        return n;
    }
    else {
        return fib(n - 1) + fib(n - 2);
    }
  }
console.log(fib(6));
console.log(fib(3));
console.log(fib(10)); */

//Better Solution
const fib2 = n => {
    if(n == 0){
      return [0, 1];
    }else{
      const [prev, next] = fib2(n - 1);
      return [next, prev + next];
    }
  }
console.log(fib2(10));
