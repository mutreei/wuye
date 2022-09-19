const connect = require('../utils/db');
const md5 = require('md5');
const jwt = require('jsonwebtoken');

/**
 * 注册
 * @param {*} param0 
 * @param {*} callback 
 */
const register = ({ userName, password, rights }, callback) => {
    const sql = `INSERT INTO \`user\`(\`name\`, \`password\`, \`registerTime\`, \`rights\`, \`expireTime\`) VALUES ('${userName}', '${md5(password)}', NOW(), '${rights}', UNIX_TIMESTAMP(NOW()))`;
    console.log('sql', sql)
    findUserByIdOrName(userName, queryRes => {
        console.log('queryRes', queryRes);
        if (queryRes.data) {
            return callback({
                status: 403,
                msg:'注册失败，该用户名不可用'
            })
        }
        connect.query(sql, (err, data) => {
            if (err) {
                return callback({
                    status: 400,
                    msg: '注册失败',
                    ...err
                })
            }
            return callback({
                status: 200,
                msg: '注册成功',
                ...data
            });
        })
    })
}

/**
 * 查询单条数据
 * @param {*} condition 
 * @param {*} callback 
 */
const findUserByIdOrName = (condition, callback) => {
    const sql = `SELECT *FROM \`user\` WHERE \`userID\`=${parseInt(condition) | 0} OR \`name\`='${condition}'`;
    console.log('findUserByIdOrName',sql)
    connect.query(sql, (error, data) => {
        if (error) {
            return callback({
                status: 400,
                msg: '查询失败',
                ...error
            })
        }
        console.log('data', data);
        callback({
            status: 200,
            msg: '查询成功',
            data:data[0]
        })
    })
}

/**
 * 登录
 * @param {*} param0 
 * @param {*} callback 
 */
const login = ({ userName, password }, callback) => {
    const loginSql = `SELECT *FROM \`user\` WHERE \`name\`='${userName}' AND \`password\`='${md5(password)}';`
    const updateSql = `UPDATE \`user\` SET loginTime=NOW() WHERE \`name\`='${userName}' AND \`password\`='${password}'`;
    connect.query(loginSql, (error, data) => {
        if (error) {
            return callback({
                status: 400,
                msg: '登录失败',
                ...error
            });
        }
        else if (!data[0]) {
            console.log('data', data[0]);
            console.log('data', data);
            return callback({
                status: 400,
                msg:'登录失败，账号或密码错误'
            })
        }
        // token加密内容
        const {userID, name, rights} = data[0];
        const tokenStr = jwt.sign({userID, name, rights}, process.env.ENCRYPT_KEY, {expiresIn:60*60*48})
        connect.query(updateSql);
        return callback({
            status: 200,
            msg: '登录成功',
            ...data,
            token: 'Bearer '+tokenStr
        })
    })
}

/**
 * 账户充值/消费
 * @param {} userID 
 * @param {*} size 
 * @param {*} callback 
 */
const recharge = (userID, size, callback) => {
    const sql = `UPDATE \`user\` SET \`balance\`=\`balance\`+${size} WHERE \`userID\`='${userID}'`;
    connect.query(sql, (error, data) => {
        if (error) {
            return callback({
                status: 400,
                msg: '充值/消费失败',
                error
            })
        }
        return callback({
            status: 200,
            msg: '充值/消费成功',
            data
        })
    })
}

/**
 * 查询所有用户
 * @param {} callback 
 */
const findAllUser = callback => {
    const sql = `SELECT *FROM \`user\``;
    connect.query(sql, (error, data) => {
        if (error) {
            return callback({
                status: 400,
                msg: '查找所有用户失败',
                error
            })
        }
        return callback({
            status: 200,
            msg: '成功查询',
            data
        })
    })
}

/**
 * 销毁用户
 */
const destroyUser = (userID, callback) => {
    const sql = `DELETE FROM \`user\` WHERE \`userID\` = ${userID}`;
    connect.query(sql, (error, data) => {
        if (error) {
            return callback({
                status: 400,
                msg: '删除失败',
                error
            })
        }
        return callback({
            status: 200,
            msg: '成功销毁该账户',
            data
        })
    })
}

module.exports = {
    register,
    login,
    findUserByIdOrName,
    recharge,
    findAllUser,
    destroyUser
}