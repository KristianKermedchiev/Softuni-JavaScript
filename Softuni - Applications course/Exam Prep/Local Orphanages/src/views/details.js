import { deleteItem, getItemById } from '../api/requests.js';
import { html } from '../lib.js';
import { getUserData } from '../utils.js';

const detailsTemplateView = (item, isLogged, isOwner, onDelete) => html`
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src=${item.imageUrl} alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${item.title}</h2>
                <p class="post-description">Description: ${item.description}</p>
                <p class="post-address">Address: ${item.address}</p>
                <p class="post-number">Phone number: ${item.phone}</p>
                <p class="donate-Item">Donate Materials: 0</p>

                ${isOwner
                ? html` <div class="btns">
                        <a href="/edit/${item._id}" class="edit-btn btn">Edit</a>
                        <a @click=${onDelete} class="delete-btn btn">Delete</a>`
                : ""};
               
                ${isLogged 
                ? html`<a href="/donate" class="donate-btn btn">Donate</a>`
                : ''};             
                </div>

            </div>
        </div>
    </div>
</section>`;

export async function detailsView(ctx){
    const item = await getItemById(ctx.params.id);
    const userData = getUserData();
    const isOwner = userData?._id == item._ownerId;
    let isLogged;

    if(!isOwner && userData){
        isLogged = true;
    };

    ctx.render(detailsTemplateView(item, isLogged, isOwner, onDelete));

    async function onDelete(){
        const choice = confirm('Are you sure you want to delete this offer?');

        if(choice){
            await deleteItem(ctx.params.id);
            ctx.page.redirect('/dashboard');
        };
    };
};