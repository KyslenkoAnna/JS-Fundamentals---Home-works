//Task #1 - Возведение числа в степень. 
function pow(x,n){
    if (n == 1){
        return x;
    }
    else{
        return x * pow(x, n-1);
    }
}
console.log(pow(2,5));