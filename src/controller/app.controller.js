const express = require("express");
const router = express.Router();

router.get('/app', (req,res) => {
    res.send('app');
})

module.exports = router;