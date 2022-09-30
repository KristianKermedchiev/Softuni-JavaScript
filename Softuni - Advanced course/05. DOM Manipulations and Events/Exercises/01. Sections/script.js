function create(words){
  
   for(let el of words){
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.innerText = el;
      p.style.display = 'none';
      div.appendChild(p);
      div.addEventListener('click', showP)
      document.getElementById('content').appendChild(div);
   }

   function showP(event){
      event.target.children[0].style.display = 'block';
   }
}