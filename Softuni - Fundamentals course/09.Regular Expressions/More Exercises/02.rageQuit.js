function rageQuit(input = []) {
    const text = input.join('');
    const patternForDigits = /\d+/g;
    const patternForSymbols = /[^0-9]+/g;
  
    const digitsMatch = text.match(patternForDigits);
  
    const rageMessage = text
      .match(patternForSymbols)
      .map(symbol => symbol.toUpperCase().repeat(digitsMatch.shift()))
      .join('');
  
    const uniqueSymbols = new Set(rageMessage).size;
  
    console.log(`Unique symbols used: ${uniqueSymbols}`);
    console.log(rageMessage);
}
rageQuit(['a3']);
rageQuit(['aSd2&5s@1']);