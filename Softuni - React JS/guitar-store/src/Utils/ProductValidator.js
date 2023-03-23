function validatePrice(value) {
    if(!/^(?:[1-9]\d{0,4}|100000)$/.test(value)){
        return false;
    }
    return true;
};

function validateStringCount(value) {
    if(!/^(4|[5-9]|[1-2][0-9]|30)$/.test(value)){
        return false;
    }
    return true;
};

function validateFretCount(value) {
    if(!/^(1[2-9]|[2-2][0-9]|30)$/.test(value)){
        return false;
    }
    return true;
};


function validateDescription(value){
    if(!/^.{10,}$/.test(value)){
        return false;
    }
    return true;
};


function validateType(value){
    if(!/^.{3,}$/.test(value)){
        return false;
    }
    return true;
};


function validateModel(value){
    if(!/^.{5,}$/.test(value)){
        return false;
    }
    return true;
};

function validateImgUrl(value){
    if(!/^(http|https):\/\/.{5,}$/.test(value)){
        return false;
    }
    return true;
};

export {validatePrice,
    validateType, 
    validateImgUrl,
    validateModel,
    validateFretCount,
    validateStringCount,
    validateDescription
};