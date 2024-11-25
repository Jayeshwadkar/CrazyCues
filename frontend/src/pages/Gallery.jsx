import React, { useState, useEffect } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './Gallery.css'; // Import custom CSS for animations

import galleryImg1 from '../assets/galleryImg1.jpg';
import galleryImg2 from '../assets/galleryImg2.jpg';
import galleryImg4 from '../assets/galleryImg4.jpg';
import galleryImg5 from '../assets/galleryImg5.jpg';
import galleryImg6 from '../assets/galleryImg6.jpg';
import galleryImg7 from '../assets/galleryImg7.jpg';
import galleryImg8 from '../assets/galleryImg8.jpg';
import galleryImg9 from '../assets/galleryImg9.jpg';
import galleryImg10 from '../assets/galleryImg10.jpg';
import galleryImg11 from '../assets/galleryImg11.jpg';
import galleryImg12 from '../assets/galleryImg12.jpg';
import galleryImg13 from '../assets/galleryImg13.jpg';
import galleryImg14 from '../assets/galleryImg14.jpg';
import galleryImg15 from '../assets/galleryImg15.jpg';
import galleryImg16 from '../assets/galleryImg16.jpg';
import galleryImg17 from '../assets/galleryImg17.jpg';

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/crazy-cues-logo.png";
import MenuIcon from '@mui/icons-material/Menu';


const PhotoGallery = () => {

  const [activeButton, setActiveButton] = useState("gallery");
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };



 
  const newImages = [
    galleryImg1, galleryImg2, galleryImg4,
    galleryImg5, galleryImg6, galleryImg7, galleryImg8,
    galleryImg9, galleryImg10, galleryImg11, galleryImg12,
    galleryImg13, galleryImg14, galleryImg15, galleryImg16,
    galleryImg17
  ];

  useEffect(() => {
    const formattedImages = newImages.map((url) => ({
      src: url,
      width: 600,
      height: 400,
      alt: 'Gallery Image',
    }));
    setImages(formattedImages);
  }, []);

 

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>

      <Box className="container-gallery">
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



    <div className="gallery-container">
      <div className="image-row">
        {images.map((image, index) => (
          <div className="gallery-item" key={index} >
            <img
              className="gallery-image"
              src={image.src}
              alt={image.alt}
              onLoad={(e) => e.target.classList.add('loaded')}
            />
            {/* <div className="tooltip">Click to view in full size</div> */}
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          mainSrc={images[currentImage].src}
          nextSrc={images[(currentImage + 1) % images.length].src}
          prevSrc={images[(currentImage - 1 + images.length) % images.length].src}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={prevImage}
          onMoveNextRequest={nextImage}
        />
      )}
    </div>
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
};

export default PhotoGallery;
