import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Divider, Button } from "@mui/material";

import MainImage from "../assets/bowling-19.jpg";
import { NavLink } from "react-router-dom";
const CheckoutPage = () => {
  const steps = ["Select Date & Slot", "Payment Checkout", "Done"];

  return (
    <Box sx={{ width: "100%", padding: "0 5%", marginBottom: "2%" }}>
      {/* Stepper Component */}
      <Stepper activeStep={1} alternativeLabel sx={{ marginBottom: "4%" }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Main Content */}
      <Grid container spacing={2}>
        {/* Left Section */}
        <Grid item xs={12} md={8}>
          {/* Booking Details Card */}
          <Box sx={{ border: "1px solid #ddd", borderRadius: "8px", padding: "16px", marginBottom: "16px" }}>
            <Box sx={{ backgroundColor: "#003366", color: "#fff", padding: "8px", borderRadius: "4px 4px 0 0" }}>
              <Typography variant="h6">Bethak Snooker and cafe</Typography>
            </Box>
            <Box sx={{ display: "flex", padding: "16px", flexDirection: { xs: "column", md: "row" } }}>
              <Box sx={{ width: "100px", height: "100px", marginBottom: { xs: "16px", md: "0" }, backgroundColor: "#f0f0f0" }}>
              <img src={MainImage} alt="Snooker" style={{ width: "100%", height: "100%", objectFit: "cover", }} />
              </Box>
              <Box sx={{marginLeft:'1%'}}>
                <Typography variant="body1" sx={{marginBottom:'1%',fontWeight:'800'}}>
                872 Bergen Ave
                </Typography>
                <Typography variant="body2" sx={{marginBottom:'1%'}}>
                  Booking Date: <strong>11 November,2024</strong>
                </Typography>
                <Typography variant="body2" sx={{marginBottom:'1%'}}>
                  Time Slot: <strong>03:00 PM To 04:00 PM</strong>
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Coupon Section */}
          {/* <Box sx={{ border: "1px solid #ddd", borderRadius: "8px", padding: "16px", marginBottom: "16px" }}>
            <Box sx={{ backgroundColor: "#003366", color: "#fff", padding: "8px", borderRadius: "4px 4px 0 0" }}>
              <Typography variant="h6">Do you Have a Coupon or Voucher?</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", padding: "16px" }}>
              <TextField fullWidth placeholder="Enter your coupon" variant="outlined" />
              <Button variant="contained" sx={{ marginLeft: "8px", backgroundColor: "#003366" }}>
                Apply Coupon
              </Button>
            </Box>
          </Box> */}
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={4}>
          {/* Order Details */}
          <Box sx={{ border: "1px solid #ddd", borderRadius: "8px", padding: "16px", marginBottom: "16px" }}>
  <Box sx={{ backgroundColor: "#003366", color: "#fff", padding: "8px", borderRadius: "4px 4px 0 0" }}>
    <Typography variant="h6">Order Details</Typography>
  </Box>
  <Box sx={{ padding: "16px" }}>
    <Typography variant="body2" sx={{ display: "flex", justifyContent: "space-between" }}>
      <span style={{marginBottom:'1%',fontWeight:'800'}}>Ticket:</span>
      <span>$340</span>
    </Typography>
   
    <Typography variant="body2" sx={{ display: "flex", justifyContent: "space-between" }}>
      <span style={{marginBottom:'1%',fontWeight:'800'}}>Convenience Fee:</span>
      <span>$14</span>
    </Typography>

    <Typography variant="body2" sx={{ display: "flex", justifyContent: "space-between" }}>
      <span style={{marginBottom:'1%',fontWeight:'800'}}>Food & Beverage:</span>
      <span>$0</span>
    </Typography>
   
    <Typography variant="body2" sx={{ display: "flex", justifyContent: "space-between" }}>
      <span style={{marginBottom:'1%',fontWeight:'800'}}>Discount:</span>
      <span>$0</span>
    </Typography>
    <Divider />
    <Typography variant="body2" sx={{ marginTop: "8px", fontWeight: "bold", display: "flex", justifyContent: "space-between" }}>
      <span style={{marginBottom:'1%',fontWeight:'800'}}>Total Amount:</span>
      <span>$354</span>
    </Typography>

    <Typography variant="body2" sx={{ display: "flex", justifyContent: "space-between" }}>
      <span style={{marginBottom:'1%',fontWeight:'800'}}>Use Wallet Balance:</span>
      <span>$0</span>
    </Typography>

    <Typography variant="body2" sx={{ display: "flex", justifyContent: "space-between" }}>
      <span style={{marginBottom:'1%',fontWeight:'800'}}>Advanced Booking Amount:</span>
      <span>$354</span>
    </Typography>
    <Divider />
    <Typography variant="body2" sx={{ marginTop: "8px", fontWeight: "bold", display: "flex", justifyContent: "space-between" }}>
      <span style={{marginBottom:'1%',fontWeight:'800'}}>Remaining Payable Amount:</span>
      <span>$0</span>
    </Typography>
   
  </Box>
</Box>


          {/* Payment Method */}
          <Box sx={{ border: "1px solid #ddd", borderRadius: "8px", padding: "16px" }}>
            <Box sx={{ backgroundColor: "#003366", color: "#fff", padding: "8px", borderRadius: "4px 4px 0 0" }}>
              <Typography variant="h6">Payment Method</Typography>
            </Box>
            <Box sx={{ padding: "16px" }}>
              <Typography variant="body2" sx={{ marginBottom: "8px" }}>
                Please select the preferred payment method to use on this order.
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <input type="checkbox" />
                <Typography variant="body2" sx={{ marginLeft: "8px" }}>
                  Use Wallet Balance $10
                </Typography>
              </Box>
            </Box>
            <NavLink to="/cardpage" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                marginTop: "20px",
                backgroundColor: "white",
                color: "black",
                padding: "10px 0",
                fontWeight: "800",
                "&:hover": { backgroundColor: "black", color: "white" },
              }}
            >
              Pay
            </Button>
            </NavLink>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CheckoutPage;
