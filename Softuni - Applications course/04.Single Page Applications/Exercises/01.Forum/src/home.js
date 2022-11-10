import { showDetails } from './details.js';

const section = document.getElementById('homeView');
const main = document.getElementsByTagName('main')[0];
const form = main.querySelector('#homeView form');
form.addEventListener('submit', onSubmit);
const url = `http://localhost:3030/jsonstore/collections/myboard/posts`;

section.remove();

export function showHome() {
    const topicContainer = section.querySelector('.topic-title');

    const posts = loadPost();



    main.replaceChildren(section);
}

function topicTemplate() {
    const container = document.createElement('div');
    container.classList.add('topic-container');
    container.innerHTML = `
    <div class="topic-name-wrapper">
        <div class="topic-name">
            <a href="#" class="normal">
                <h2>${data.topicName}</h2>
            </a>
            <div class="columns">
                <div>
                <p>Date: <time>${data.date}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${data.username}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    return container;
}

function onSubmit(event) {
    event.preventDefault();
    if (event.submitter.innerHTML == 'Cancel') {
        return clearForm()
    }
    const formData = new FormData(form);
    const { topicName, username, postText } = Object.fromEntries(formData);

    createPost({ topicName, username, postText, date: new Date() });
    clearForm()
}

function clearForm() {
    form.reset();
}

async function createPost(body) {
    const respose = await fetch(url, {
        method: 'POST',
        headers: { "Content-type": 'application/json' },
        body: JSON.stringify(body)
    });

    const data = await respose.json();
    return data;
}

async function loadPost() {
    const respose = await fetch(url);
    const data = await respose.json();
    return data;
}


showDetails();