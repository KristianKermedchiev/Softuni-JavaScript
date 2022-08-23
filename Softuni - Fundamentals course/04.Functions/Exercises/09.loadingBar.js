function loadingBar (number) {

    let compleated = '%'.repeat(number / 10);
    let incomplete = '.'.repeat(10 - compleated.length)

    if (number < 100) {
        let compleated = '%'.repeat(number / 10);
        let incomplete = '.'.repeat(10 - compleated.length)
        console.log(number + '%' + ' ' + '[' + compleated + incomplete + ']')
        console.log('Still loading...');
    } else {
        console.log(`100% Complete!`);
        console.log('[' + compleated + incomplete + ']');
    }
}
loadingBar(30);
loadingBar(50);
loadingBar(100);