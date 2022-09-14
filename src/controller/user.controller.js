const userRouter = require('./app.controller');

const { register, login, findUserByIdOrName } = require('../service/user.service')

const passport = require('passport');

/**
 * 注册
 * post请求
 * 参数：
 *  1. username
 *  2. password
 *  3. rights: admin/owner
 */
userRouter.post('/register', (req, res) => register(req.body, result => res.json(result)))

/**
 * 登录
 * post请求
 * 参数：
 *  1. userName
 *  2. password
 */
userRouter.post('/login', (req, res) => login(req.body, result => res.json(result)))

/**
 * 查找用户
 * post请求
 * 参数：
 *  1. userName
 *  2. userID
 */
userRouter.post('/findUser', (req, res) => {
    const condition = req.body.userName | req.body.userID;
    findUserByIdOrName(condition, result => res.json(result));
})


module.exports = userRouter;