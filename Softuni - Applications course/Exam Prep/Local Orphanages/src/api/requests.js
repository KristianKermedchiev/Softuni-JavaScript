import { del, get, post, put } from "./api.js";

export async function getAllItems() {
    return get('/data/posts?sortBy=_createdOn%20desc');
};

export async function createItem(shoe) {
    return post('/data/posts', shoe);  
};

export async function getItemById(id){
    return get('/data/posts/' + id);
};

export async function deleteItem(id){
    return del('/data/posts/' + id)
};

export async function updateItem(id, item){
    return put('/data/posts/' + id, item);
};

export async function getShoeBySearch(query){
    return get(`/data/shoes?where=brand%20LIKE%20%22${query}%22`)
};

export async function getPostsById(userId){
    return get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}