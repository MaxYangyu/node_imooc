const {loginCheck} = require('../controller/user');
const {SuccessModel, ErrorModel} = require('../model/resModel');

const handleUserRouter = (req, res) => {
    const method = req.method;

    if (method === 'POST') {
        if (req.path === '/api/user/login') {
            const {username, password} = req.body;
            let result = loginCheck(username, password);
            if (result) {
                return new SuccessModel()
            } else {
                return new ErrorModel('登录失败')
            }
        }
    }
};

module.exports = handleUserRouter;