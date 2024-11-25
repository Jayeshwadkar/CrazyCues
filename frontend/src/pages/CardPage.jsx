import React, { useState } from "react";
import {Box,Grid,TextField,Checkbox,Button,Typography,FormControlLabel,} from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
const CardPage = () => {
  const steps = ["Select Date & Slot", "Payment Checkout", "Done"];


  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [errors, setErrors] = useState({
    cardNumber: "",
    nameOnCard: "",
    expiryDate: "",
    cvv: "",
  });

  const handleCardNumberChange = (event) => {
    let value = event.target.value.replace(/\D/g, ""); // Remove all non-digit characters
    value = value.slice(0, 16); // Limit to 16 digits
    value = value.replace(/(\d{4})(?=\d)/g, "$1-"); // Insert hyphens every 4 digits
    setCardNumber(value);
  };

  const handleExpiryDateChange = (event) => {
    let value = event.target.value.replace(/\D/g, ""); // Remove non-digit characters

    if (value.length > 2) {
      // Insert the slash after the first 2 digits for MM/YY format
      value = value.slice(0, 2) + "/" + value.slice(2, 4); // Format as MM/YY
    }

    // Limit to MM/YY (2 digits for MM and 2 for YY)
    value = value.slice(0, 5); // Limit to 5 characters (e.g., 12/34)

    setExpiryDate(value);
  };

  const handleCvvChange = (event) => {
    const value = event.target.value.replace(/\D/g, ""); // Remove non-digits
    setCvv(value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      cardNumber: "",
      nameOnCard: "",
      expiryDate: "",
      cvv: "",
    };

    // Validate card number
    if (!cardNumber || cardNumber.replace(/-/g, "").length !== 16) {
      newErrors.cardNumber = "Card number must be 16 digits";
      isValid = false;
    }

    // Validate name on card
    if (!nameOnCard) {
      newErrors.nameOnCard = "Name on the card is required";
      isValid = false;
    }

    // Validate expiry date (MM/YY format)
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryDate || !expiryRegex.test(expiryDate)) {
      newErrors.expiryDate = "Expiry date must be in MM/YY format";
      isValid = false;
    }

    // Validate CVV (3 digits)
    if (!cvv || cvv.length !== 3) {
      newErrors.cvv = "CVV must be exactly 3 digits";
      isValid = false;
    }

    // Validate terms and conditions
    if (!isChecked) {
      alert("You must agree to the terms and conditions.");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Submit form if validation is successful
      alert("Form submitted successfully!");
    }
  };

  return (
    <>
<Stepper activeStep={1} alternativeLabel sx={{ marginBottom: "4%" }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
        padding: 4,
      }}
    >


      <Box
        sx={{
          backgroundColor: "#e5eaed",
          padding: 3,
          borderRadius: 1,
          boxShadow: 1,
          maxWidth: 400,
          width: "100%", // Ensure it is responsive
        }}
      >
        <Typography variant="h6" gutterBottom>
          Enter your Card details
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1">Card Number</Typography>
            <TextField
              fullWidth
              placeholder="XXXX-XXXX-XXXX-XXXX"
              value={cardNumber}
              onChange={handleCardNumberChange}
              inputProps={{ maxLength: 19 }}
              error={!!errors.cardNumber}
              helperText={errors.cardNumber}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1">Name on the card</Typography>
            <TextField
              fullWidth
              placeholder="Name on the card"
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
              error={!!errors.nameOnCard}
              helperText={errors.nameOnCard}
            />
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body1">Expiry</Typography>
            <TextField
              fullWidth
              placeholder="MM / YY"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              error={!!errors.expiryDate}
              helperText={errors.expiryDate}
              inputProps={{ maxLength: 5 }} // Limit input to MM/YY format (5 characters max)
            />
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body1">CVV</Typography>
            <TextField
              fullWidth
              placeholder="CVV"
              value={cvv}
              onChange={handleCvvChange}
              error={!!errors.cvv}
              helperText={errors.cvv}
              inputProps={{ maxLength: 3 }}
            />
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 2,
            flexDirection: "row",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
            }
            label={
              <>
                <Typography variant="body2">I agree to </Typography>
                <Typography variant="body2" component="span" color="primary">
                  terms and conditions
                </Typography>
              </>
            }
          />
        </Box>

        <Button
          variant="contained"
          color="error"
          fullWidth
          sx={{
            mt: 2,
            width: "100%", // Make button full-width within the container
            color:'black',
            fontWeight:'800',
            backgroundColor:'white',
            "&:hover": { backgroundColor: "black", color: "white" }
          }}
          onClick={handleSubmit}
        >
          MAKE PAYMENT
        </Button>

        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          sx={{ mt: 2 }}
        >
          By clicking "Make Payment" you agree to the{" "}
          <Typography component="span" color="primary">
            terms and conditions
          </Typography>
        </Typography>
      </Box>
    </Box>
    </>
  );
};

export default CardPage;
