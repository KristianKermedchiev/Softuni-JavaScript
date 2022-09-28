function addItem() {
    let input = document.getElementById('newItemText');
    let ul = document.getElementById('items');
    let value = input.value;

    if(input.length === 0){
        return;
    }

    let li = document.createElement('li');
    li.textContent = value;

    let deleteBtn = document.createElement('a');
    let linkText = document.createTextNode("[Delete]");
    
    deleteBtn.appendChild(linkText);
    deleteBtn.href = '#';

    deleteBtn.addEventListener('click', function (event){
        li.remove()
    });

    li.appendChild(deleteBtn);

    ul.appendChild(li);

    input.value = '';
}