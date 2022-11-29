import { createOffer } from '../api/requests.js';
import { html } from '../lib.js';

const createViewTemplate = (onSubmit) => html`
<section id="create">
    <div class="form">
        <h2>Create Offer</h2>
        <form @submit=${onSubmit} class="create-form">
            <input type="text" name="title" id="job-title" placeholder="Title" />
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" />
            <input type="text" name="category" id="job-category" placeholder="Category" />
            <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"></textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                cols="50"></textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" />

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export async function createView(ctx){
    ctx.render(createViewTemplate(onSubmit));

    async function onSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);

        const offer = {
            title: formData.get('title'),
            imageUrl: formData.get('imageUrl'),
            category: formData.get('category'),
            description: formData.get('description'),
            requirements: formData.get('requirements'),
            salary: formData.get('salary')
    
        };

        if(!offer.title || !offer.imageUrl || !offer.category || !offer.description || !offer.requirements || !offer.salary){
            return alert('All fields are required!');
        };

        await createOffer(offer);
        event.target.reset();
        ctx.page.redirect('/dashboard');
    };  
};