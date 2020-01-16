function toCamelCase(str) {
    console.log(str
    .split('-')
    .map((word, index) => index == 0 ? word : 
        word[0].toUpperCase() + word.slice(1))
    .join(''));
}
toCamelCase('asdasd-sdsd-asdsfsdf')