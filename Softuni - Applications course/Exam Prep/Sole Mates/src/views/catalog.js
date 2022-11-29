import { html } from "../lib.js";
import { getAllShoes } from "../api/requests.js";

const dasboardTemplate = (shoe) => html`
    <section id="dashboard">
    <h2>Collectibles</h2>
    <ul class="card-wrapper">
    ${shoe.length == 0 
    ? html`<h2>There are no items added yet.</h2>`
    : shoe.map(shoeCard)};
    </ul>
    </section>`;

const shoeCard = (shoe) => html`
<li class="card">
    <img src=${shoe.imageUrl} alt="travis" />
    <p>
        <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
    </p>
    <p>
        <strong>Model: </strong><span class="model">${shoe.model}</span>
    </p>
    <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
    <a class="details-btn" href="/shoes/${shoe._id}">Details</a>
</li>`

export async function dashboardView(ctx){
    const shoes = await getAllShoes();

    ctx.render(dasboardTemplate(shoes));
};