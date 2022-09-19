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
<<<<<<< HEAD
    const priceSql = `SELECT \`price\` FROM \`parking\` WHERE \`parkingID\`=${userID}`;
=======
    const priceSql = `SELECT \`price\` FROM \`parking\` WHERE \`parkingID\`='${parkingID}'`;
    console.log('priceSql', priceSql);
>>>>>>> parking
    connect.query(priceSql, (error, data) => {
        if (error) {
            return callback({
                status: 400,
                msg: '无法完成购买',
                error
            })
        }
<<<<<<< HEAD
        console.log('data', data);
        callback(data);
=======
        const price = data[0].price;
        const updateSql = `UPDATE \`user\` SET \`balance\`=\`balance\`-${price} WHERE \`userID\`=${userID};
        UPDATE \`parking\` SET \`parkingOwnerID\`=${userID}, \`parkingOwnerName\`='${userName}' WHERE \`parkingID\` = '${parkingID}'`;
        console.log('updateSql', updateSql);
        connect.query(updateSql, (error, data) => {
            if (error) {
                return callback({
                    status: 400,
                    msg: '购买车位失败',
                    error
                })
            }
            return callback({
                status: 200,
                msg: '购买车位成功',
                data
            })
        })
    })
}

/**
 * 出售车位
 */
const sellParking = ({ parkingID, userID }, callback) => {
    const queryParkingPrice = `SELECT \`price\` FROM \`parking\` WHERE \`parkingID\`='${parkingID}'`;
    connect.query(queryParkingPrice, (error, data) => {
        if (error) {
            return callback({
                status: 400,
                msg: '查询车位价格失败',
                error
            })
        }
        const price = data[0].price; //车位价格
        const updateSql = `UPDATE \`user\` SET \`balance\`=\`balance\`+${price} WHERE \`userID\`='${userID}';
        UPDATE \`parking\` SET \`parkingOwnerName\` = NULL, \`parkingOwnerID\`=NULL WHERE \`parkingID\` = '${parkingID}'`;
        connect.query(updateSql, (err, data) => {
            if (err) {
                return callback({
                    status: 403,
                    msg: '出售车位失败',
                    err
                })
            }
            return callback({
                status: 200,
                msg: '成功出售车位',
                data
            })
        })
    })
}

/**
 * 查询车位
 * @param {*} userID 
 * @param {*} callback 
 */
const queryParking = (userID, callback) => {
    const queryParkingSql = `SELECT *FROM \`parking\` WHERE \`parkingOwnerID\`='${userID}';`
    connect.query(queryParkingSql, (error, data) => {
        if (error) {
            return callback({
                status: 400,
                msg: '查询失败',
                error
            })
        }
        return callback({
            status: 200,
            msg: '查询车位成功',
            data
        })
    })
}

/**
 * 查询
 */
const queryParkingIFnull = callback => {
    const querySql = `SELECT *FROM \`parking\` WHERE ISNULL(\`parkingOwnerID\`) OR \`parkingOwnerID\`='';`
    connect.query(querySql, (error, data) => {
        if (error) {
            return callback({
                status: 400,
                msg: '查询失败',
                error
            })
        }
        return callback({
            status: 200,
            msg: '查询成功',
            data
        })
>>>>>>> parking
    })
}

module.exports = {
<<<<<<< HEAD
    buyParking
=======
    buyParking,
    sellParking,
    queryParking,
    queryParkingIFnull
>>>>>>> parking
}