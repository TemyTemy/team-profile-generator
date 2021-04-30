function employeeName(name) {
    valid = name && name.length > 2;
    if (!valid) {
        return 'An employee name should not be less than 2 letters long';
    }
    return true;
}

function numberInput(id) {
    valid = /^\d*$/.test(id)
    if (!valid) {
        return 'This must be a valid number';
    }
    return true;
}

const emailAddress =
    (email) => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (!valid) {
        return 'Please enter a valid email address';
        }
        return true;
};   