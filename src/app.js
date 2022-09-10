const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.send('nihao'+process.env.ENCRYPT);  
})

app.listen(3001, () => {
    console.log('service running on port 3001....');
})