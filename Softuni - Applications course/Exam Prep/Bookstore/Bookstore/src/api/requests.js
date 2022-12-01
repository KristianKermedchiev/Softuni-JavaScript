import { del, get, post, put } from "./api.js";

export async function getAllItems() {
    return get('/data/books?sortBy=_createdOn%20desc');
};

export async function createItems(item) {
    return post('/data/books', item);  
};

export async function getItemsById(id){
    return get('/data/books/' + id);
};

export async function deleteItems(id){
    return del('/data/books/' + id)
};

export async function updateItems(id, item){
    return put('/data/books/' + id, item);
};

export async function getItemBySearch(query){
    return get(`/data/shoes?where=brand%20LIKE%20%22${query}%22`)
};

export async function getMyItems(userId){
    return get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
};