import { deleteItems, getItemsById } from '../api/requests.js';
import { html } from '../lib.js';
import { getUserData } from '../utils.js';

const detailsViewTemplate = (book, isLogged, isOwner, onDelete) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <div class="actions">

        ${isOwner
        ? html`
            <a class="button" href="/edit/${book._id}">Edit</a>
            <a @click=${onDelete} class="button" href="#">Delete</a>`
        : ''};

        ${isLogged
        ? html`<a class="button" href="#">Like</a>`
        :''};
            
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: 0</span>
            </div>
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>`;

export async function detailsView(ctx) {
    const book = await getItemsById(ctx.params.id);
    const userData = getUserData();
    const isOwner = userData?._id == book._ownerId;
    let isLogged;
    
    if(userData && !isOwner){
        isLogged = true;    
    };

    ctx.render(detailsViewTemplate(book, isLogged, isOwner, onDelete));

    async function onDelete(){
        const choice = confirm('Are you sure you want to delete this item?');

        if(choice){
            await deleteItems(ctx.params.id);
            ctx.page.redirect('/dashboad');
        };
    };
};