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


/**
 * 出售车辆 销毁车辆信息
 * token： true
 * body:
 *  plate: 车牌号
 */
carRouter.post('/sellCar', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { plate } = req.body;
    sellCar(plate, result => res.json(result));
})

/**
 * 根据用户ID或姓名查询名下车辆
 * token:true
 *  name
 *  id
 * body: true
 *  name
 *  id
 */
carRouter.post('/queryCar', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { name: bodyName, userID: bodyID } = req.body;
    const { name: userName, userID: userID } = req.user;
    const name = bodyName || userName;
    const id = bodyID || userID;
    queryCar({ name, id }, result => res.json(result));
})

module.exports = carRouter;