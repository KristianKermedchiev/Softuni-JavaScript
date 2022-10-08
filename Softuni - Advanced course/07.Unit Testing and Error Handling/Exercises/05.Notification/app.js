function notify(message) {
  let myDiv = document.getElementById('notification');
  myDiv.innerText = message;
  myDiv.style.display = 'block' ;
  myDiv.addEventListener('click', toggleDisplayStyle);

  function toggleDisplayStyle(event){
    event.target.style.display = 'none';
  }
};