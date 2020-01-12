//Task #5 - Функция для вывода всех множителей переданного числа в возрастающем порядке.
//Итеративный метод
/* function findDividers(n) {
    let div = 2;
    while (div <= n){
        if (n % div == 0){
            console.log(div);
            n = n / div;
            if(n > 1){
                console.log('*');
            }
        }
        else{div++;}
    }
}
findDeviders(56); */

//Рекурсивный метод
function findDividers(number) {
    let divider = 2;
        while (divider <= number) {
            if (number % divider == 0) {
                if (divider != number) {
                    console.log(divider);
                    findDividers(number / divider);
                } else {
                    console.log(divider);
                }
                return;
            }
            divider++;
        }
}
findDividers(12);
