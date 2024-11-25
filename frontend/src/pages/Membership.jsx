import React, { useEffect , useState } from "react";
import logo from "../assets/crazy-cues-logo.png";
import bowlingImage from "../assets/bowling-04.jpg";
import bowlingImage01 from "../assets/bowling.jpg";
import bowlingImage03 from "../assets/11062b_f613a96f44a44ae29467158728088dec~mv2.webp";
import billerds from "../assets/billerds-.jpg";
// import bowl1 from "../assets/persnickety-prints-PpiSQO21htY-unsplash_r1_c1.jpg";
import centerimg from "../assets/20190909230334.jpg";
import leftimg from "../assets/11062b_f613a96f44a44ae29467158728088dec~mv2.webp";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
  DialogTitle,
  IconButton,
  DialogContent,
  Dialog,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./Membership.css";
import "./Appbar.css";
import MenuIcon from "@mui/icons-material/Menu"; // Importing the Menu icon
import CloseIcon from "@mui/icons-material/Close";
// import Crazylogo from '../assets/crazy-cues-logo.png'

const Membership = () => {
  const [activeButton, setActiveButton] = useState("membership");
  const [isOpen, setIsOpen] = useState(false);
// Scroll to the top when the component is loaded
useEffect(() => {
  window.scrollTo(0, 0); // Scroll to the top
}, []); // Empty dependency array means it runs once when the component mounts
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box className="container-pricing">
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar className="toolbar">
            <Box className="flex-center">
              <Box component="img" src={logo} alt="Logo" className="logo" />
            </Box>

            {/* Toggle Button for Small Screens */}
            <Box className="toggle-icon" onClick={handleToggle}>
              <MenuIcon />
            </Box>

            {/* Menu Links */}
            <Box className={`flex-wrap ${isOpen ? "open" : ""}`}>
              <Link to="/" onClick={() => handleClick("home")}>
                <Button
                  className={`button-link ${
                    activeButton === "home" ? "active" : ""
                  }`}
                >
                  Home
                </Button>
              </Link>
              <Link to="/membership" onClick={() => handleClick("membership")}>
                <Button
                  className={`button-link ${
                    activeButton === "membership" ? "active" : ""
                  }`}
                >
                  Membership
                </Button>
              </Link>
              <Link to="/pricing" onClick={() => handleClick("pricing")}>
                <Button
                  className={`button-link ${
                    activeButton === "pricing" ? "active" : ""
                  }`}
                >
                  Pricing
                </Button>
              </Link>
              <Link
                to="/tournaments"
                onClick={() => handleClick("tournaments")}
              >
                <Button
                  className={`button-link ${
                    activeButton === "tournaments" ? "active" : ""
                  }`}
                >
                  Tournaments
                </Button>
              </Link>
              <Link
                to="/housecatering"
                onClick={() => handleClick("housecatering")}
              >
                <Button
                  className={`button-link ${
                    activeButton === "housecatering" ? "active" : ""
                  }`}
                >
                  Food & Drink
                </Button>
              </Link>

              <Link to="/gallery" onClick={() => handleClick("gallery")}>
                <Button
                  className={`button-link ${
                    activeButton === "gallery" ? "active" : ""
                  }`}
                >
                  Gallery
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <Typography variant="h2" className="membership-typography" style={{marginBottom:'3%'}}>
        Become a member at our billiards hall and unlock exclusive benefits
        tailored for enthusiasts like you. Whether you’re a casual player or a
        <br />
        dedicated enthusiast, membership offers the perfect opportunity to
        elevate your game experience with us. Join today and experience pool
        <br /> & billiards like never before!
      </Typography>

      {/* Center the Grid container */}
      <Grid
        container
        spacing={2}
        className="membergrid-container2"
        sx={{
          display: "flex", // Use flexbox to align items
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          width: "100%", // Ensure the grid container uses the full width of the parent
          margin: "0 auto", // Center the container horizontally
          padding: 0,
          marginBottom: "5%", // Remove any unwanted padding
        }}
      >
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className="custom-card">
            <CardMedia
              component="img"
              alt="Weekly Membership"
              height="250"
              image={bowlingImage01}
              className="card-media"
            />
            <CardContent className="card-content">
              <Typography variant="h6" className="custom-typography">
                Weekly
              </Typography>
              <Typography variant="body2" className="custom-body-text">
                $75 per player for one week
              </Typography>
              <Divider sx={{ marginBottom: "20px" }} />
              <Typography variant="body2" className="custom-body-text">
                Playtime: Unlimited play for entire week while table is
                available. (excluding Friday and Saturday from 6 pm onwards)
              </Typography>
              <Divider sx={{ marginBottom: "20px" }} />
              <Typography variant="body2" className="custom-body-text">
                Receive one free soda each day during playtime
              </Typography>
              <Divider sx={{ marginBottom: "20px" }} />
              <Typography variant="body2" className="custom-body-text">
                5% discount on event bookings
              </Typography>
            </CardContent>

            <div>
              <Box className="custom-box">
                <Button
                  className="custom-button"
                  variant="contained"
                  onClick={handleOpen}
                >
                  Buy Now
                </Button>
              </Box>

              <Dialog
  open={open}
  onClose={handleClose}
  PaperProps={{
    style: {
      backgroundColor: '#f4dffe',
      padding: '40px',
      borderRadius: '10px',
      maxWidth: '600px', // Set a max width to avoid overflow
      maxHeight: '60vh', // Set a max height to prevent vertical overflow
      overflow: 'hidden', // Hide any overflow within the dialog itself
    }
  }}
>
  <DialogTitle>
    <IconButton
      edge="end"
      color="inherit"
      onClick={handleClose}
      aria-label="close"
      style={{
        position: 'absolute',
        right: 10,
        top: 10,
        color: 'black',
      }}
    >
      <CloseIcon />
    </IconButton>
  </DialogTitle>
  <DialogContent style={{ color: 'black', textAlign: 'center', overflow: 'hidden', padding: 0 }}>
    <p style={{fontSize:'22px',fontWeight:'bold',marginBottom:'2%',fontFamily:'"Montserrat", Sans-serif'}}>Thank you for your Interest!</p>
    <p style={{fontSize:'18px',fontWeight:'bold',marginBottom:'2%',fontFamily:'"Muli", Sans-serif'}}>We are working on adding this great feature.</p>
    <p style={{fontSize:'18px',fontWeight:'bold',marginBottom:'2%',fontFamily:'"Muli", Sans-serif'}}>Please reach out to us directly by calling </p> <br />
    <a href="tel:2016040033" style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '2%', fontFamily: '"Muli", Sans-serif', textDecoration: 'none', color: 'inherit' }}>
 +1 &nbsp; (201) 604-0033
