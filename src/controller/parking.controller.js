const parkingRouter = require('./app.controller');
const passport = require('passport');


/**
 * 购买车位
 * post
 * 参数：
 *  1. parkingID 车位ID
 * token：true
 *  1. userID
 *  2. userName
 * 权限：owner/null
 */
parkingRouter.post('/buyParking', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { userID, userName } = req.user;
    const parkingID = req.body.parkingID;
    
})



module.exports = parkingRouter;