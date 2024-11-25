import React, { useEffect,useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Box, Grid, Typography, } from "@mui/material";
import { Link, useNavigate,NavLink } from "react-router-dom";
import logo from "../assets/crazy-cues-logo.png";
import bowlingImage from "../assets/bowling-04.jpg";
import bowlingImage2 from "../assets/bowling.jpg";
import decor from "../assets/decor-square.png";
import bowl from "../assets/bowling-19.jpg";
import billerds from "../assets/billerds-.jpg";
import snooker from "../assets/snooker-22.jpg";
import centerimg from "../assets/20190909230334.jpg";
import leftimg from "../assets/11062b_f613a96f44a44ae29467158728088dec~mv2.webp";
import pongImg from "../assets/pong-qrn.jpg";
import ping from "../assets/ping.jpg";
import "./Home.css";
import MenuIcon from "@mui/icons-material/Menu"; // Importing the Menu icon
import tournamentImg from '../assets/poster.jpg'
import CloseIcon from '@mui/icons-material/Close';

// import bowl1 from "../assets/persnickety-prints-PpiSQO21htY-unsplash_r1_c1.jpg"
function Home() {
  const [activeButton, setActiveButton] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [openPopup, setOpenPopup] = useState(true); // State for controlling the popup visibility


  const navigate = useNavigate();

// Scroll to the top when the component is loaded
useEffect(() => {
  window.scrollTo(0, 0); // Scroll to the top
}, []); // Empty dependency array means it runs once when the component mounts

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };



  const handlePopupClose = () => {
    setOpenPopup(false);
    document.body.classList.remove("popup-open"); // Re-enable body scroll
  };

  // Open the popup and lock body scroll when it's active
  useEffect(() => {
    if (openPopup) {
      document.body.classList.add("popup-open"); // Lock body scroll when popup is active
    }
    return () => {
      document.body.classList.remove("popup-open"); // Clean up body scroll lock on unmount
    };
  }, [openPopup]);

  
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
    setIsOpen(false); // Close menu after clicking a link
  };

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <>
{openPopup && (
        <Box className="popup-container" onClick={handlePopupClose}>
          <Box className="popup-image-wrapper" onClick={(e) => e.stopPropagation()}>
            <img src={tournamentImg} alt="Tournament" className="popup-image" />
            <Box className="icon-btn" onClick={handlePopupClose}>
              <CloseIcon />
            </Box>
          </Box>
        </Box>
      )}

     <Box className="container">
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



      <Box className="center-box">
        <Box className="flex-center-relative">
          <Box
            className="box-style"
            style={{ backgroundImage: `url(${bowlingImage})` }}
          >
            <img src={decor} className="decor-img" alt="Decor" />
          </Box>
          <Box
            className="box-style-2"
            style={{ backgroundImage: `url(${bowlingImage2})` }}
          />
        </Box>
        <Box className="box-content">
          <Typography className="typography1-heading">
            BRUNSWICK <br /> Golden Crown VI
          </Typography>
          <Typography className="typography-body" style={{marginBottom:'10%'}} variant="body1" paragraph>
            Experience the ultimate in pool with<br/> the finest tables in the world.
            Elevate<br/> your game with the Professional<br/> grade 9 ft Brunswick Golden
            Crown<br/> VI pool table offering unmatched<br/> playability like a
            Professional player.
          </Typography>
          <Button
            className="button-price-list"
            variant="outlined"
            onClick={() => handleNavigate("/pricing")}
          >
            PRICE LIST
          </Button>
        </Box>
      </Box>





      <Box className="box-center bg-image" style={{ backgroundImage: `url(${bowl})` }}>
        {/* <Grid container spacing={10} className="grid-container no-wrap"> */}
        <Grid container spacing={10} wrap="wrap" sx={{ maxWidth: 1000,  }}>

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
            <Box className="card-container-membership">
              <Box className="inner-box-membership">
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
            <Box className="card-container-event">
              <Box className="inner-box-event">
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
















      <Box className="flex-center-box">
        <Box className="box-margin-padding">
          <Typography className="typography-RASSON">
            RASSON
            <br />
            Billiards & Snooker
          </Typography>
          <Typography className="typography-body" style={{marginBottom:'10%'}} variant="body1" paragraph>
            Playing on a Professional grade 12ft Rasson<br/> Snooker Table is an
            exceptional experience,<br/> making every game memorable. It offers a<br/>
            true snooker experience for both beginners<br/> and seasoned players
            alike.
          </Typography>
          <Button
            className="button-price-list"
            variant="outlined"
            onClick={() => handleNavigate("/pricing")}
          >
            PRICE LIST
          </Button>
        </Box>
        <Box className="flex-direction-box">
          <Box className="box-background" style={{ backgroundImage: `url(${billerds})` }} />
          <Box className="box-snooker" style={{ backgroundImage: `url(${snooker})` }}></Box>
        </Box>
      </Box>

      <Box className="box-bowl1">
      {/* style={{ backgroundImage: `url(${bowl1})` }} */}
        <Box className="container-box">
          <Box className="image-box" style={{ backgroundImage: `url(${leftimg})` }} />
          <Box className="image-box" style={{ backgroundImage: `url(${centerimg})` }} />
          <Box className="image-box" style={{ backgroundImage: `url(${billerds})` }} />
        </Box>
      </Box>

      <Box className="center-box">
        <Box className="flex-center-relative">
          <Box className="box-style" style={{ backgroundImage: `url(${ping})` }}>
            <img src={decor} className="decor-img" alt="Decor" />
          </Box>
          <Box className="box-style-2" style={{ backgroundImage: `url(${pongImg})` }} />
        </Box>
        <Box className="box-content">
          <Typography className="typography1-heading">
            STIGA <br /> Ping Pong
          </Typography>
          <Typography className="typography-body" style={{marginBottom:'10%'}} variant="body1" paragraph>
            Playing ping pong on a STIGA table is<br/> a thrilling experience that
            combines<br/> precision, speed, and fun. Renowned<br/> for its high-quality
            construction and<br/> excellent bounce, a STIGA table<br/> elevates your game.
            Whether you’re<br/> a beginner or a seasoned player,<br/> every match is
            enjoyable and<br/> competitive.
          </Typography>
          <Button
            className="button-price-list"
            variant="outlined"
            onClick={() => handleNavigate("/pricing")}
          >
            PRICE LIST
          </Button>
        </Box>
      </Box>

      <div>
        <Box className="map-container">
          <iframe
            title="Google Map"
            className="map-iframe"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?q=872+Bergen+Ave,+Jersey+City,+NJ+07306,+USA&key=AIzaSyAbznN1wtWEcyCdGUy2TXJJ7qedBugSvG0"
          />
        </Box>
      </div>
    </>
  );
}

export default Home;
