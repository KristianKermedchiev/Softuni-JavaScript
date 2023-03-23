export default function validatePrice(value) {
    if(!/^\d+$/.test(value) && value === ''){
        return false;
    }
    return true;
};