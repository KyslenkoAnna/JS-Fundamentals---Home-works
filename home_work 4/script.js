//Task #2 - Метод "строка - число - строка"
const str = '2.3.5';
function nextVersion(s) {
    return (((
        Number // 3. Делаем число из строки
        (s.split('.') // 1. Делаем массив из строки через точку.
        .join('')) // 2. Обединяем массив обратно в строку.
        + 1) + // 4. Прибавляем 1 к числу.
        ''). // 5. Делаем из этого числа снова строку.
        split(''). // 6. Делаем массив из строки.
        join('.')); // 7. Делаем строку из массива.
}

console.log(nextVersion(str));
//Task #4
let productList = [
    {name:'Egg', quantity: 10, bought: 'yes'},
    {name:'Sugar', quantity: 1, bought: 'no'},
    {name:'Bread', quantity: 1, bought: 'yes'}, 
    {name:'Apple', quantity: 6, bought: 'no'},
    {name:'Lemon', quantity: 3, bought: 'no'},
];

function showList(arr){
    arr.forEach(function (el) {
        console.log(`Product name is: ${el.name}. Quantity is: ${el.quantity}. Did you bought it: ${el.bought}`);
    })
}

function sortList(arr) {
arr.sort(function (a){
    if (a.bought == 'no') {return -1};
    if (a.bought == 'yes') {return 1};
});
}

//Adding additional products to the List

function addingToList(){
let newProd = prompt('Enter new product');
let needToBuy = prompt('Enter needed quantity');
let index = productList.findIndex(function(item){
    return item.name === newProd;
});
    if(index === -1){
        productList.unshift({
            name: newProd,
            quantity: Number(needToBuy),
            bought:'no',
        });
    }
    else{
        productList[index].quantity = productList[index].quantity + Number(needToBuy);
    }
    return productList;
}

//Buy products
function buyProduct(itemProduct){
    let index = productList.findIndex(function(item){
        return item.name === itemProduct;
    });
    if (index === -1){
        console.log('You do not have this product.');
    }
    else{
        productList[index].bought = 'Yes';
        console.log('Product was bought.');
    }
}

showList(productList);
console.log(addingToList());
(buyProduct('Sugar'));

//Task #5
let check = [
    {name:'Egg', quantity: 1, price: 10},
    {name:'Apple', quantity: 2, price: 30},
    {name:'Bread', quantity: 4, price: 40},
    {name:'Orange', quantity: 6, price: 34},
    {name:'Butter', quantity: 5, price: 2},
];

function showAll(arr){
    arr.forEach(function (el) {
        console.log(`Product: ${el.name}. Quantity: ${el.quantity}. Price: ${el.price} UAH`);
    });
}

function sumPrice(){
    let sum = check.reduce((sum,el) => sum + el.price * el.quantity, 0);
    console.log(`Total sum: ${sum}`);
}

function getBiggestPrice() {
    let result = 0;
    check.forEach(function (el) {
        if(result < el.price * el.quantity){
            result = el.price * el.quantity;
        }
    });
    console.log(`The biggest price you should pay ${result} UAH for ${el.name}`);
}

showAll(check);
sumPrice();
getBiggestPrice();