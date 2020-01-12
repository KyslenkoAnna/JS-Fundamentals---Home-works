//Task #6 - Написать функцию, которая возвращает число Фибоначчи.
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
console.log(fibonacci(6));
console.log(fibonacci(3));
console.log(fibonacci(10));
