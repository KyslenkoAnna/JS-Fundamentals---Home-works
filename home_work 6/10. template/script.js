print("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020);
//Шаблон строки с аргументами количеством от 1 до 9
function print(str){
    const arr = str.split('%');
    const len = arr.length;
    for(let i = 1; i < len; i++){
        arr[i] = arguments[parseInt(arr[i])] + arr[i].slice(1);
    }
    console.log(arr.join(''));
}

const arr = [1,2,3,5454,55];
console.log(...arr);

function sum(a,b,c,d,e){
    console.log([...arguments]);
    return a - b - c - d - e;
}

console.log(sum(...arr));

function power(...numbers){
    console.log(numbers);
    return numbers.reduce((u, el) => u * el);
}

console.log(power(2,4,8,4,1,3,4));