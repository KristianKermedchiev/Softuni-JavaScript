import { getAllItems } from '../api/requests.js';
import { html } from '../lib.js';

const dashboardViewTemplate = (item) => html`
<section id="dashboard-page">
    <h1 class="title">All Posts</h1>
    <div class="all-posts">
    ${item.length == 0 
    ? html`<h1 class="title no-posts-title">No posts yet!</h1>`
    : item.map(singlePost)}
</section>`;

const singlePost = (item) => html`
<div class="post">
    <h2 class="post-title">${item.title}</h2>
    <img class="post-image" src=${item.imageUrl} alt="Material Image">
    <div class="btn-wrapper">
        <a href="/item/${item._id}" class="details-btn btn">Details</a>
    </div>
</div>`;

export async function dashboardView(ctx){
    const item = await getAllItems();

    ctx.render(dashboardViewTemplate(item));
};