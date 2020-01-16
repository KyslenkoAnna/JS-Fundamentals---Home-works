function textNumber(number) {
    const first = ['', 'Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
    const second = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать', 'Девяднадцать'];
    const third = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто'];
    
    if (number >= 0 && number <= 9) {
        return first[number];
    }
    
    if (number >= 10 && number < 20) {
        return second[number - 10];
    }
    
    if (number >= 20 && number <= 99) {
        const firstNumber = third[parseInt(number / 10) - 2];
        const secondNumber = number % 10;
        const secN = first[secondNumber];

        return `${firstNumber} ${secN}`;
    }
  }
console.log(textNumber(7));
console.log(textNumber(20));
console.log(textNumber(32));
console.log(textNumber(0));
