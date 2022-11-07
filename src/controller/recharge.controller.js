const rechargeRouter = require('./app.controller');
const {
    payForManage,
    queryRecord,
    queryAllRecords
} = require('../service/recharge.service');
const passport = require('passport');

/**
 * 物业费计算为： 面积*月数*5 5为每方每月缴纳费用5元
 * 缴纳物业费
 * token: true
 *  userID 用户ID
 * body:
 *  mounth： 续费月数
 */
rechargeRouter.post('/payForManage', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { mounth } = req.body;
    const { userID } = req.user;
    payForManage({ mounth, userID }, result => res.json(result));
})

/**
 * 查询个人缴费记录
 * token：true
 *  userID
 */
rechargeRouter.post('/queryRecord', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { userID } = req.user;
    queryRecord(userID, result => res.json(result));
})

/**
 * 查看所有人消费记录
 * token: true
 *  rights: admin
 */
rechargeRouter.post('/queryAllRecords', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { rights } = req.user;
    if (rights !== 'admin') {
        return res.json({
            status: 400,
            msg: '无权限'
        })
    }
    queryAllRecords(result=>res.json(result))
})

module.exports = rechargeRouter;
