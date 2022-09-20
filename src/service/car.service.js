const connect = require('../utils/db');


/**
 * 出售车辆
 */
const sellCar = () => { }


/**
 * 购买车辆 增加车辆信息
 */
const buyCar = ({ userID, name, plate }) => {
    const buyCarSql = `INSERT INTO \`car\` VALUES('${plate}', '${userID}', '${name}')`;
    connect.query(buyCarSql, (error, data) => {
        if (error) {
            return callback({
                status: 403,
                msg: '添加车辆信息出错了',
                error
            })
        }
        return callback({
            status: 200,
            msg: '成功添加车辆信息',
            data
        })
    })
}


/**
 * 查询名下车辆
 */
const queryCar = () => { }

module.exports = {
    sellCar,
    buyCar,
    queryCar
}