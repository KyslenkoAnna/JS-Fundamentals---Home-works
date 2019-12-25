//Task #1
let l = prompt('Введите длину (до 1 000 метров)');
    width = prompt('Введите ширину (до 1 000 метров)');
    height = prompt('Введите высоту (до 1 000 метров)');
    square = 2 * (height * l + height * width);
    quantity = square / 16;
    if(square % 16){
        n++;
    }
alert(`Вам понадобится ${quantity} банок красок`);

//Task #2 - Не работает
let N = prompt('Введите шестизначное целое число');
    a = N/100000%10;
    b = N/10000%10;
    c = N/1000%10;
    d = N/100%10;
    e = N/10%10;
    f = N%10;
if(a + b + c == d + e + f){
    alert('YES');
}
else{
    alert('NO');
}


//Task #4 Мини-задачи
// #1
let userAge = prompt('Укажите Ваш возраст');
if (userAge <= 12){
   alert('Ты еще ребенок'); 
}
if (userAge > 12 && userAge <= 18){
    alert('Ты еще подросток'); 
}
if (userAge > 18 && userAge <= 60){
    alert('Ты уже взрослый'); 
}
if (userAge > 60){
    alert('Ты уже пенсионер'); 
}

// #1
let number = prompt('Введите любое число от 0 до 9');
switch(number){
    case '1': 
        alert('!');
        break;

    case '2':
        alert('@');
        break;
    
    case '3':
        alert('#');
        break;
    
    case '4':
        alert('$');
        break;
    
    case '5':
        alert('%');
        break;
    case '6':
        alert('^');
        break;
    case '7':
        alert('&');
        break;
    case '8':
        alert('*');
        break;
    case '9':
        alert('(');
        break;
    case '0':
        alert(')');
        break;
}

//#3
let number = prompt('Введите трехзначное число').split('');
if(number[0] == number[1] || number[0] == number[2] || number[1] == number[2]){
    alert("Две цифры одинаковые!");
}
else if(number[0] && number[1] && number[0] == number[2] && number[1] == number[2]){
    alert("Все три цифры одинаковые!");
}
else{
    alert("Одинаковых цифр нет!");
}

//#4
let year = prompt('Введите год');
if(year % 400 == 0 || year % 4 == 0 && year % 100 !== 0){
    alert('Это высокосный год!');
}
else{
    alert('Это невысокосный год!');
}

//#5
let number = prompt('Введите пятиразрядное число');
    if(number[1] == number[5] && number[2] == number[4]){
        alert('Это число - палиндром!');
    }
    else{
        alert('Это число - не палиндром!');
    }

//#6
let amount = prompt('Введите сумму в USD');
    currency = prompt('EUR = 1, UAH = 2, AZN = 3');
const eur = .9;
const uah = 23.23;
const azn = 1.7;
switch(currency){
    case "1":
        alert(`${amount * eur} EUR`);
        break;
    case "2":
        alert(`${amount * uah} UAH`);
        break;
    case "3":
        alert(`${amount * azn} AZN`);
        break;
}

//#7
let amount = prompt('Введите сумму покупки');
if (amount >= 200 && amount < 300){
    alert(`Сумма к оплате с учетом скидки ${amount - (amount * .3)} грн.`);
}
else if (amount >= 300 && amount < 500){
    alert(`Сумма к оплате с учетом скидки ${amount - (amount * .5)} грн.`);
}
else if (amount >= 500){
    alert(`Сумма к оплате с учетом скидки ${amount - 
    (amount * .7)} грн.`);
}
else{
    alert(`На покупку меньше 100 грн. скидка не предоставляется`);
}

//#8
let lengthOfCircle = prompt('Введите длину окружности');
    perimeterOfSquare = prompt('Введите периметр квадрата');

if(lengthOfCircle / Math.PI < Math.sqrt(perimeterOfSquare)){
    alert('Окружность поместиться в квадрате');
}
else{
alert('Окружность не поместиться в квадрат');
}

//#9
let capital = prompt('Столица Австралии? 1.) Мельбурн. 2.) Сидней. 3.) Канберра.');
    minister = prompt('Премьер-министр Австралии? 1.) Скотт Моррисон. 2.) Дэвид Харли. 3.) Джон Флетч.');
    name = prompt('Что обозночает слово Австралия? 1.) Жаркий. 2.) Южный. 3.) Тихий.');
score=0;
if(capital == 3){score += 2;}
if(minister == 1){score += 2;}
if(name == 2){score += 2;}

alert(`Вы набрали ${score} баллов.`);

//#10
let date = prompt('Введите дату (например 26.12.2019)').split('.');
    tommorow = new Date(date[2], date[1]-1, date[0]);
    tommorow.setDate(tommorow.getDate()+1);
alert(tommorow);


