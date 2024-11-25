const paymentController = require('../controllers/paymentController')



const router =require('express').Router()

router.post('/makePayment',paymentController.GeneratePayment)



module.exports=router