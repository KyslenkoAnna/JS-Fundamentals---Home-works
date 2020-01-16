function info(url) {
    let arr = url.split('://');//['https', 'itstep.org/ua/about']
    let protocol = arr[0];//'https'
    let domainWithout = arr[1].split('/');//['itstep.org','ua','about']
    let domain = domainWithout.shift();//itstep.org

    let path = domainWithout.join('/');//'ua/about'

    console.log('протокол ' + protocol);
    console.log('домен ' + domain);
    console.log('путь ' + path);    
}
info('https://itstep.org/ua/about');