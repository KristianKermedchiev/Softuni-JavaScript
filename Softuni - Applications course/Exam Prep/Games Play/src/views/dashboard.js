import { getAllItems } from '../api/requests.js';
import { html } from '../lib.js';

const dashboardTemplateView = (games) => html`
<section id="catalog-page">
    <h1>All Games</h1>
    <!-- Display div: with information about every game (if any) -->
    ${games.length == 0
    ? html`<h3 class="no-articles">No articles yet</h3>`
    : games.map(signgle)}
    <!-- Display paragraph: If there is no games  -->
    
</section>`;

const signgle = (games) => html`
<div class="allGames">
    <div class="allGames-info">
        <img src=${games.imageUrl} />
        <h6>${games.category}</h6>
        <h2>${games.title}</h2>
        <a href="/details/${games._id}" class="details-button">Details</a>
    </div>
</div>`;

export async function dashboardView(ctx){
    const games = await getAllItems();
    ctx.render(dashboardTemplateView(games));
};