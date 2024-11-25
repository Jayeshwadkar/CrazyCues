const express = require("express");
const cors = require("cors");
require('./config/dbConfig')

const app = express();

app.use(express.json());
const corsOptions = {
  origin: ["https://new.crazycues.com","https://www.new.crazycues.com", "http://localhost:5173","https://crazycues.com","https://www.crazycues.com"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//routers
const payPalRoute = require("./routes/paypalRoute.js");
const paymentRouter = require("./routes/paymentRouter");
const stateHandleRouter = require("./routes/stateHandleRouter.js");
app.use("/api/payment", paymentRouter);
app.use('/api/paypal', payPalRoute);
app.use('/api/btnState', stateHandleRouter);
//testing

app.get("/", (req, res) => {
  res.json({ message: "server is working" });
});

//const PORT = process.env.PORT || 4200;  //for production
const PORT = process.env.PORT || 4500;  //for development

app.listen(PORT, () => {
  console.log(`server is running port ${PORT}`);
});
