function notify(message) {
  let myDiv = document.getElementById('notification');
  myDiv.innerText = message;
  let currentDisplayState = myDiv.style.display;
  myDiv.style.display = currentDisplayState === 'none' || currentDisplayState === '' ? 
  'block' :
  'none'
  myDiv.addEventListener('click', toggleDisplayStyle);

  function toggleDisplayStyle(event){
    let currentDisplayState = event.target.style.display;

    event.target.style.display = 'none';
  }
}