//Task #2
let dna = prompt('Deoxyribonucleic acid', 'ATTGC');
    newDna = '';
for(let i = 0; i < dna.length; i++){
    if (dna[i] === 'A'){
        newDna +='T';
    }
    if (dna[i] === 'T'){
        newDna +='A';
    }
    if (dna[i] === 'C'){
        newDna +='G';
    }
    if (dna[i] === 'G'){
        newDna +='C';    
    }
}
alert(newDna);

//Task #3
let words = prompt('Введите любое предложение', 'Я люблю программировать').split(' ');
num = words[0].length;
for (let i = 0; i < words.length; i++){
    if (words[i].length < num) {
      num = words[i].length;
    }
}
console.log(num);

//One more solution - task #3
function findShort(phrase) {
    let phraseArray = phrase.split(' ');
    phraseArray.sort((a, b) => a.length - b.length);
    console.log(phraseArray[0].length);
}

//Task #4
let words = prompt("Введите какой-то текст", "is2 Thi1s T4est 3a").split(" ");
let updated = [];
for(let i = 0; i < words.length; i++){ //Проверяем каждое слово
    for(let j = 0; j < words[i].length; j++){ //Проверяем каждый символ
        if(words[i][j] <= '9' && words[i][j] >= '1'){ //Проверяем является ли числом этот символ
            updated[words[i][j]] = words[i]; //Если этот символ действительно число (от 1 до 9), то говорим, что его индекс равен этому числу и зыписываем его в переменную "updated"
        }
    }
}
reswords = updated.join(" ");
console.log(reswords);


