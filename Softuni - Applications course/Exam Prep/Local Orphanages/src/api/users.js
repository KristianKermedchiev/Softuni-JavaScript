import { get, post } from "./api.js";
import { clearUserData, setUserData } from "../utils.js";

// Login function - userData may change as well as the link in post;
export async function login(email, password){
    const {_id, email: resultEmail, accessToken} = await post('/users/login', {email, password});

    setUserData({
        _id,
        email: resultEmail,
        accessToken
    });
};

// Register function - userData may change as well as the link in post;

export async function register(email, password){
    const result = await post('/users/register', { email, password });

    const userData = {
        id: result._id,
        email: result.email,
        accessToken: result.accessToken
    };

    setUserData(userData);

    return result;
};

// logout function link may change;

export function logout(){
    get('/users/logout');
    clearUserData();
};