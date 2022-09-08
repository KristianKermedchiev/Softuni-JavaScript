function imitationGame(input) {

    let message = input.shift();
  
    let line = input.shift();
  
    while (line !== 'Decode') {
  
      if(line.includes('Move')){
        let [command, number] = line.split('|');
        let temp = message.slice(0,number)
        message =message.replace(temp,"");
        message = message + temp;
      } else if (line.includes('Insert')){
        let [command, index, value] = line.split('|');
        let first = message.slice(0,index);
        let last = message.slice(index);
        message = first + value + last;
      } else if (line.includes('ChangeAll')){
        let [command, substr, replacement] = line.split('|');
  
        while(message.includes(substr)){
          message = message.replace(substr,replacement)
        }
        
      }
      line = input.shift();
    }
  
    console.log(`The decrypted message is: ${message}`);
}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);
imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]);