import { del, get, post, put } from "./api.js";

export async function getAllItems() {
    return get('/data/books?sortBy=_createdOn%20desc');
};

export async function createItems(item) {
    return post('/data/books', item);  
};

export async function getItemsById(id){
    return get('/data/shoes/' + id);
};

export async function deleteItems(id){
    return del('/data/shoes/' + id)
};

export async function updateItems(id, item){
    return put('/data/shoes/' + id, item);
};

export async function getItemBySearch(query){
    return get(`/data/shoes?where=brand%20LIKE%20%22${query}%22`)
};