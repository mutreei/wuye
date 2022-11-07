// const asyncExcute = require('../utils/asyncExcute');
const connect = require('../utils/db');

/**
 * 续费物业费
 */
const payForManage = ({ mounth, userID }, callback) => {
    const sql = `SELECT \`area\` FROM \`department\` WHERE \`depOwnerID\`='${userID}'`;
    console.log('sql', sql);

    connect.query(sql, (error, data) => {
        if (error) return callback({ status: 400, error });
        let area = 0;
        for (let key of data) {
            area += key.area;
        }
        const modifyUserSql = `UPDATE \`user\` SET \`balance\`=\`balance\`-${area}*${mounth}*5, \`expireTime\`=\`expireTime\`+60*60*24*30*${mounth} WHERE \`userID\`='${userID}';`;
        console.log('modifyUserSql', modifyUserSql);
        connect.query(modifyUserSql, (error, data) => {
            if (error) return callback(error);
            console.log('data', data);
            return callback({
                statusCode: 200,
                msg: '操作成功',
                data
            })
        })
    })
}

/**
 * 查询个人缴费记录
 */
const queryRecord = (userID, callback) => {
    const sql = `SELECT *FROM \`accountrecords\` WHERE \`ownerID\`='${userID}';`;
    connect.query(sql, (error, data) => {
        if (error) return callback({ status: 400, error });
        callback({
            status: 200,
            msg: '查询成功',
            data
        })
    })
}

/**
 * 查看所有人消费记录
 */
const queryAllRecords = callback => {
    const sql = 'SELECT *FROM `accountrecords` ';
    connect.query(sql, (error, data) => {
        if (error) return callback({ status: 400, error });
        callback({
            status: 200,
            msg: '查询成功',
            data
        })
    })
}

module.exports = {
    payForManage,
    queryRecord,
    queryAllRecords
}
