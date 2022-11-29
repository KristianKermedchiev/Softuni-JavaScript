import { logout } from './api/users.js';
import { page, render } from './lib.js';
import { getUserData } from './utils.js';
import { createView } from './views/create.js';
import { dashboardView } from './views/dashboard.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';

// imports for views will auto-generate as wel go;

// here we have to find the 'main' section in our HTML file;

const main = document.getElementById('site-content'); // example

// add event listener to the logout button - may have to add the ID manually;

document.getElementById('logoutBtn').addEventListener('click', onLogout);


// create middleware ->;
// Below views change on task;
page(decoreateContext);
page('/', () => console.log('Home'));
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/dashboard', dashboardView);
page('/books/:id', () => console.log('Details'));
page('/edit/:id', () => console.log('Edit'));
// page('/search', () => console.log('Bonus'));

updateNav();
page.start();

function decoreateContext(ctx, next){
    ctx.render = renderMain;
    ctx.updateNav = updateNav;
    next();
}; 

function renderMain(templateResult){
    render(templateResult, main);// where main is the 'main' element in the HTML file;
};

export function updateNav(){
    const userData = getUserData();
    // create user/guest view - may have to assign classes manually ->
    if(userData){
        document.querySelector('.user').style.display = 'block';
        document.querySelector('.guest').style.display = 'none';
        // if Welcome message ->
        document.getElementById('span').textContent = `${userData.email}`;
        document.querySelector("#span").style.display = 'inline-block';
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'block';
        document.querySelector("#span").style.display = 'none';
    };
};

// logout function;

function onLogout(){
    logout();
    updateNav();
    page.redirect('/');
};