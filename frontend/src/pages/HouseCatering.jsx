
import React, { useState } from "react";
import logo from "../assets/crazy-cues-logo.png";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Toolbar,
  Typography,
  Grid

} from "@mui/material";
import { Link } from "react-router-dom";
import centerimg from "../assets/20190909230334.jpg";
import leftimg from "../assets/11062b_f613a96f44a44ae29467158728088dec~mv2.webp";
import billerds from "../assets/billerds-.jpg";
import "./Appbar.css";
import './HouseCatering.css';
import MenuIcon from "@mui/icons-material/Menu"; // Importing the Menu icon



const menuData = {
  Food: [
    { name: "Cheese Pizza (10 in.)", price: "$9.99" },
    { name: "Fries", price: "$3.99" },
    { name: "Chicken Tenders (5 pcs.)", price: "$8.99" },
    { name: "Mozzarella Sticks (5 pcs.)", price: "$6.99" },
  ],
  Snacks: [
    { name: "Lays", price: "$1.50" },
    { name: "Pringles", price: "$2.00" },
    { name: "Cheetos", price: "$1.50" },
    { name: "Doritos", price: "$1.50" },
    { name: "Takis", price: "$1.50" },
  ],
  Coffee: [
    { name: "Original", price: "$2.50" },
    { name: "Hazelnut", price: "$3.00" },
    { name: "French Vanilla", price: "$3.00" },
  ],
  
  Beverages: [
    { name: "Soda", price: "$1.75" },
    { name: "Red Bull (Regular)", price: "$3.50" },
    { name: "Red Bull (Zero)", price: "$3.50" },
    { name: "Gatorade", price: "$2.50" },
    { name: "Iced Tea", price: "$1.75" },
    { name: "Poland Spring", price: "$1.50" },
    { name: "Evian", price: "$3.50" },
    { name: "Smart Water", price: "$3.00" },
    { name: "Orange Juice", price: "$3.00" },
  ],
  Desserts: [
    { name: "Ice-Cream (cups)", price: "$2.00" },
    { name: "Kit Kat", price: "$2.00" },
    { name: "Snickers", price: "$2.00" },
  ],
 
};



const HouseCatering = () => {

    const [activeButton, setActiveButton] = useState("housecatering");
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (buttonName) => {
      setActiveButton(buttonName);
    };

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

    const renderMenuItems = (items) =>
      items.map((item, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: "18px" }}>{item.name}</Typography>
          <Box sx={{ flexGrow: 1, mx: 2 }}>
            <Divider />
          </Box>
          <Typography color="black">{item.price}</Typography>
        </Box>
      ));
  return (
    <>
  <Grid sx={{backgroundColor:'#ebd7f5'}}>
  <Box className="container-food" >
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
    
    <Box sx={{marginBottom:'5%',backgroundColor:'#ebd7f5'}} >
<Typography variant="h2" sx={{   textAlign:'center',marginTop:'5%',fontWeight:'900', fontSize:'55px', fontFamily:'Montserrat, Sans-serif',marginBottom:'3%'}}>
Best food in town
</Typography>
<Typography variant="body1" sx={{ textAlign: 'center' , padding:'0px 20px 0px 0px',fontFamily:'Muli', fontSize:'18px', margin:'0px 0px 18px',color:'#212121',}}>
  With pretty stories for which there’s little good evidence across the centuries<br/> made in the interiors of collapsing stars.
</Typography>
</Box>


<Grid container spacing={8} justifyContent="center" paddingX={'12%'} > 
        {/* Left Column */}
        <Grid item xs={12} md={5}>
          <Typography variant="h4" sx={{ fontFamily: "Montserrat, Sans-serif", fontSize: "26px", fontWeight: 800, textAlign: "left", marginBottom: "5%" }}>
            Food
          </Typography>
          <Box sx={{ mb: "20%" }}>{renderMenuItems(menuData.Food)}</Box>

          <Typography variant="h4" sx={{ fontFamily: "Montserrat, Sans-serif", fontSize: "26px", fontWeight: 800, textAlign: "left", marginBottom: "5%" }}>
            Snacks
          </Typography>
          <Box sx={{ mb: "20%" }}>{renderMenuItems(menuData.Snacks)}</Box>

          <Typography variant="h4" sx={{ fontFamily: "Montserrat, Sans-serif", fontSize: "26px", fontWeight: 800, textAlign: "left", marginBottom: "5%" }}>
            Coffee
          </Typography>
          <Box sx={{ mb: "20%" }}>{renderMenuItems(menuData.Coffee)}</Box>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={5}>
          <Typography variant="h4" sx={{ fontFamily: "Montserrat, Sans-serif", fontSize: "26px", fontWeight: 800, textAlign: "left", marginBottom: "5%" }}>
            Beverages
          </Typography>
          <Box sx={{ mb: "20%" }}>{renderMenuItems(menuData.Beverages)}</Box>

          <Typography variant="h4" sx={{ fontFamily: "Montserrat, Sans-serif", fontSize: "26px", fontWeight: 800, textAlign: "left", marginBottom: "5%" }}>
            Desserts
          </Typography>
          <Box sx={{ mb: "20%" }}>{renderMenuItems(menuData.Desserts)}</Box>
        </Grid>
      </Grid>
<Box>
<Typography variant="body1" sx={{textAlign:'center' , marginBottom:'2%', fontWeight:'bold'}}>
All prices are excluding taxes 

  </Typography>
</Box>
    
<Box className="box-bowl4" >
      {/* style={{ backgroundImage: `url(${bowl1})` }} */}
        <Box className="container4-box">
          <Box className="image4-box" style={{ backgroundImage: `url(${leftimg})` }} />
          <Box className="image4-box" style={{ backgroundImage: `url(${centerimg})` }} />
          <Box className="image4-box" style={{ backgroundImage: `url(${billerds})` }} />
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
  </Grid>
    </>
  
  );
};

export default HouseCatering;