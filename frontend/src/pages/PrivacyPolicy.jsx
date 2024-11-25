import React, { useState } from "react";
import './PrivacyPolicy.css'; // Create this CSS file to style the component
import { AppBar, Box, Button, Grid, Toolbar } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu"; // Importing the Menu icon
import logo from "../assets/crazy-cues-logo.png";
import { Link, useNavigate,NavLink } from "react-router-dom";

const PrivacyPolicy = () => {

  const [activeButton, setActiveButton] = useState(" ");
  const [isOpen, setIsOpen] = useState(false);
  // const navigate = useNavigate();



  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };


  
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
    setIsOpen(false); // Close menu after clicking a link
  };

  // const handleNavigate = (route) => {
  //   navigate(route);
  // };

  return (
    <>
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
    <Grid className="privacy-policy-container"  paddingX={'1%'}>
      <h1 className="title">PRIVACY NOTICE</h1>
     
      <p className="intro-text">
        This privacy notice for Play! Crazy-Cues ("<strong>Company</strong>," "<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>"), describes how and why we might collect, store, use, and/or share ("<strong>process</strong>") your information when you use our services ("<strong>Services</strong>"), such as when you:
      </p>
      <ul className="list">
        {/* <li>Download and use our mobile application (Play! Crazy-Cues Community), or any other application of ours that links to this privacy notice</li> */}
        <li>Engage with us in other related ways, including any sales, marketing, or events</li>
      </ul>
      <p className="contact">
        <strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <strong>(201) 604-0033.</strong>
      </p>
      
      <h2 className="section-title">SUMMARY OF KEY POINTS</h2>
      <p className="summary-intro">
        <em>This summary provides key points from our privacy notice, </em>
      </p>

      <div className="section">
        <p><strong style={{ color: '#595959',fontsize: '14px',fontfamily: 'Arial',fontweight: 'bold'}}>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Play! Crazy-Cues and the Services, the choices you make, and the products and features you use. </p>
        <p><strong style={{ color: '#595959',fontsize: '14px',fontfamily: 'Arial',fontweight: 'bold'}}>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</p>
        <p><strong style={{ color: '#595959',fontsize: '14px',fontfamily: 'Arial',fontweight: 'bold'}}>Do we receive any information from third parties?</strong> We do not receive any information from third parties.</p>
        <p><strong style={{ color: '#595959',fontsize: '14px',fontfamily: 'Arial',fontweight: 'bold'}}>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. </p>
        <p><strong style={{ color: '#595959',fontsize: '14px',fontfamily: 'Arial',fontweight: 'bold'}}>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. </p>
        <p><strong style={{ color: '#595959',fontsize: '14px',fontfamily: 'Arial',fontweight: 'bold'}}>How do we keep your information safe?</strong> We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. </p>
        <p><strong style={{ color: '#595959',fontsize: '14px',fontfamily: 'Arial',fontweight: 'bold'}}>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. </p>
        <p><strong style={{ color: '#595959',fontsize: '14px',fontfamily: 'Arial',fontweight: 'bold'}}>How do you exercise your rights?</strong> The easiest way to exercise your rights is by filling out our data subject request form available , or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
      </div>
    </Grid>
    </>
  );
};

export default PrivacyPolicy;
