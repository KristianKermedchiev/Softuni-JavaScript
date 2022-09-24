function solve() {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;

  let textArr = text.split(' ');
  let result = '';
  switch (convention) {
    case 'Camel Case':
      textArr.forEach((element, i) => {
        if(i === 0){
          return result += element.toLowerCase();
        } else {
          return result +=element[0].toUpperCase() + element.substring(1,).toLowerCase();
        } 
      });
      break;
    case 'Pascal Case':
      textArr.forEach((element, i) => {
        element = element.toLowerCase();
        result += element[0].toUpperCase() + element.substring(1,).toLowerCase();
      })
      break;
    default: result = 'Error!'
    break;
  }

  document.getElementById('result').textContent = result;
  
}