function mySplit(string, separator = '') {
    let start = '';
    const lastInd = string.length - 1;
    const substrings = [];
    for(let i in string) {
        if(separator == ''){
            substrings.push(string[i]);
            continue;
        }
        if (string[i] !== separator) {
            start += string[i];
        }else{
            substrings.push(start);
            start = '';
        }
        if(i == lastInd){
            substrings.push(start);
        }
    }
    return substrings;
}
console.log(mySplit('https://itstep.org/ua/about'));