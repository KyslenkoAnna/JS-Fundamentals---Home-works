function strongest(from, to) {
    if (from > to) return false;
    if (to - from < 1) return from;
    if (to - from < 2) return from + (from % 2);
    return 2 * strongest((from + (from % 2)) / 2, (to - (to % 2)) / 2);
}

console.log(strongest(97,100)); //100
console.log(strongest(48,56)); //48
console.log(strongest(80,100)); //96
console.log(strongest(5,10)); //8
