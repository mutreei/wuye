// ./passport.js
// passport-jwt完成passport验证函数
// jwt策略和提取jwt
const passportJwt = require('passport-jwt');
const JwtStrategy = passportJwt.Strategy; //jwt策略
const ExtractJwt = passportJwt.ExtractJwt; //提取jwt
const opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.ENCRYPT_KEY
} //配置
module.exports = passport => {
    passport.use(new JwtStrategy(opts, (jwtPayload, done) => {
        // jwtPayload就是我们储存在token内部的用户信息对象解密的结果
        console.log(jwtPayload);    //{ username: 'username', iat: 1661057703, exp: 1661057763 }
        return done(null, jwtPayload);
    }))
}