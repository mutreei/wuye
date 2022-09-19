const parkingRouter = require('./app.controller');
const passport = require('passport');

<<<<<<< HEAD
=======
const { buyParking, sellParking, queryParking, queryParkingIFnull } = require('../service/parking.service');
>>>>>>> parking

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
<<<<<<< HEAD
    const { userID, userName } = req.user;
    const parkingID = req.body.parkingID;
    
})


=======
    const { userID, name:userName } = req.user;
    const parkingID = req.body.parkingID;
    console.log('parkingID', parkingID);
    buyParking({ parkingID, userID, userName }, result => res.json(result));
})

/**
 * 出售车位
 * token:true
 *  1. userID
 * 参数：
 *  1. parkingID 车位ID
 */
parkingRouter.post('/sellParking', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { userID } = req.user;
    const { parkingID } = req.body;
    sellParking({ userID, parkingID }, result => res.json(result));
})

/**
 * 查询名下车位
 * token:true
 *  userID
 */
parkingRouter.post('/queryParking', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { userID } = req.user;
    queryParking(userID, result => res.json(result));
})

/**
 * 查询没有被购买的车位
 * token true
 */
parkingRouter.post('/queryParkingIFnull', passport.authenticate('jwt', { session: false }), (req, res) => {
    queryParkingIFnull(result => res.json(result));
})
>>>>>>> parking

module.exports = parkingRouter;