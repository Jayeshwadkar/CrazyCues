const axios = require('axios');
const token = require('../env');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');



const MERCHANT_ID = token.merchantId;
const apiToken = token.api;

const getTenders = async () => {
    const cloverTenderApiUrl = `https://apisandbox.dev.clover.com/v3/merchants/${MERCHANT_ID}/tenders`;
    
    try {
      const response = await axios.get(cloverTenderApiUrl, {
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        return response.data.elements;
      } else {
        throw new Error(`Failed to retrieve tenders: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error getting tenders:', error.response ? error.response.data : error.message);
      throw error;
    }
  };





  const sendReceiptEmail = async (clientName, email, mobileNo, amount, paymentData) => {
   
    let transporter = nodemailer.createTransport({
    host: 'mail.crazycues.com',
    port: 587,
    secure: false, 
      auth: {
        user: 'no-reply@crazycues.com', 
        pass: 'NoReply@2024#',
      },
      tls: {
        rejectUnauthorized: false 
      },
    });
  

    const templatePath = 'test.html';
    let template = await readEmailTemplate(templatePath);
    template = template.replace('{customerName}', `${clientName}`);
    template = template.replace('{mobileNo}', `${mobileNo}`);
    template = template.replace('{subTotal}', `${amount}`);
    template = template.replace('{amount}', `${amount}`);
    template = template.replace('{orderId}', `${paymentData.order.id}`);


    // Set up email data
    let mailOptions = {
      from: 'no-reply@crazycues.com',
      to: email, // List of receivers
      subject: 'Payment Successfull !!',
      html: template
    };
  
    // Send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
  };





  
  const GeneratePayment = async (req, res) => {
    const { clientName, email, mobileNo, cardNumber, expiryDate, cvv } = req.body;
    const amount = 30;
    const MainString = expiryDate.split('/');
    const expMonth = MainString[0]
    const expYear = MainString[1]

    const cloverOrderApiUrl = `https://apisandbox.dev.clover.com/v3/merchants/${MERCHANT_ID}/orders`;
    const cloverPaymentApiUrl = `https://apisandbox.dev.clover.com/v3/merchants/${MERCHANT_ID}/payments`;
  
    try {
      // Step 1: Retrieve the available tenders
      const tenders = await getTenders();
      if (!tenders || tenders.length === 0) {
        return res.status(400).json({ success: false, message: 'No tenders available for the merchant.' });
      }
  
      // Use the first available tender for the payment
      const tenderId = tenders[0].id;
  
      // Step 2: Create the order
      const orderPayload = {
        currency: 'USD', // Adjust currency as needed
      };
  
      const orderResponse = await axios.post(cloverOrderApiUrl, orderPayload, {
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (orderResponse.status !== 200 && orderResponse.status !== 201) {
        return res.status(orderResponse.status).json({
          success: false,
          message: orderResponse.statusText,
        });
      }
  
      const orderId = orderResponse.data.id;
  
      // Step 3: Create the payment payload with the order ID and tender ID
      const paymentPayload = {
        amount: amount * 100, // Clover expects the amount in cents
        card: {
          cardNumber,
          expMonth,
          expYear,
          cvv,
        },
        currency: 'USD', // Adjust currency as needed
        order: {
          id: orderId,
        },
        tender: {
          id: tenderId,
        },
      };
  
      // Log request details for debugging
     
  
      // Step 4: Make the payment request
      const paymentResponse = await axios.post(cloverPaymentApiUrl, paymentPayload, {
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
        },
      });
  
      // Handle the response
      if (paymentResponse.status === 200 || paymentResponse.status === 201) {
          if(email){
            await sendReceiptEmail(clientName, email, mobileNo,amount, paymentResponse.data);
          }
        return res.status(200).json({ success: true, data: paymentResponse.data });
      } else {
        return res.status(paymentResponse.status).json({ success: false, message: paymentResponse.statusText });
      }
    } catch (error) {
      // Log the error response for debugging
      if (error.response) {
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
        res.status(error.response.status).json({
          success: false,
          message: error.response.data.message || 'Unauthorized',
        });
      } else {
        console.error('Request error:', error.message);
        res.status(500).json({ success: false, message: error.message });
      }
    }
  };




  const readEmailTemplate = (template) => {
    return new Promise((resolve, reject) => {
        fs.readFile(
            path.resolve(path.basename(''), `emailTemplates/${template}`),
            'utf8',
            (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            }
        );
    });
  };




module.exports = {
  GeneratePayment
};
