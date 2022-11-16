import { html, render } from './node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';

const root = document.getElementById('allCats');

const catTemplate = html `
    <ul>
        ${cats.map(cat => createCatCard(cat))}
    </ul>
`;

render(catTemplate, root);

function createCatCard(cat){
    return html `
        <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button @click="${showContent}" class="showBtn">Show status code</button>
            <div class="status" style="display: none" id="${cat.id}">
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div> 
        </li>
    `;
};

function showContent(event){
    const contentContainer = event.target.parentElement.querySelector('div');
    const currentState = contentContainer.style.display;
    
    if(currentState === 'none'){
        contentContainer.style.display = 'block';
        event.target.textContent = 'Hide status code';
    } else {
        contentContainer.style.display = 'none';
        event.target.textContent = 'Show status code';
    };
};