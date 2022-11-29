import { getShoeBySearch } from '../api/requests.js';
import { html, render } from '../lib.js';


const searchView = (shoeList, userId, ctx) => html`
<section id="search">
    <h2>Search by Brand</h2>

    <form @submit=${e => onSearch(e, ctx)}class="search-wrapper cf">
        <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
        <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>

    <div id="search-container">
        <ul class="card-wrapper">
            <!-- Display a li with information about every post (if any)-->
            ${shoeList.length === 0 ? html`<h2>There are no results found.</h2>` : shoeList.map(shoe => shoeTemplate(shoe, userId))}
        </ul>
    </div>
</section>`;

const shoeTemplate = (shoe, userId) => html `
    <li class="card">
        <img src="${shoe.imageUrl}" alt="travis" />
        <p>
            <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
        </p>
        <p>
            <strong>Model: </strong
            ><span class="model">${shoe.model}</span>
        </p>
        <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>

        ${userId ? html `<a class="details-btn" href="/details/${shoe._id}">Details</a>` : html ``}
    </li>
`

async function onSearch(event, ctx){
    event.preventDefault();

    const formData = new FormData(event.target);

    const query = formData.get('search').trim();

    ctx.page.redirect(`/search?query=${query}`);
};

export async function searchPage(ctx){
    const userId = sessionStorage.getItem('userId');
    console.log(ctx.params.id);

    const brand = ctx.querystring.split('=')[1];
    const shoeList = brand == undefined ? [] : await getShoeBySearch(brand);
    render(searchView(shoeList, userId, ctx), document.querySelector('main'));
};