function change(string) {
    newString = '';
    string = string.split('');
    string.forEach(element => {
        if (element.toUpperCase() === element) {
            newString += element.toLowerCase();
        } else {
            newString += element.toUpperCase()
        }        
    });
    return newString.replace(/\d/g, '_');
}

function caseMain() {
    let str = prompt("Enter the string");
    alert(change(str));
}

caseMain();