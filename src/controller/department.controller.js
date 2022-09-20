const deRouter = require('./app.controller');

const {
    enterDepartment,
    leaveDepartment,
    queryDepartment,
    queryDepIFnull
} = require('../service/department.service');
const passport = require('passport');

/**
 * 进入公寓
 * token: true
 * 1. userID
 * 2. name
 * body:
 *  1. depID
 */
deRouter.post('/enterDepartment', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { userID, name } = req.user;
    const { depID } = req.body;
    enterDepartment({ userID, name, depID }, result => res.json(result));
})

/**
 * 离开公寓
 * token: true
 * body: 
 *  1. depID
 */
deRouter.post('/leaveDepartment', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { depID } = req.body;
    leaveDepartment(depID, result => res.json(result));
})

/**
 * 根据ID查询名下公寓
 * token: true
 *  userID
 */
deRouter.post('/queryDepartment', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { userID } = req.user;
    queryDepartment(userID, result => res.json(result));
})

/**
 * 空公寓查询
 * token: true
 */
deRouter.post('/queryDepIFnull', passport.authenticate('jwt', { session: false }), (req, res) => {
    queryDepIFnull(result => res.json(result));
})

module.exports = deRouter;