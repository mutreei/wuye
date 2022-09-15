const userRouter = require('./app.controller');

const { register, login, findUserByIdOrName, recharge, findAllUser, destroyUser } = require('../service/user.service')

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

/**
 * 账户充值
 * post
 * 参数：
 *  1. 充值价格
 * token:true
 */
userRouter.post('/recharge', passport.authenticate('jwt', { session: false }), (req, res) => {
    const userID = req.user.userID;
    const size = req.body.size;
    recharge(userID, size, result => res.json(result));
})

/**
 * 查询所有用户
 * 参数：null
 * token：true
 * 权限：admin
 */
userRouter.post('/findAllUser', passport.authenticate('jwt', { session: false }), (req, res) => {
    const rights = req.user.rights;
    if (rights !== 'admin') {
        return res.json({
            status: 403,
            msg: '无权限'
        })
    }
    return findAllUser(result => res.json(result));
})

/**
 * 销毁账户
 * token:true
 */
userRouter.post('/destroyUser', passport.authenticate('jwt', { session: false }), (req, res) => {
    const userID = req.user.userID;
    destroyUser(userID, result => res.json(result));
})

module.exports = userRouter;