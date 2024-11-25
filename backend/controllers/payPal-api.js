const axios = require('axios');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const db = require("../config/dbConfig");


//Client
//const base = "https://api.paypal.com";
//
//Testing
 const base = "https://api.sandbox.paypal.com";
 //
 //Client for newcrazycues

//  const PAYPAL_CLIENT_ID="AdHu8AItMj3DIpqQdUrvsDfQD7K_MJKg24CfH3cgylSbvc4CIuI5RRzg586Piy9X7H1ZZydyoylrS8Hz";
//  const PAYPAL_CLIENT_SECRET="EJtNP0L4A_lGrumWlv83YyM4WFNFYEq1yTn614vg9PDpIAuIyUDyCm5qYsnoNclmd-aFpaDGJGu9sOkY";
//
 //Client for crazycues

//  const PAYPAL_CLIENT_ID="AWATVwD1JjqFBoFISO3GQ56Uhdtupo6CwvgMmFsQSshSqgiuISaQA2Kv7nUe0hSTuT6hQ5_8qkzbg7jb";
//  const PAYPAL_CLIENT_SECRET="EDDPNb-tygGN6qumN8CPVuXbYlMFuzsmrD_LG9YZEH08euaJfp6kUA4TMOE_m061YYpwRhqDL5fezaD_";

//
//Testing
 const PAYPAL_CLIENT_ID="AVTOuoBoCKlZc8n2APQ26qr4Hc8HaPL3iURgxmp__-IEBVexkczGp3SqXzd3s8iQsJTIcC_9WtlKGkr7"
 const PAYPAL_CLIENT_SECRET="EHGF4LOnfpW3Zckv86rozvwicD8UZLCj87eJBcKddfnW6dloV_f8x0URWjjLA4aRgdIEF5wqBfaG1K6c"

const createOrder = async (data) => {
  try {
    const accessToken = await generateAccessToken();
    console.log("hello from backend paypal accesstokennn",accessToken)
    const currentTimeUTC = new Date().toISOString();
    const url = `${base}/v2/checkout/orders`;
    let cost = data.cost;

  
    const payload = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: cost,
          },
        },
      ],
      application_context: {
        shipping_preference: "NO_SHIPPING",
      },
      
      create_time: currentTimeUTC,
    };
 
 
 
    const response = await axios.post(url, payload, {
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
      },
  });
 
    return handleResponse(response);
  } catch (error) {
    return {
      success: false,
      message: "Error creating order.",
      error: error.message,
    };
  }
  };
 
  const captureOrder = async (orderID) => {
    try{
    const accessToken = await generateAccessToken();

    const url = `${base}/v2/checkout/orders/${orderID}/capture`;

    const response = await axios.post(url, {}, {
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
      },
  });
    const result = await handleResponse(response);
    
      const orderid = result.jsonResponse.id;
      const name = result.jsonResponse.payer.name.given_name;
      const email = result.jsonResponse.payer.email_address;
      const amount = 60;

      // Send receipt email
      // await sendReceiptEmail(name, email, amount, orderid);
      console.log("Payment Success:", result);
    
    return result;
  } catch (error) {
    return {
      success: false,
      message: "Error capturing order.",
      error: error.message,
    };
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
const sendReceiptEmail = async (req,res) => {
  try {
   console.log(req.body)
   const {clientName,email}=req.body.formData
   const {orderid,ordermail}=req.body.mailData
   let finalmail
   const amount=60
   if(ordermail != email){
    finalmail=`${ordermail},${email}`
    
   }else{
    finalmail=email 
   }
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
  const randomNumber = Math.floor(10000000 + Math.random() * 90000000);

  const templatePath = 'test.html';
  let template = await readEmailTemplate(templatePath);
  template = template.replace('{customerName}', `${clientName}`);
  template = template.replace('{subTotal}', `${amount}`);
  template = template.replace('{amount}', `${amount}`);
  template = template.replace('{orderId}', `${orderid}`);
  template = template.replace('{randomNumber}', `${randomNumber}`); // Replace placeholder for random number



  // Set up email data
  let mailOptions = {

    from: 'no-reply@crazycues.com',
    to: finalmail, // List of receivers
     bcc: 'payments@crazycues.com',
    subject: 'Payment Successfull !!',
    html: template
  };

  // Send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);
  console.log('Message sent: %s', info.messageId);
  res.status(200).json({ message: 'Email sent successfully', messageId: info.messageId });
} catch (error) {
  console.error('Error sending email:', error);
  res.status(500).json({ message: 'Failed to send email', error: error.message });
}
};

  const generateAccessToken = async () => {

    try {
      if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
        throw new Error("MISSING_API_CREDENTIALS");
      }
      const auth = Buffer.from(
        PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET,
      ).toString("base64");
      const response = await axios.post(
        `${base}/v1/oauth2/token`,
        "grant_type=client_credentials",
        {
            headers: {
                Authorization: `Basic ${auth}`,
            },
        }
    );
 
      console.log("Access token response:", response.data);
      return response.data.access_token;
    } catch (error) {
      console.error("Failed to generate Access Token:", error);
    }
  };
 
  async function handleResponse(response) {
    try {
      const jsonResponse = response.data;
    
  
      if (jsonResponse.purchase_units) {
        
  
        // Check for captures within payments
        if (jsonResponse.purchase_units[0].payments && jsonResponse.purchase_units[0].payments.captures) {
          
  
          // Iterate through captures and convert timestamps to local timezone
          jsonResponse.purchase_units[0].payments.captures.forEach(capture => {
            const dateInLocalTimezone = new Date(capture.create_time).toLocaleString('en-US', {
              timeZone: 'America/New_York', // Replace with your desired timezone
            });
  
            console.log('Timestamp in Local Timezone:', dateInLocalTimezone);
          });
        }
      }
     
      return {
        jsonResponse,
        httpStatusCode: response.status,
      };
    } catch (err) {
      console.error("Error handling response:", err);
      return {
        success: false,
        message: "Failed to process the response.",
        error: err.message,
      };
    }
  }
  



const fetchCurrentBtnState = async(req,res)=>{
  try{
    const fetchQuery = 'select * From BtnState'
      
    const [fetchData] = await db.query(fetchQuery);

    return res.status(200).send(fetchData[0]);
  }catch(error){
    console.log('btn state error',error);
    return res.status(500).send({message:'Btn State Error', error:error.message})
  }
}




const updateBtnState = async(req,res)=>{
  const flagId = req.params.id
  try{
    const fetchQuery = 'update BtnState set btnFlag = ? where id = 1'
      
       await db.query(fetchQuery,flagId);

    return res.status(200).send({status:'Success', message:'Flag Status Updated Successfully !!'});
  }catch(error){
    console.log('btn state error',error);
    return res.status(500).send({message:'Flag Status Update Error', error:error.message})
  }
}





  
module.exports={
    captureOrder,
    createOrder,
    sendReceiptEmail,
    fetchCurrentBtnState,
    updateBtnState
}