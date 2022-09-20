const express = require('express');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');

//配置body-paeser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 路由
const router = require('./controller/app.controller');
const userRouter = require('./controller/user.controller');
const parkingRouter = require('./controller/parking.controller');
const deRouter = require('./controller/department.controller');
const carRouter = require('./controller/app.controller');
app.use(router);
app.use(userRouter);
app.use(parkingRouter);
app.use(deRouter);
app.use(carRouter);

// token验证解密
const passport = require('passport');
app.use(passport.initialize());
require('./utils/passport')(passport);


app.listen(3001, () => {
    console.log('service running on port 3001....');
})