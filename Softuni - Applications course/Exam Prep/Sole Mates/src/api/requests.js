import { del, get, post, put } from "./api.js";

export async function getAllShoes() {
    return get('/data/shoes?sortBy=_createdOn%20desc');
};

export async function createShoe(shoe) {
    return post('/data/shoes', shoe);  
};

export async function getShoeById(id){
    return get('/data/shoes/' + id);
};

export async function deleteShoe(id){
    return del('/data/shoes/' + id)
};

export async function updateShoe(id, shoe){
    return put('/data/shoes/' + id, shoe);
};

export async function getShoeBySearch(query){
    return get(`/data/shoes?where=brand%20LIKE%20%22${query}%22`)
};