const express = require("express")

const paypalController = require("../controllers/PaypalController.js")
const paypalapi = require("../controllers/payPal-api.js")
const router = express.Router();

router.post("/paypalPayment",paypalController.paypalpaymentorder);
router.post("/sendOrderId", paypalController.orderId);
router.post('/mail',paypalapi.sendReceiptEmail)
router.get('/btnState',paypalapi.fetchCurrentBtnState)
router.put('/rstatus=:id',paypalapi.updateBtnState)

module.exports = router;