function fun(str) {
    const newStr = str.split('');
        let tmpArr = '';
        for (let i = 0; i <= newStr.length; i++) {
        if (i == 0) {
            tmpArr += newStr[i];
            continue;
        }
        if (newStr[i - 1] == ' ' && newStr[i] != ' ') {
             tmpArr += newStr[i];
        }
    }
    return alert(tmpArr.toUpperCase());
}
 let str = 'Hyper Text        Markup  Language';
fun(str);