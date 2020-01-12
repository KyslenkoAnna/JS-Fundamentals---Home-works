//Task #6 - Написать функцию, которая возвращает число Фибоначчи.
function func(n) {
    if (n <= 1) {
        return n;
    }
    else {
        return func(n - 1) + func(n - 2);
    }
  }
console.log(func(6));
console.log(func(3));
console.log(func(10));
