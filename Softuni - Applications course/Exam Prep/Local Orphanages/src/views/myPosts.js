import { getPostsById } from '../api/requests.js';
import { html } from '../lib.js';
import { getUserData } from '../utils.js';

const myPostsViewTemplate = (items) => html`
<section id="my-posts-page">
    <h1 class="title">My Posts</h1>

    <!-- Display a div with information about every post (if any)-->
    
    <div class="my-posts">
    ${items.length == 0
    ? html`<h1 class="title no-posts-title">You have no posts yet!</h1>`
    : items.map(single)}
    </div>

    <!-- Display an h1 if there are no posts -->
    
</section>`;

const single = (items) => html`
<div class="post">
    <h2 class="post-title">${items.title}</h2>
    <img class="post-image" src=${items.imageUrl} alt="Material Image">
    <div class="btn-wrapper">
        <a href="/item/${items._id}" class="details-btn btn">Details</a>
    </div>
</div>`

export async function myPostsView(ctx){
    const userData = getUserData();
    const items = await getPostsById(userData._id);
    // const isOwner = userData?._id == items._ownerId;

    ctx.render(myPostsViewTemplate(items));
};