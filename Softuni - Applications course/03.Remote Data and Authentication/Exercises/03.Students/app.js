document.querySelector("#submit").addEventListener('click', generateStudent);
const url = `http://localhost:3030/jsonstore/collections/students`;
document.querySelector("#results > tbody").remove();
const table = document.querySelector("#results");

getStudents();
async function getStudents(){
    const response = await fetch(url);
    const data = await response.json();

    Object.values(data).forEach(element => {
        loadStudents(element);
    });
};

function loadStudents(data){
    const tbody = document.createElement('tbody');
    tbody.classList.add('tBody');
    const tr = document.createElement('tr');
    const th1 = document.createElement('th');
    th1.textContent = data.firstName;
    const th2 = document.createElement('th');
    th2.textContent = data.lastName;
    const th3 = document.createElement('th');
    th3.textContent = data.facultyNumber;
    const th4 = document.createElement('th');
    th4.textContent = data.grade;
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tbody.appendChild(tr);
    table.appendChild(tbody);
};

async function generateStudent(event){
    event.preventDefault();

    let firstName = document.querySelector("#form > div.inputs > input[type=text]:nth-child(1)");
    let lastName = document.querySelector("#form > div.inputs > input[type=text]:nth-child(2)");
    let facultyNumber = document.querySelector("#form > div.inputs > input[type=text]:nth-child(3)");
    let grade = document.querySelector("#form > div.inputs > input[type=text]:nth-child(4)");

    if(!firstName.value || !lastName.value || !facultyNumber.value || !grade.value){
        return;
    }else{
        const data = { firstName: firstName.value,
            lastName: lastName.value,
            facultyNumber: facultyNumber.value,
            grade: grade.value
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': "Application/json"
            },
            body: JSON.stringify(data)
        });
        getStudents();
        firstName.value = '';
        lastName.value = '';
        facultyNumber.value = '';
        grade.value = '';
        let names = document.querySelectorAll('tBody');
        removeChildren(names);
    };
};

function removeChildren (data){
    data.forEach(x => x.remove());
};