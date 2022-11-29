import { getAllMemes } from '../api/memes.js';
import { html } from '../lib.js';


const catalogTemplate = (meme) => html `
<section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
				${meme.length == 0 
                ? html `<p class="no-memes">No memes in database.</p>`
                : meme.map(memeCard)}
			</div>
        </section>`;

const memeCard = (meme) => html `
<div class="meme">
                    <div class="card">
                        <div class="info">
                            <p class="meme-title">${meme.title}</p>
                            <img class="meme-image" alt="meme-img" src="${meme.imageUrl}">
                        </div>
                        <div id="data-buttons">
                            <a class="button" href="/memes/${meme._id}">Details</a>
                        </div>
                    </div>`;

export async function catalogView(ctx){
    const memes = await getAllMemes();

    ctx.render(catalogTemplate(memes));
};