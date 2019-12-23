//Exercise #1
let userName=prompt('Как тебя зовут?','');
alert(`Привет, ${userName}`);

//Exercise #2
const currentYear=2019;
let userAge=prompt('В каком году ты родился?','');
alert(`Тебе ${currentYear-userAge}qw лет`);

//Exercise #3
let squareSize=prompt('Задайте длину стороны квадрата?','');
alert(`Периметр квадрата равен ${squareSize*4} см.`);

//Exercise #4
const numberPi=3.14;
let radius=prompt('Задайте радиус окружности?','');
alert(`Радиуc окружности равен ${radius*2*numberPi} см.`);

//Exercise #5
let distance=prompt('Какое расстояние вам нужно преодолеть?','');
    time=prompt('За какое время (в минутах)?','');
alert(`Вам нужно двигаться со скоростью ${distance/(time/60)} км.ч`);

//Exercise #6
const rate=.9;
let dollar=prompt('Введите сумму в долларах.','');
alert(`Это будет ${dollar*rate} евро`);

//Exercise #7
let gigabite=prompt('Введите объем флешки в Гб','');
alert(`У вас на флешке есть место для ${Math.floor(gigabite*1000/820)} файлa(-ов) размером в 820Мб`);

//Exercise #8
let amount=prompt('Сколько денег у вас в кошельке?','');
    price=prompt('Сколько стоит шоколадка?','')
alert(`Ты можешь купить ${Math.floor(amount/price)} шоколадок и у тебя останется ${amount-(price*(Math.floor(amount/price)))} грн. сдачи`);

//Exercise #9
let number=prompt('Введите трехзначное число','');
function reverseInt(number) {
    var result = ''; 
    while(number>0){
     result = result + (number%10);
     number = parseInt(number/10);
    }
    return result;
}
alert(reverseInt(number));



