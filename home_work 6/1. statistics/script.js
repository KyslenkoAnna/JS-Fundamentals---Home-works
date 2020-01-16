const string = '"В эту зиму с ума я опять не сошел..." Иосиф Бродский, 1969';
function statistics(str) {
    let numCount = 0;
    let letterCount = 0;
    let simbCount = 0;
    str = str.toLowerCase();
    const arr = str.split('');
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        const el = arr[i];
        const code = el.codePointAt(0);
       
        switch(true){
            case el === ' ': {
                simbCount++;
                break;
            }
            case !isNaN(el): {
                numCount++;
                break;
            }
            case (code >= 1040 && code <= 1103): {
                letterCount++;
                break;
            }
            default:{
                simbCount++;
            }
        }
    }
    
    console.log('Количество букв:', letterCount);
    console.log("Количество символов:", simbCount);
    console.log("Количество цифр:", numCount);
}

console.log(statistics(string));