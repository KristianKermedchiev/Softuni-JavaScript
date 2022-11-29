import { deleteItems, getItemsById } from '../api/requests.js';
import { html } from '../lib.js';
import { getUserData } from '../utils.js';

const detailsViewTemplate = (game, isLogged, isOwner, onDelete) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">
        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>${game.title}</h1>
            <span class="levels">${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">
          ${game.summary} 
        </p>

        <!-- Bonus ( for Guests and Users ) -->
        <div class="details-comments">
            <h2>Comments:</h2>
            <ul>
                <!-- list all comments for current game (If any) -->
                <li class="comment">
                    <p>Content: I rate this one quite highly.</p>
                </li>
                <li class="comment">
                    <p>Content: The best game.</p>
                </li>
            </ul>
            <!-- Display paragraph: If there are no comments in the database -->
            <p class="no-comment">No comments.</p>
        </div>
        ${isOwner
        ? html`<div class="buttons">
            <a href="/edit/${game._id}" class="button">Edit</a>
            <a @click=${onDelete} class="button">Delete</a>
        </div>`
        : ''};
    </div>

    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
    
    ${isLogged
    ? html`<article class="create-comment">
        <label>Add new comment:</label>
        <form class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment" />
        </form>
    </article>`
    : ''};
    
</section>`;

export async function detailsView(ctx){
    const game = await getItemsById(ctx.params.id);
    const userData = getUserData();
    const isOwner = userData?._id == game._ownerId;
    let isLogged;

    if(userData && !isOwner){
        isLogged = true;
    };

    ctx.render(detailsViewTemplate(game, isLogged, isOwner, onDelete));

    async function onDelete(){
        const choice = confirm('Are you sure you want to delete this meme?');

        if(choice){
            await deleteItems(ctx.params.id);
            ctx.page.redirect('/');
        };
    };
};