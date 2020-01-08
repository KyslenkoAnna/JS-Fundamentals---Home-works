//Task #4
let productList = [
    {name:'Egg', quantity: 10, bought: 'yes'},
    {name:'Sugar', quantity: 1, bought: 'no'},
    {name:'Bread', quantity: 1, bought: 'yes'}, 
    {name:'Apple', quantity: 6, bought: 'no'},
    {name:'Lemon', quantity: 3, bought: 'no'},
];

productList.sort(function (a){
    if (a.bought == 'no') {return -1};
    if (a.bought == 'yes') {return 1};
});
console.log(productList);

//Adding additional products to the List
function addingToList(){
let addProduct1 = {name: 'Egg', quantity: 1, bought: 'yes'};
let addProduct2 = {name: 'Oranges', quantity: 10, bought: 'no'};
    for (let i = 0; i < addProduct1.name.length; i++) {
    if(addProduct1.name[i] === productList.name)
    {
        productList.quantity[i] += addProduct1.quantity[i];
    }
    else
    {
        productList.push(addProduct1, addProduct2);
    }
    return productList;
}
}
console.log(addingToList());


//Task #5
let check = [
    {name:'Egg', quantity: 10, price: 10},
    {name:'Apple', quantity: 10, price: 30},
    {name:'Bread', quantity: 10, price: 40},
    {name:'Orange', quantity: 10, price: 34},
    {name:'Butter', quantity: 10, price: 2},
];