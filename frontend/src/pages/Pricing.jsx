import React, {useEffect , useState } from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import bowl from '../assets/bowling-19.jpg';
// import snookerBackground from '../../assets/snooker-a.jpg';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logo from '../assets/crazy-cues-logo.png';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Pricing.css'
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu"; // Importing the Menu icon
const Pricing = () => {
  const [activeButton, setActiveButton] = useState('pricing');  // Track active button
  const [isOpen, setIsOpen] = useState(false);
 // Scroll to the top when the component is loaded
 useEffect(() => {
  window.scrollTo(0, 0); // Scroll to the top
}, []); // Empty dependency array means it runs once when the component mounts

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);  // Set active button on click
  };
  const handleToggle = () => {
    setIsOpen(!isOpen);
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
                <Button className={`button-link ${activeButton === "home" ? "active" : ""}`}>
                  Home
                </Button>
              </Link>
              <Link to="/membership" onClick={() => handleClick("membership")}>
                <Button className={`button-link ${activeButton === "membership" ? "active" : ""}`}>
                  Membership
                </Button>
              </Link>
              <Link to="/pricing" onClick={() => handleClick("pricing")}>
                <Button className={`button-link ${activeButton === "pricing" ? "active" : ""}`}>
                  Pricing
                </Button>
              </Link>
              <Link to="/tournaments" onClick={() => handleClick("tournaments")}>
                <Button className={`button-link ${activeButton === "tournaments" ? "active" : ""}`}>
                  Tournaments
                </Button>
              </Link>
              <Link to="/housecatering" onClick={() => handleClick("housecatering")}>
                <Button className={`button-link ${activeButton === "housecatering" ? "active" : ""}`}>
                Food & Drink
                </Button>
              </Link>


              <Link to="/gallery" onClick={() => handleClick("gallery")}>
                <Button className={`button-link ${activeButton === "gallery" ? "active" : ""}`}>
                Gallery
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>




<Typography
  variant="h2"
 className="membership-discription"
>
We offer the best rates in town along with an exceptional playing experience.
 Enjoy top-quality equipment and facilities that ensure every game is memorable,<br/>
 all at unbeatable prices. Discover great value without compromising on quality.
 </Typography>

 <h2 style={{fontFamily:'"Montserrat", Sans-serif',textAlign:'center',color:'red'}}>Business will remain closed on November 28th for Thanksgiving Day.</h2>
<div className="div1-container">

        <div className="div2-container">
        <div className="left-section">
       
  <h2 style={{fontFamily:'"Montserrat", Sans-serif'}}>Pool/Ping-Pong</h2>
  <div className="price-info">
    <p>(Monday - Thursday)</p>
    <p className="price-details">
      $10 per hour per person for the first 2 persons, and $5 per hour for each additional person on the same table.
    </p>
  </div>
  <div className="price-info">
    <p>(Friday - Sunday)</p>
    <p className="price-details">
      $12 per hour per person for the first 2 persons, and $6 per hour for each additional person on the same table.
    </p>
  </div>

  {/* Billiards/Snooker */}
  <h2 style={{fontFamily:'"Montserrat", Sans-serif'}}>Billiards/Snooker</h2>
  <div className="price-info">
    <p>(Monday - Thursday)</p>
    <p className="price-details">
      $16 per hour per person for the first 2 persons, and $8 per hour for each additional person on the same table.
    </p>
  </div>
  <div className="price-info">
    <p>(Friday - Sunday)</p>
    <p className="price-details">
      $20 per hour per person for the first 2 persons, and $10 per hour for each additional person on the same table.
    </p>
  </div>
</div>

          {/* Right Section */}
          <div className="right-section">
  <h2>Opening Hours</h2>

  <Box className="opening-hours-divider">
    <Divider className="divider" />
    <StarIcon className="star-icon" />
    <Divider className="divider" />
  </Box>

  <div className="opening-hours-list">
    <p>Monday : 5:00 pm to 2:00 am</p>
    <p>Tuesday : 5:00 pm to 2:00 am</p>
    <p>Wednesday : 5:00 pm to 2:00 am</p>
    <p>Thursday : 5:00 pm to 2:00 am</p>
    <p>Friday : 2:00 pm to 3:00 am</p>
    <p>Saturday : 2:00 pm to 3:00 am</p>
    <p>Sunday : 2:00 pm to 2:00 am</p>
  </div>
</div>

        </div>
      </div>




      <Box className="box-center bg-image" style={{ backgroundImage: `url(${bowl})` }}>
        {/* <Grid container spacing={10} className="grid-container no-wrap"> */}
        <Grid container spacing={10} wrap="wrap" sx={{ maxWidth: 1000 }}>

        <Grid item xs={12} md={4}>
       
            <Box className="card-container">
              <Box className="inner-box">
              <NavLink to="/pricing" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="h6" fontWeight="bold">
                  Book a Table
                </Typography>
                </NavLink>
              </Box>
            </Box>
          
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className="card-container-event">
              <Box className="inner-box-event">
              <NavLink to="/tournaments" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="h6" fontWeight="bold">
                  {/* Book an Event */}

                  Register for Tournament
                </Typography>
                </NavLink>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Box className="card-container-membership">
              <Box className="inner-box-membership">
              <NavLink to= "/membership" style={{ textDecoration: 'none', color: 'inherit' }}  >
                <Typography variant="h6" fontWeight="bold">
                  Become a Member
                </Typography>
                </NavLink>
              </Box>
            </Box>
          </Grid>
          
        </Grid>
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

export default Pricing;
