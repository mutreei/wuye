const deRouter = require('./app.controller');

const {
    enterDepartment,
    leaveDepartment,
    queryDepartment
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


module.exports = deRouter;