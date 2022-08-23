function substring (text, startIndex, count) {

    let substring = text
        .substring(startIndex, startIndex + count);

    console.log(substring);
}
substring('ASentence', 1, 8);
substring('SkipWord', 4, 7);