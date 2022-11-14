window.addEventListener('load', solution);

async function solution() {
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const response = await fetch(url);
    const data = await response.json();

    Object.values(data).forEach(e => {
        let id = e._id;
        let title = e.title;
        createArticle(id, title)
    });

};

async function createArticle(id, title,) {
    const url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    
    const main = document.getElementById('main');
    
        const div = document.createElement('div');
        div.classList.add('accordion')

            const div2 = document.createElement('div');
            div2.classList.add('head');

            const span = document.createElement('span');
            span.textContent = `${title}`

            const button = document.createElement('button');
            button.classList.add('button');
            button.setAttribute('id', `${id}`);
            button.textContent = 'More';
            button.setAttribute('onclick', 'showHide(event)')
        
        const div3 = document.createElement('div');
        div3.classList.add('extra');
        const p = document.createElement('p');
        p.textContent = `${data.content}`;

    div3.appendChild(p);
    div2.appendChild(span);
    div2.appendChild(button);
    div.appendChild(div2);
    div.appendChild(div3);
    main.appendChild(div);
};

async function showHide(event){
    const buttonInfo = event.target.parentElement.children[1].textContent;
    const myButton = event.target.parentElement.children[1];
    if (buttonInfo === 'More') {
                const div = event.target.parentElement.parentElement.children[1];
                div.style.display = 'block';
                myButton.textContent = 'Less'
            } else if(buttonInfo === 'Less') {
                const div = event.target.parentElement.parentElement.children[1];
                div.style.display = 'none';
                myButton.textContent = 'More'
            }
};