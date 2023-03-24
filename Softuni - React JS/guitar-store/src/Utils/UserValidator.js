function validateEmail(value){
    if(! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)){
        return false;
    }
    return true;
};

function validatePassword(value){
    if(!/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/.test(value)){
        return false;
    }
    return true;
};

function validateRepeatPassword(value1, value2){
    if(value1 !== value2){
        return false;
    }
    return true;
}

export {
    validateEmail,
    validatePassword,
    validateRepeatPassword
}