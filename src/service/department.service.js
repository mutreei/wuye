const connect = require('../utils/db');

/**
 * 入住公寓
 */
const enterDepartment = ({ userID, name, depID }, callback) => {
    const sql = `UPDATE \`department\` SET \`depOwnerID\`='${userID}', \`depOwnerName\` = '${name}' WHERE \`depID\`='${depID}'`;
    connect.query(sql, (error, data) => {
        if (error) {
            callback({
                status: 400,
                msg: '操作失败',
                error
            })
        }
        return callback({
            status: 200,
            msg: '成功入住',
            data
        })
    })
}

/**
 * 离开公寓
 */
const leaveDepartment = (depID, callback) => {
    const leaveSql = `UPDATE \`department\` SET \`depOwnerID\`=NULL, \`depOwnerName\` = NULL WHERE \`depID\`='${depID}'`;
    connect.query(leaveSql, (error, data) => {
        if (error) {
            return callback({
                status: 403,
                msg: '出现错误了',
                error
            })
        }
        return callback({
            status: 200,
            msg: '成功操作',
            data
        })
    })
}

/**
 * 查询名下公寓
 */
const queryDepartment = (userID, callback) => {
    const querySql = `SELECT *FROM \`department\` WHERE \`depOwnerID\`='${userID}'`;
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
    })
}

module.exports = {
    enterDepartment,
    leaveDepartment,
    queryDepartment
}