</a>

  </DialogContent>
</Dialog>

            </div>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className="custom-card">
            <CardMedia
              component="img"
              alt="Weekly Membership"
              height="250"
              image={bowlingImage}
              className="card-media"
            />
            <CardContent className="card-content">
              <Typography variant="h6" className="custom-typography">
                Bi-weekly
              </Typography>
              <Typography variant="body2" className="custom-body-text">
                $125 per player for two weeks
              </Typography>
              <Divider sx={{ marginBottom: "20px" }} />
              <Typography variant="body2" className="custom-body-text">
                Playtime: Unlimited play for two weeks while table is available.
                (excluding Friday and Saturday from 6 pm onwards)
              </Typography>
              <Divider sx={{ marginBottom: "20px" }} />
              <Typography variant="body2" className="custom-body-text">
                Receive one free soda each day during playtime
              </Typography>
              <Divider sx={{ marginBottom: "20px" }} />
              <Typography variant="body2" className="custom-body-text">
                5% discount on event bookings
              </Typography>
            </CardContent>
            <div>
              <Box className="custom-box">
                <Button
                  className="custom-button"
                  variant="contained"
                  onClick={handleOpen}
                >
                  Buy Now
                </Button>
              </Box>

              <Dialog
  open={open}
  onClose={handleClose}
  PaperProps={{
    style: {
      backgroundColor: '#f4dffe',
      padding: '40px',
      borderRadius: '10px',
      maxWidth: '600px', // Set a max width to avoid overflow
      maxHeight: '60vh', // Set a max height to prevent vertical overflow
      overflow: 'hidden', // Hide any overflow within the dialog itself
    }
  }}
>
  <DialogTitle>
    <IconButton
      edge="end"
      color="inherit"
      onClick={handleClose}
      aria-label="close"
      style={{
        position: 'absolute',
        right: 10,
        top: 10,
        color: 'black',
      }}
    >
      <CloseIcon />
    </IconButton>
  </DialogTitle>
  <DialogContent style={{ color: 'black', textAlign: 'center', overflow: 'hidden', padding: 0 }}>
    <p style={{fontSize:'22px',fontWeight:'bold',marginBottom:'2%',fontFamily:'"Montserrat", Sans-serif'}}>Thank you for your Interest!</p>
    <p style={{fontSize:'18px',fontWeight:'bold',marginBottom:'2%',fontFamily:'"Muli", Sans-serif'}}>We are working on adding this great feature.</p>
    <p style={{fontSize:'18px',fontWeight:'bold',marginBottom:'2%',fontFamily:'"Muli", Sans-serif'}}>Please reach out to us directly by calling </p> <br />
    <a href="tel:2016040033" style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '2%', fontFamily: '"Muli", Sans-serif', textDecoration: 'none', color: 'inherit' }}>
    +1 &nbsp; (201) 604-0033
