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
const leaveDepartment = () => {

}

/**
 * 查询名下公寓
 */
const queryDepartment = () => {
    
}

module.exports = {
    enterDepartment,
    leaveDepartment,
    queryDepartment
}