import { getAllItems } from '../api/requests.js';
import { html } from '../lib.js';

const dashboardViewTemplate = (books) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <!-- Display ul: with list-items for All books (If any) -->
    <ul class="other-books-list">
        ${books.length == 0
        ? html`<p class="no-books">No books in database!</p>`
        : books.map(single)}
    </ul>
    <!-- Display paragraph: If there are no books in the database -->
   
</section>`;

const single = (books) => html`
<li class="otherBooks">
    <h3>${books.title}</h3>
    <p>Type: ${books.type}</p>
    <p class="img"><img src=${books.imageUrl}></p>
    <a class="button" href="/books/${books._id}">Details</a>
</li>`;

export async function dashboardView(ctx){
    const books = await getAllItems();
    ctx.render(dashboardViewTemplate(books));
};