</a>

  </DialogContent>
</Dialog>

            </div>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className="custom-card">
            <CardMedia
              component="img"
              alt="Weekly Membership"
              height="250"
              image={bowlingImage03}
              className="card-media"
            />
            <CardContent className="card-content">
              <Typography variant="h6" className="custom-typography">
                Monthly
              </Typography>
              <Typography variant="body2" className="custom-body-text">
                $200 per player for one month
              </Typography>
              <Divider sx={{ marginBottom: "20px" }} />
              <Typography variant="body2" className="custom-body-text">
                Playtime: Unlimited play for entire month while table is
                available. (excluding Friday and Saturday from 6 pm onwards)
              </Typography>
              <Divider sx={{ marginBottom: "20px" }} />
              <Typography variant="body2" className="custom-body-text">
                Receive one free soda each day during playtime
              </Typography>
              <Divider sx={{ marginBottom: "20px" }} />
              <Typography variant="body2" className="custom-body-text">
                10% discount on event bookings
              </Typography>
            </CardContent>
            <div>
              <Box className="custom-box">
                <Button
                  className="custom-button"
                  variant="contained"
                  onClick={handleOpen}
                >
                  Buy Now
                </Button>
              </Box>

              <Dialog
  open={open}
  onClose={handleClose}
  PaperProps={{
    style: {
      backgroundColor: '#f4dffe',
      padding: '40px',
      borderRadius: '10px',
      maxWidth: '600px', // Set a max width to avoid overflow
      maxHeight: '60vh', // Set a max height to prevent vertical overflow
      overflow: 'hidden', // Hide any overflow within the dialog itself
    }
  }}
>
  <DialogTitle>
    <IconButton
      edge="end"
      color="inherit"
      onClick={handleClose}
      aria-label="close"
      style={{
        position: 'absolute',
        right: 10,
        top: 10,
        color: 'black',
      }}
    >
      <CloseIcon />
    </IconButton>
  </DialogTitle>
  <DialogContent style={{ color: 'black', textAlign: 'center', overflow: 'hidden', padding: 0 }}>
    <p style={{fontSize:'22px',fontWeight:'bold',marginBottom:'2%',fontFamily:'"Montserrat", Sans-serif'}}>Thank you for your Interest!</p>
    <p style={{fontSize:'18px',fontWeight:'bold',marginBottom:'2%',fontFamily:'"Muli", Sans-serif'}}>We are working on adding this great feature.</p>
    <p style={{fontSize:'18px',fontWeight:'bold',marginBottom:'2%',fontFamily:'"Muli", Sans-serif'}}>Please reach out to us directly by calling </p> <br />
    <a href="tel:2016040033" style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '2%', fontFamily: '"Muli", Sans-serif', textDecoration: 'none', color: 'inherit' }}>
    <span style={{whitespace: 'nowrap'}}>+1&nbsp;(201) 604-0033</span>
</a>

  </DialogContent>
</Dialog>

            </div>
          </Card>
        </Grid>
      </Grid>

      {/* <Box className="bowl1-box">
        {/* sx={{
          backgroundImage: `url(${bowl1})`,
        }} 

        <Box className="image-container">
          <Box
            className="image-box"
            sx={{
              backgroundImage: `url(${leftimg})`,
            }}
          />

          {/* Center image 
          <Box
            className="image-box"
            sx={{
              backgroundImage: `url(${centerimg})`,
            }}
          />

          {/* Right image
          <Box
            className="image-box"
            sx={{
              backgroundImage: `url(${billerds})`,
            }}
          />
        </Box>
      </Box> */}
      <Box className="box-bowl1">
      {/* style={{ backgroundImage: `url(${bowl1})` }} */}
        <Box className="container-box">
          <Box className="image-box" style={{ backgroundImage: `url(${leftimg})` }} />
          <Box className="image-box" style={{ backgroundImage: `url(${centerimg})` }} />
          <Box className="image-box" style={{ backgroundImage: `url(${billerds})` }} />
        </Box>
      </Box>

      {/* Google Map Embed */}
      <Box className="map-container">
        <iframe
          title="Google Map"
          className="map-iframe"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?q=872+Bergen+Ave,+Jersey+City,+NJ+07306,+USA&key=AIzaSyAbznN1wtWEcyCdGUy2TXJJ7qedBugSvG0"
        />
      </Box>
    </>
  );
};

export default Membership;
