const express = require("express")

const paypalapi = require("../controllers/payPal-api.js")
const router = express.Router();


router.get('/rstatus=:id',paypalapi.updateBtnState)

module.exports = router;