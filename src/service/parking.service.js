const connect = require('../utils/db');

/**
 * 车位相关功能
 * 1. 购买车位
 * 2. 出售车位
 * 3. 根据ID或者姓名查询名下车位
 * 4. 查询没有被购买的车位
 */


/**
 * 购买车位
 */
const buyParking = ({ parkingID, userID, userName }, callback) => {
    const priceSql = `SELECT \`price\` FROM \`parking\` WHERE \`parkingID\`=${userID}`;
    connect.query(priceSql, (error, data) => {
        if (error) {
            return callback({
                status: 400,
                msg: '无法完成购买',
                error
            })
        }
        console.log('data', data);
        callback(data);
    })
}

module.exports = {
    buyParking
}