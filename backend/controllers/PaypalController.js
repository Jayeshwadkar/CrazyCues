const paypal = require("./payPal-api.js");

const paypalpaymentorder = async (req, res) => {
    console.log("create",req.body)
    try {
        const data = req.body;
        const order = await paypal.createOrder(data);
        
        res.json(order);
      } catch (error) {
        console.error("Failed to create order:", error);
        res.status(500).json({ error: "Failed to create order." });
      }
  };
  const orderId = async (req, res) => {
    console.log("ordert", req.body)
    let orderID
    try {
        const data = req.body;
         orderID = data.orderID;

        // Assuming captureOrder returns an object with jsonResponse property
        const captureData = await paypal.captureOrder(orderID);
        const purchaseUnits = captureData.jsonResponse;
        res.json(purchaseUnits);
    } catch (error) {
        console.error("Failed to create order:", error);

        // Send both the order ID and error in the response
        res.status(500).json({ error: "Failed to capture order.", orderID });
    }
};


module.exports={
orderId,
paypalpaymentorder
}