function search() {
   let townList = Array.from(document.querySelectorAll('ul li'));
   let criteria = document.getElementById('searchText').value;

   let matches = 0;
   
   for(let el of townList){
      let city = el.textContent;
      
      if(city.includes(criteria)){
         el.style.textDecoration = 'underline';
         el.style.fontWeight = 'bold';
         matches++;
      }
   }
   document.getElementById('result').textContent = `${matches} matches found`;
}