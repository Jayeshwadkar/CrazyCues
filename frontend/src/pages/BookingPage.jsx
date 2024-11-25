import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import MainImage from "../assets/bowling-18.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Grid from "@mui/material/Grid";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

import { NavLink } from "react-router-dom";


const BookingPage = () => {
  const steps = ["Select Date & Slot", "Payment Checkout", "Done"];

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        {/* Left Section for Image */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <img
            src={MainImage}
            alt="Snooker"
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />
        </Grid>

        {/* Details Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Snooker
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginBottom: "10px" }}
          >
            872 Bergen Ave
          </Typography>
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
          >
            <LocationOnIcon /> 872 Bergen Ave, Jersey City, NJ 07306, USA
          </Typography>
          <div>
      <Button
        variant="outlined"
        sx={{
          marginBottom: '20px',
          color: 'black',
          fontWeight: 'bold',
          fontSize: '14px',
          borderColor: 'black',
          '&:hover': {
            backgroundColor: 'black',
            color: 'white',
          },
        }}
        onClick={handleClickOpen}
      >
        <LocationOnIcon /> Show in Map
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Location on Map</DialogTitle>
        <DialogContent>
          <iframe
            width="100%"
            height="400"
            src="https://www.google.com/maps/embed/v1/place?q=872+Bergen+Ave,+Jersey+City,+NJ+07306,+USA&key=AIzaSyAbznN1wtWEcyCdGUy2TXJJ7qedBugSvG0"
            allowFullScreen
            title="Location Map"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker sx={{ color: "black" }} label="Select Your date" />
            </DemoContainer>
          </LocalizationProvider>

          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <Typography variant="subtitle1" sx={{ marginBottom: "10px" }}>
              Time:
            </Typography>
          
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton>
                <RemoveIcon sx={{ color: "#fff", backgroundColor: "black" }} />
              </IconButton>
              <Typography variant="subtitle1">00 minutes</Typography>
              <IconButton>
                <AddIcon sx={{ color: "#fff", backgroundColor: "black" }} />
              </IconButton>
            </Box>
        </Grid>

        {/* Right Section for Time Slot Selection */}
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            borderLeft: { md: "1px solid #e0e0e0" },
            paddingLeft: { md: "20px" },
          }}
        >
           

          <Typography
            variant="h6"
            sx={{
              marginBottom: "10px",
              color: "black",
              fontWeight: "800",
              fontSize: "16px",
            }}
          >
            Select Time Slot :
          </Typography>
         
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {[
              "01:00 PM",
              "02:00 PM",
              "03:00 PM",
              "04:00 PM",
              "05:00 PM",
              "06:00 PM",
              "07:00 PM",
              "08:00 PM",
              "09:00 PM",
              "10:00 PM",
              "11:00 PM",
            ].map((time) => (
              <Button
                key={time}
                variant="outlined"
                sx={{
                  width: "80px",
                  padding: "8px 0",
                  color: "black",
                  fontWeight: "900",
                  borderColor: "black",
                  "&:hover": { backgroundColor: "black", color: "white" },
                }}
              >
                {time}
              </Button>
            ))}
          </Box>
          <Grid>
          <NavLink to="/checkoutpage" style={{ textDecoration: 'none', color: 'inherit' }}>
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
              Select Time Slot
            </Button>
            </NavLink>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookingPage;
