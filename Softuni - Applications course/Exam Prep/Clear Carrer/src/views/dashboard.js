import { getAllOffers } from '../api/requests.js';
import { html } from '../lib.js';

const dashboardViewTemplate = (offer) => html`
<section id="dashboard">
    <h2>Job Offers</h2>
    ${offer.length == 0
    ? html`<h2>No offers yet.</h2>`
    : offer.map(singleView)};
</section>`;

const singleView = (offer) => html`
<div class="offer">
    <img src=${offer.imageUrl} alt="example1" />
    <p>
        <strong>Title: </strong><span class="title">${offer.title}</span>
    </p>
    <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
    <a class="details-btn" href="/offer/${offer._id}">Details</a>
</div>`;

export async function dashboardView(ctx){
    const offers = await getAllOffers();
    
    ctx.render(dashboardViewTemplate(offers));
};