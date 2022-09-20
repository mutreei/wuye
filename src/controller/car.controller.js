const carRouter = require('./app.controller');

const {
    sellCar,
    buyCar,
    queryCar
} = require('../service/car.service');
const passport = require('passport');


/**
 * 购买车辆，增加车辆信息
 * body:
 *  1. plate车牌号
 * token: true
 *  1. userID
 *  2. name
 */
carRouter.post('/buyCar', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { userID, name } = req.user;
    const { plate } = req.body;
    buyCar({ userID, name, plate }, result => res.json(result));
})


module.exports = carRouter;