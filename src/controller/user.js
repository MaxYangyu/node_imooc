const loginCheck = (username, password) => {
    if (username === 'yangyu' && password === '123') {
        return true
    }
    return false
};

module.exports = {
    loginCheck
};