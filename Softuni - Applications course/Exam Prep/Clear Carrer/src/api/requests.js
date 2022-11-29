import { del, get, post, put } from "./api.js";

export async function getAllOffers() {
    return get('/data/offers?sortBy=_createdOn%20desc');
};

export async function createOffer(offer) {
    return post('/data/offers', offer); 
};

export async function getOfferById(id){
    return get('/data/offers/' + id);
};

export async function deleteOffer(id){
    return del('/data/offers/' + id)
};

export async function updateOffer(id, offer){
    return put('/data/offers/' + id, offer);
};

export async function getShoeBySearch(query){
    return get(`/data/shoes?where=brand%20LIKE%20%22${query}%22`)
};