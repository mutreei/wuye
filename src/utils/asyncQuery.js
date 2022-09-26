const connect = require("./db")

const asyncQuery = sqlStatement => {
    return new Promise((res, rej) => {
        connect.query(sqlStatement, (error, data) => {
            if (error) {
                rej({
                    status: 400,
                    msg: '查询/操作失败',
                    error
                });
            }
            else {
                res({
                    status: 200,
                    msg: '查询/操作成功',
                    data
                })
            }
        })
    })
}

module.exports = asyncQuery;