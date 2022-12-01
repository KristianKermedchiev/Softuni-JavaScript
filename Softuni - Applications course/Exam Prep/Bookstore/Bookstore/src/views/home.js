import { getMyItems } from '../api/requests.js';
import { html } from '../lib.js';
import { getUserData } from '../utils.js';

const homeViewTemplate = (book) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <!-- Display ul: with list-items for every user's books (if any) -->
    
    <ul class="my-books-list">
    ${book.length == 0
    ? html` <p class="no-books">No books in database!</p>`
    : book.map(single)};
    </ul>

    <!-- Display paragraph: If the user doesn't have his own books  -->
   
</section>`;

const single = (book) => html`
<li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl}></p>
    <a class="button" href="/books/${book._id}">Details</a>
</li>`;


export async function homeView(ctx){
    const userData = getUserData();
    const books = await getMyItems(userData._id);
    ctx.render(homeViewTemplate(books));
};