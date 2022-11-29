import { deleteOffer, getOfferById } from '../api/requests.js';
import { html } from '../lib.js';
import { getUserData } from '../utils.js';

const detailsViewTemplate = (offer, isLogged, isOwner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${offer.imageUrl} alt="example1" />
        <p id="details-title">${offer.title}</p>
        <p id="details-category">
            Category: <span id="categories">${offer.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${offer.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${offer.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${offer.requirements}</span>
            </div>
        </div>
        <!-- <p>Applications: <strong id="applications">1</strong></p> -->
        ${isOwner 
        ? html`<div id="action-buttons">
            <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
        : ''};
        ${isLogged
        ? html`<a href="/apply" id="apply-btn">Apply</a>`
        : ''};
        </div>
    </div>
</section>`;

export async function detailsView(ctx){
    const offer = await getOfferById(ctx.params.id);
    const userData = getUserData();
    const isOwner = userData?._id == offer._ownerId;
    let isLogged;

    if(!isOwner && userData){
        isLogged = true;
    };

    ctx.render(detailsViewTemplate(offer, isLogged, isOwner, onDelete));

    async function onDelete(){
        const choice = confirm('Are you sure you want to delete this offer?');

        if(choice){
            await deleteOffer(ctx.params.id);
            ctx.page.redirect('/dashboard');
        };
    };
};