function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', onLoad);
    document.getElementById('btnCreate').addEventListener('click', createContact);
};
    
async function onLoad(){
    const url = `http://localhost:3030/jsonstore/phonebook`;
    const response = await fetch(url);
    const data = await response.json();
    return loadContacts(data);
};

async function onCreate(person, phone){
    const url = `http://localhost:3030/jsonstore/phonebook`;
    const body = {
        person,
        phone
    };
    const headers = getHeader('POST', body);
    const response = await fetch(url, headers);
    const data = await response.json();
    onLoad();
    return data;
}

async function onDelete (id){
    const url = `http://localhost:3030/jsonstore/phonebook/${id}`;
    const headers = getHeader('DELETE', null);
    const response = await fetch(url, headers);
    const data = response.json();
    return data;
}

function getHeader(method, body){
    return {
        method: `${method}`,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    };
}

function loadContacts(data){
    const ul = document.getElementById('phonebook');
    ul.innerHTML = '';
    const myData = Object.values(data).forEach(record => {
        const li = document.createElement('li');
        li.textContent = `${record.person}: ${record.phone}`;
        li.setAttribute('data-id', record._id);
        const btn = document.createElement('button');
        btn.textContent = 'Delete'
        btn.addEventListener('click', handleDelete);
        li.appendChild(btn);
        ul.appendChild(li);
    });
};

function handleDelete(event){
    const li = event.target.parentElement;
    const id = li.getAttribute('data-id');

    onDelete(id);
    li.remove();
};

function createContact(){
    const name = document.getElementById('person');
    const phone = document.getElementById('phone');

    onCreate(name.value, phone.value);
    name.value = '';
    phone.value = '';
}

attachEvents();