import { del, get, post, put } from "./api.js";

export async function getAllItems() {
    return get('/data/games?sortBy=_createdOn%20desc');
};

export async function createItems(item) {
    return post('/data/games', item);  
};

export async function getItemsById(id){
    return get('/data/games/' + id);
};

export async function deleteItems(id){
    return del('/data/games/' + id)
};

export async function updateItems(id, item){
    return put('/data/games/' + id, item);
};

export async function getRecentItems(){
    return get('/data/games?sortBy=_createdOn%20desc&distinct=category');
};

export async function getItemBySearch(query){
    return get(`/data/shoes?where=brand%20LIKE%20%22${query}%22`)
};