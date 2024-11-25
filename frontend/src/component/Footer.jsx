import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MapIcon from "@mui/icons-material/Map";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import './Footer.css';
import { AiFillTikTok } from "react-icons/ai";

function Footer() {
  return (
    <>
      <Box
       className="footer-container"
      >
     <Container className="container-style">

          <Grid container spacing={4}>
            {/* About Section */}
            <Grid item xs={12} md={3} >
      <Typography variant="h6" className="about-section" style={{marginBottom:'5%'}}>
        About
      </Typography>
      <Typography variant="body2" className="body-text" style={{marginBottom:'2%'}}>
        About
      </Typography>
      <Typography variant="body2" className="body-text" style={{marginBottom:'2%'}}>
        Jobs
      </Typography>
      <Typography variant="body2" className="body-text" style={{marginBottom:'2%'}}>
        News
      </Typography>
      <Typography variant="body2" className="body-text" style={{marginBottom:'2%'}}>
        Press Release
      </Typography>
      <Typography variant="body2" className="body-text" style={{marginBottom:'2%'}}>
        Legal
      </Typography>
    </Grid>

            {/* Contact Section */}
            <Grid item xs={12} md={3}>
      <Typography variant="h6" className="contact-heading" style={{marginBottom:'5%'}}>
        Contact
      </Typography>
      <Typography variant="body2" className="contact-info" style={{marginBottom:'2%'}}>
        <MapIcon fontSize="small" className="contact-info-icon" />
        872 Bergen Ave, Jersey City, NJ 07306
      </Typography>
      <Typography variant="body2" className="contact-info" style={{marginBottom:'4%'}}>
  <PhoneEnabledIcon fontSize="small" className="contact-info-icon" />
  <a className="email-link"
    href="tel:+12016040033" 
    style={{ textDecoration: 'none', color: 'inherit', }}
  >
    +1 (201) 604-0033
  </a>
</Typography>

      <Typography variant="body2" className="contact-info" style={{marginBottom:'2%'}}>
        <EmailIcon fontSize="small" className="contact-info-icon" />
        <a
          href="mailto:info@crazycues.com"
          className="email-link"
        >
          info@crazycues.com
        </a>
      </Typography>
    </Grid>

            {/* Follow Us Section */}
            <Grid item xs={12} md={3}>
      <Typography variant="h6" className="follow-us-heading" style={{marginBottom:'5%'}}>
        Follow us
      </Typography>
      <Box className="social-icons">
        {/* Facebook Icon */}
        <Box className="social-icon">
          <a
            href="https://www.facebook.com/crazycues"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon className="facebook-icon" />
          </a>
        </Box>

        {/* Instagram Icon */}
        <Box className="social-icon">
          <a
            href="https://www.instagram.com/crazycues/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="instagram-icon" />
          </a>
        </Box>

        <Box className="social-icon">
  <a
    href="https://www.tiktok.com/@crazycues?_t=8rMmAsY8nz0&_r=1"
    target="_blank"
    rel="noopener noreferrer"
  >
   <AiFillTikTok   style={{ fontSize: '1.6rem' }} />

  </a>
</Box>

       
      </Box>
    </Grid>

            {/* Opening Hours Section */}
            <Grid item xs={12} md={3}>
  <Typography variant="h6" className="opening-hours-heading1" style={{marginBottom:'5%'}}>
    Opening hours
  </Typography>
  <Typography  className="opening-hours-heading1" style={{marginBottom:'1%'}}>
  Business will remain closed on November 28th for Thanksgiving Day.
  </Typography>
  <div className="opening-hours-container1">
    <div className="opening-hours-row1">
      <span>Mon to Thu</span>
      <span>5:00 pm - 02:00 am</span>
    </div>
    <div className="opening-hours-row1">
      <span>Fri to Sat</span>
      <span>2:00 pm - 03:00 am</span>
    </div>
    <div className="opening-hours-row1">
      <span>Sunday</span>
      <span>2:00 pm - 02:00 am</span>
    </div>
  </div>
</Grid>

          </Grid>

          {/* Footer Bottom */}
          <Box className="footer-bottom">
      <Typography variant="body2" className="footer-link" style={{marginBottom:'0.5%'}}>
        <Link href="/" color="inherit" underline="hover">
        Home </Link> 
        |{" "}
        <Link href="/privacypolicy" color="inherit" underline="hover">
          Privacy
        </Link>{" "}
        
      </Typography>
      <Typography variant="body2" className="footer-text">
        © 2024 Crazy Cues Billiards. All rights reserved.
      </Typography>
    </Box>
        </Container>
      </Box>
    </>
  );
}

export default Footer;

