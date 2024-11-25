import React, { useEffect, useState } from "react";
import { Grid, Typography, Box, AppBar, Toolbar, Button, Divider, Modal, TextField, FormControlLabel, Checkbox, IconButton, Dialog, DialogContent, DialogActions, DialogTitle } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/crazy-cues-logo.png";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Tournament from '../assets/image2.jpeg'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VerifiedIcon from "@mui/icons-material/Verified";
import CancelIcon from "@mui/icons-material/Cancel";
// import StarIcon from '@mui/icons-material/Star';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import image1 from '../assets/bowling-18.jpg'; 
// import image2 from '../assets/bowling-17.jpg'; 
// import image3 from '../assets/bowling-19.jpg'; 
// import image4 from '../assets/bowling-04.jpg'; 
// import image5 from '../assets/bowl.jpg'; 
// import image6 from '../assets/ping.jpg'; 
// import image7 from '../assets/snooker-22.jpg'; 
// import image8 from '../assets/snooker-a.jpg'; 
// import image9 from '../assets/bowl.jpg'; 
// import image10 from '../assets/ping.jpg'; 
// import image11 from '../assets/snooker-22.jpg'; 
// import image12 from '../assets/snooker-a.jpg'; 
import './Tournaments.css'
import "./Appbar.css";
import MenuIcon from "@mui/icons-material/Menu"; // Importing the Menu icon
import CloseIcon from '@mui/icons-material/Close';
import tournamentImg from '../assets/poster.jpg'
import ReCAPTCHA from 'react-google-recaptcha';
import useRecaptcha from '../pages/useRecaptcha'; // Adjust path accordingly
import { handleBtnState, InitiatePayment, payPalPayment, sendMail, sendOrderId } from "../../lib/api-payment";
import LoadingSpinner from "../component/ui/LoadingSpinner";
import CustomSnackbar from "../component/ui/SnackbarComponent";
import { PayPalButtons } from "@paypal/react-paypal-js";



function Tournaments() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    p: 4,
  };
  const [openForm, setOpenForm] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const { capchaToken, recaptchaRef, handleRecaptcha } = useRecaptcha();
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [confirmationOpen,setConfirmationOpen] = useState(false);
  const [isColor, setIsColor] = useState('green');
  const [confirmMessage, setConfirmMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [registerBtnState, setRegisterBtnState] = useState(false);
 
  const openPaymentPopup = () => {
    setAgreed(false)
    const paymentUrl = "https://crazycues.securepayments.cardpointe.com/pay?signature=AMKaoEupmZeBarfnBpouNwmzy7Ld4Ezw%2BW7pUWbY%2F7Ex%2Bcv4UWSG0YnhxK1BQ5%2FnhCZnbyxTvFkXne8XIrpBd9&paymentType=cc&signature_fields=total";
    const width = 600;
    const height = 800;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    window.open(
      paymentUrl,
      "PaymentPopup",
      `width=${width},height=${height},top=${top},left=${left},toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes`
    );
  };
  // Scroll to the top when the component is loaded
useEffect(() => {
  window.scrollTo(0, 0); // Scroll to the top

  const fetchData = async()=>{
    setIsLoading(true);
    const response = await handleBtnState();
    if(response.status === 200){
        const btnValue = response.data.btnFlag === 0 ? false : true
        setRegisterBtnState(btnValue);
        setIsLoading(false);
    }
    setIsLoading(false);
  }

  fetchData();
}, []); 
 
 

  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    mobileNo: "",
    cardNumber: "",
    expiryDate: "",
    cvv: ""
  });

  const [formErrors, setFormErrors] = useState({});
  const [orderid, setOrderid] = useState([""]);
  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);
  const [maildata,setMaildata]=useState({
    orderid:'',
    ordermail:''
  })
  const handleOpenTerms = () => {
    // if (!validateForm()) {
    //   console.error("Form validation failed. Cannot proceed with PayPal order creation.");
    //   return Promise.reject("Form validation failed."); // Stop PayPal processing
    // }
    setOpenTerms(true)};
  const handleCloseTerms = () => setOpenTerms(false);
  const [open2, setOpen2] = useState(false);
  const [openfail, setOpenfail] = useState(false);
  const handleClose2 = () => setOpen2(false);
  const handleClosefail = () => setOpenfail(false);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const [activeButton, setActiveButton] = useState("tournaments");

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


const handleClose = ()=>{
  setOpen(false);
}


const handleClose1 = ()=>{
  setOpen1(false);
}







const formatPhoneNumber = (value) => {
  // Remove all non-digit characters
  const cleaned = value.replace(/\D/g, '');

  // Format the phone number based on its length
  let formatted = '';
  if (cleaned.length <= 3) {
    formatted = `(${cleaned}`;
  } else if (cleaned.length <= 6) {
    formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
  } else if (cleaned.length <= 10) {
    formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)} - ${cleaned.slice(6)}`;
  } else {
    formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)} - ${cleaned.slice(6, 10)}`;
  }

  return formatted;
};

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value.length < formData[name]?.length) {
      setFormData({ ...formData, [name]: value });
      return;
    }
    if (name === 'mobileNo') {
      // Remove any non-numeric characters
      const formattedValue = formatPhoneNumber(value);
      //const numericValue = value.replace(/\D/g, ''); // Only keep digits
      setFormData((prev) => ({ ...prev, [name]: formattedValue }));
    } 

    // Format card number as XXXX-XXXX-XXXX-XXXX
    else if (name === "cardNumber") {
      let formattedValue = value.replace(/\D/g, "");
      formattedValue = formattedValue.replace(/(.{4})(?=\d)/g, "$1 ").slice(0, 19);
      setFormData((prev) => ({ ...prev, [name]: formattedValue }));
    }
    // Format expiry date as MM/YY
    else if (name === "expiryDate") {
      let formattedValue = value.replace(/\D/g, ""); // Remove non-numeric characters
    
      // Format the input and handle year (YYYY) and month (MM)
      if (formattedValue.length >= 5) {
        let year = formattedValue.substring(0, 4); // Extract year (first 4 digits)
        let month = formattedValue.substring(4, 6); // Extract month (next 2 digits)
        if (parseInt(month, 10) > 12) {
          month = "12"; // Set to max month if it exceeds 12
        }
        formattedValue = year + "/" + month;
      } else if (formattedValue.length >= 4) {
        formattedValue = formattedValue.substring(0, 4) + "/"; // Add '/' after the year
      }
    
      setFormData((prev) => ({ ...prev, [name]: formattedValue }));
    }
    
    
    // Limit CVV to 3 digits
    else if (name === "cvv") {
      const formattedValue = value.replace(/\D/g, "").slice(0, 3);
      setFormData((prev) => ({ ...prev, [name]: formattedValue }));
    }else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!emailRegex.test(value) && value !== "") {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          email: "Invalid email format.",
        }));
      } else {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          email: "",
        }));
      }
  
      setFormData((prev) => ({ ...prev, [name]: value }));
    } 
    else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };


  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cardNumberRegex = /^\d{4} \d{4} \d{4} \d{4}$/; ;
    const expiryDateRegex = /^\d{4}\/(0[1-9]|1[0-2])$/; 
    const cvvRegex = /^\d{3}$/; 
    if (!formData.clientName) errors.clientName = "Name is required";
    if (!formData.email) {
      errors.email = "Email ID is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Enter a valid Email ID";
    }
    if (!formData.mobileNo) errors.phone = "Enter Phone Number";
    if (!formData.cardNumber) {
      errors.cardNumber = "Card Number is required";
    } else if (!cardNumberRegex.test(formData.cardNumber)) {
      errors.cardNumber = "Enter a valid Card Number (XXXX-XXXX-XXXX-XXXX)";
    }
    if (!formData.expiryDate) {
      errors.expiryDate = "Expiry Date is required";
    } else if (!expiryDateRegex.test(formData.expiryDate)) {
      errors.expiryDate = "Enter a valid Expiry Date (YYYY/MM)";
    }
    if (!formData.cvv) {
      errors.cvv = "CVV is required";
    } else if (!cvvRegex.test(formData.cvv)) {
      errors.cvv = "Enter a valid CVV (3 digits)";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async() => {
    setIsLoading(true);
    if (validateForm()) {
      console.log("formData",formData)
   //   const response =  await InitiatePayment(formData);
      // if(response.data.success === true){
      //   setIsLoading(false);
      //   handleClearForm();
      //   handleCloseForm();
      //   setAgreed(false);
      //   setOpen(true);
      // }else{
      //   setIsLoading(false);
      //   handleClearForm();
      //   handleCloseForm();
      //   setAgreed(false);
      //   setOpen1(true);
      // } 
    }
  };


const handleClearForm = ()=>{
  setFormData({
    clientName: "",
    email: "",
    mobileNo: "",
    cardNumber: "",
    expiryDate: "",
    cvv: ""
  });
}
const createOrder = async () => {
  
  try {
    
      setIsLoading(true)

      const response = await payPalPayment({
        cost: 60
      });
    
      console.log("Response object:", response);
    
      const id = response.data?.jsonResponse?.id;
    
      if (id) {
        console.log("orderId:", id);
        setOrderid(id);
        setIsLoading(false)
        return id;
      } else {
        console.error("Failed to retrieve orderId from the response object.");
        return null;
      }
    
} catch (error) {
  console.error("Error creating order:", error);
  return null; // Return null to indicate failure
} finally {
  setIsLoading(false);
}
};
const fetchAllDataFromLocalStorage = () => {
  return Object.fromEntries(
    Array.from({ length: localStorage.length }, (_, i) => {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      try {
        return [key, JSON.parse(value)];
      } catch {
        return [key, value];
      }
    })
  );
};
const Sendmail =async()=>{
  
  const loaclmaildata = fetchAllDataFromLocalStorage();
//const loaclformdata = fetchFilteredLocalStorageData('formData');

// Log the retrieved data
console.log("Retrieved maildata:", loaclmaildata);

  try {
   
    const res = await sendMail(loaclmaildata);
    console.log(res)
      //     localStorage.removeItem('maildata');
      // localStorage.removeItem('formdata');
  } catch (error) {
    console.error("Error processing PayPal payment:", error);
      //     localStorage.removeItem('maildata');
      // localStorage.removeItem('formdata');
    
  }
}
useEffect(() => {
  localStorage.setItem('formData', JSON.stringify(formData));
}, [formData]);

useEffect(() => {
  localStorage.setItem('mailData', JSON.stringify(maildata));
}, [maildata]);

const onApprove = async (orderId) => {
  try {
    setIsLoading(true)
    const paymedantData = await sendOrderId(orderId);
    console.log("iddddddddddd", paymedantData);
    
    if(paymedantData.data){
      console.log(formData,paymedantData.data.payer.email_address)
      localStorage.setItem('mailData', JSON.stringify({
        orderid: paymedantData.data.id,
        ordermail: paymedantData.data.payer.email_address
      }));
      
      setMaildata({
        orderid:paymedantData.data.id,
        ordermail:paymedantData.data.payer.email_address
      })
    
    }
    console.log(formData,maildata)

    
    if(paymedantData.data.status == "COMPLETED"){
      Sendmail()
      // localStorage.removeItem('maildata');
      // localStorage.removeItem('formdata');
    }
    setOpenForm(false)
   setOpen2(true);
   
   setIsLoading(false)
  
setFormData({
  clientName: "",
  email: "",
  mobileNo: "",
  cardNumber: "",
  expiryDate: "",
  cvv: ""
})
setMaildata({
      orderid:'',
    ordermail:''
})
   console.log(open2)
  } catch (error) {
    console.error("Error processing PayPal payment:", error);
    //handleSubmitpaypalfail();
    setOpenForm(false)
    setOpenfail(true);
  } finally {
    setIsLoading(false);
  }
};
  return (
    <>
    <CustomSnackbar
      open={confirmationOpen}
      message={confirmMessage}
      onClose = {()=> setConfirmationOpen(false)}
      color={isColor}
      />
{isLoading && <LoadingSpinner />}
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
      {/* <Grid container justifyContent="center" alignItems="center" sx={{ mt: 8, textAlign: "center", mb: 5 }}>
        <Grid item xs={12}>
          <Typography variant="h3" color="orange" fontWeight="bold" sx={{ fontFamily: '"fangsong', fontWeight: '800' }}>
            8-Ball Pool TOURNAMENT
          </Typography>
        </Grid>
      </Grid> */}
  <Grid container justifyContent="center" alignItems="center" style={{marginBottom:'30px'}}>
        <Button
        disabled={registerBtnState}
          onClick={handleOpenForm}
          sx={{
            width: '100%',
            maxWidth: '250px',
            backgroundColor: '#18ffff',
            color: '#212121',
            justifyContent: 'center',
            fontFamily: 'Montserrat, sans-serif ',
            fontWeight: 800,
            transition: 'background-color 0.3s ease, color 0.3s ease',
            '&:hover': {
              backgroundColor: '#251153 ',
              color: '#fff ',
            },
            '@media (max-width:600px)': {
              maxWidth: '200px',
            },
           
          }}
          
        >
          Register Now 
        </Button>
      </Grid>

<Box sx={{ width: '100%', mb: 3 }}>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center" sx={{ height: '100%' }}>

    {/* Tournament Information */}
    <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column', height: '100%', lineHeight: '2' }}>
      <Grid container sx={{ flex: 1, flexDirection: 'column', justifyContent: 'center', height: '100%', textAlign: 'center' }}>
        <img 
          src={tournamentImg} 
          alt="Tournament Information" 
          style={{ objectFit: 'cover', width: '100%', height: '100%' }} // Ensure the height is 100% to match
        />
      </Grid>
    </Grid>

    {/* Tournament Image with FAQ Section Below */}
    <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column', height: '20%'}}>
      <Grid container sx={{ flex: 1 }}>
        <img 
          src={Tournament} 
          alt="Tournament" 
          style={{ objectFit: 'cover', width: '100%', height: '100%',marginBottom:'10%'  }} // Ensure the height is 100% to match
        />
    <Grid container rowSpacing={1} columnSpacing={1} justifyContent="center">
  {/* FAQ Content */}
  <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', height: 'auto', marginBottom: '2%' }}>
    <Item sx={{ flex: 1 }}>
      <Typography variant="h3" color="black" fontWeight="bold" sx={{ fontFamily: '"fangsong"', fontSize: { xs: '20px', sm: '22px' }, textAlign: 'center', marginBottom: '2%' }}>
        Frequently Asked Questions
      </Typography>
      <Divider style={{ color: 'black', marginBottom: '2%' }} />

      <Accordion sx={{ border: 'none', marginBottom: "2%" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" style={{ fontFamily: 'fangsong', fontWeight: 'bold',fontSize:'18px',textAlign:'left' }}>
          How Double Elimination Playoff Bracket works?
        </AccordionSummary>
        <AccordionDetails sx={{ textAlign: 'left', fontFamily: '"fangsong"', }}>
          <span style={{ fontSize: '18px', fontWeight: 'bold', fontFamily: '"fangsong"' }}>1. Round 1:</span><br />
         <span style={{color:'#7A7A7A'}}> i. All teams start in the winners bracket.</span><br />
          <span style={{color:'#7A7A7A'}}>ii. A team that wins advances in the winners bracket.</span><br />
          <span style={{color:'#7A7A7A'}}>iii. A team that loses drops into the losers bracket.</span><br />
        </AccordionDetails>

        <AccordionDetails sx={{ textAlign: 'left', fontFamily: '"fangsong"' }}>
          <span style={{ fontSize: '18px', fontWeight: 'bold', fontFamily: '"fangsong"' }}>2. Subsequent Rounds:</span><br />
          <span style={{color:'#7A7A7A'}}>i. Winners continue in the winners bracket.</span><br />
          <span style={{color:'#7A7A7A'}}>ii. Losers drop to the losers bracket, but teams can continue to advance through the losers bracket by winning.</span><br />
        </AccordionDetails>

        <AccordionDetails sx={{ textAlign: 'left', fontFamily: '"fangsong"' }}>
          <span style={{ fontSize: '18px', fontWeight: 'bold', fontFamily: '"fangsong"' }}>3. Losers Bracket:</span><br />
          <span style={{color:'#7A7A7A'}}>i. In the losers bracket, teams play against each other and can keep advancing with wins.</span><br />
          <span style={{color:'#7A7A7A'}}>ii. Once a team loses in the losers bracket, they are eliminated from the tournament.</span><br />
        </AccordionDetails>

        <AccordionDetails sx={{ textAlign: 'left', fontFamily: '"fangsong"' }}>
          <span style={{ fontSize: '18px', fontWeight: 'bold', fontFamily: '"fangsong"' }}>4. Grand Final:</span><br />
          <span style={{color:'#7A7A7A'}}>i. The last team remaining in the winners bracket faces the last team remaining in the losers bracket.</span><br />
          <span style={{color:'#7A7A7A'}}>ii. If the team from the losers bracket wins, they force a final reset, and a second match (or series) is played to determine the ultimate winner.</span><br />
          <span style={{color:'#7A7A7A'}}>iii. If the team from the winners bracket wins, they are crowned the champion.</span><br />
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ border: 'none', marginBottom: "3%" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" style={{ fontFamily: 'fangsong', fontWeight: 'bold', fontSize:'18px'}}>
         What Are The Tournament Rules?
        </AccordionSummary>
        <AccordionDetails sx={{ textAlign: 'left', fontFamily: 'fangsong' }}>
          <Grid sx={{ textAlign: 'left' }}>
            <Typography color="#7A7A7A" fontWeight="bold" sx={{ display: 'inline', color: '#7A7A7A', fontFamily: '"fangsong"', fontWeight: 'bold' }}>
              For Detailed Tournament Rules: &nbsp;
              <a href="https://upatour.com/8-ball-rules/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline', fontSize: '15px' }}>
                Click Here!
              </a>
            </Typography>
            <br />
          </Grid>
        </AccordionDetails>
      </Accordion>


      <Accordion sx={{ border: 'none', marginBottom: "3%" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" style={{ fontFamily: 'fangsong', fontWeight: 'bold', fontSize:'18px'}}>
        What Are FREE Practice Rules!

        </AccordionSummary>
        <AccordionDetails sx={{ textAlign: 'left', fontFamily: '"fangsong"' }}>
          {/* <span style={{ fontSize: '18px', fontWeight: 'bold', fontFamily: '"fangsong"' }}>Free Practice Rules:</span><br /> */}
          <span style={{color:'#7A7A7A'}}>i.Only registered participants are eligible for free practice sessions.</span><br />
          <span style={{color:'#7A7A7A'}}>ii.Practice is available from 9 AM to 11 AM on the day of the tournament.</span><br />
          <span style={{color:'#7A7A7A'}}>iii.Participants may need to share tables with other registered players.</span><br />
          <span style={{color:'#7A7A7A'}}>iv.Tables are available on a first-come, first-served basis.</span><br />
        </AccordionDetails>
      </Accordion>
    </Item>
  </Grid>

  {/* Contact Info */}
  <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', height: 'auto' }}>
    <Item sx={{ flex: 1, backgroundColor: '#0A0743' }}>
      <Grid sx={{ textAlign: 'left', fontFamily: '"fangsong"' }}>
        <Typography component="span" style={{ display: 'inline', color: 'white', textAlign: 'left', fontFamily: '"fangsong', fontWeight: 'bold' }}>
          For any questions or concerns, please contact us at &nbsp;
          <a href="tel:+12016040033" style={{ color: 'white', fontWeight: 'bold' }}>
          <span style={{whitespace: 'nowrap'}}>+1&nbsp;(201) 604-0033</span>

          </a> during business hours or email us at: &nbsp;
        </Typography>
        <Typography component="span" style={{ display: 'inline', textAlign: 'left', fontFamily: '"fangsong', fontWeight: 'bold' }}>
          <a style={{ color: 'white', marginBottom: '4%' }} href="mailto:info@crazycues.com">info@crazycues.com</a>
        </Typography>
      </Grid>
    </Item>
  </Grid>
</Grid>

      </Grid>

  
    </Grid>

  </Grid>
</Box>





      {/* Register Button */}
      <div>
      <Grid container justifyContent="center" alignItems="center" sx={{ mt: 10 }}>
        <Button
          disabled={registerBtnState}
          onClick={handleOpenForm}
          sx={{
            width: '100%',
            maxWidth: '250px',
            backgroundColor: '#18ffff',
            color: '#212121',
            justifyContent: 'center',
            fontFamily: 'Montserrat, sans-serif ',
            fontWeight: 800,
            transition: 'background-color 0.3s ease, color 0.3s ease',
            '&:hover': {
              backgroundColor: '#251153 ',
              color: '#fff ',
            },
            '@media (max-width:600px)': {
              maxWidth: '200px',
            },
          }}
          
        >
          Register Now 
        </Button>
      </Grid>
      <Modal open={openForm} >
        <Box
          sx={{
            backgroundColor: '#edd9f7',
            p: 6,
            width: '40%',
            mx: 'auto',
            mt: '5%',
            borderRadius: '20px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            //alignItems: 'center',
            maxHeight: '80vh',
            '@media (max-width: 600px)': {
              width: '90%',
              mt: '15%',
            },
          }}
        >
          <IconButton onClick={handleCloseForm} sx={{ position: 'absolute', top: 16, right: 16 }}>
            <CloseIcon />
          </IconButton>
           
          <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' }, fontWeight: 'bold',textAlign:'center'
  }}>
          Tournament Registration Fee
          </Typography>


          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: 2, mt: 2 }}>
          
            <TextField
              variant="standard"
             // label="Tournament Registration Fee"
              //name="expiryDate"
              value="$60.00 USD"
            //  onChange={handleInputChange}
              error={!!formErrors.expiryDate}
              helperText={formErrors.expiryDate}
              sx={{ flex: 1,marginTop:'15px' }}
              
            />
            {/* <TextField
              variant="standard"
              label="CVV*"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              error={!!formErrors.cvv}
              helperText={formErrors.cvv}
              sx={{ flex: 1, mb: '6%' }}
            /> */}
          </Box>

          

          <FormControlLabel
          sx={{marginTop:'40px',marginBottom:'20px'}}
            control={
              <Checkbox
                checked={agreed}
                onChange={() => {
                  if (agreed) {
                    setAgreed(false);
                  } else {
                    setAgreed(false);
                    handleOpenTerms();
                  }
                }}
              />
            }
            label={<Typography component="span" color="black">I agree to the Terms and Conditions.</Typography>}
          />

          
           {/* <PayPalButtons



createOrder={(data, actions) => createOrder(data, actions)}

onApprove={(data, actions) => onApprove(data, actions)}

disabled={!agreed}


/> */}
  <Button variant="contained" color="primary" onClick={openPaymentPopup} disabled={!agreed}>
        Pay Now
      </Button>
{/* <form className="paypalform" action="https://www.paypal.com/ncp/payment/54KRPH7ZD2ZH4" method="post" target="_top">
  <input className="pp-54KRPH7ZD2ZH4" type="submit" value="Pay Now" disabled={!agreed} />
  <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
  <section> Powered by <img className="paypalimg" src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal"/></section>
</form> */}

        </Box>
       
      </Modal> 
      
      {/* Terms and Conditions Modal */}
      <Modal open={openTerms} onClose={handleCloseTerms}>
  <Box
    sx={{
      backgroundColor: '#0A0743',
      p: 3,
      width: '30%',
      mx: 'auto',
      mt: '5%',
      borderRadius: 1,
      color: '#fff',
      textAlign: 'center',
      '@media (max-width: 600px)': {
        width: '80%',
        
      },
      maxHeight: '67%', // Set the maximum height for the modal content
      overflowY: 'scroll',  // Enable scrolling if content exceeds the max height
      '&::-webkit-scrollbar': {
        display: 'none', // Hide scrollbar for webkit-based browsers
      },
      msOverflowStyle: 'none',  // For IE and Edge
      scrollbarWidth: 'none',   // For Firefox
    }}
  >
    <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
      Terms and Conditions
    </Typography>
    <Typography variant="body2" sx={{ mt: 2, textAlign: 'left', lineHeight: '1.6rem' }}>
      <ul>
        <li><strong>Eligibility:</strong> Participants must be above 16 years of age, and any other criteria set by Crazy Cues. Proof of identity may be required during registration.</li>
        <li><strong>Registration:</strong> All players must complete the registration process before the specified tournament deadline. Registration fees are non-refundable & non-transferable unless the event is canceled by Crazy Cues.</li>
        <li><strong>Tournament Format:</strong> The format of the tournament (single elimination, double elimination, round-robin, etc.) will be determined by Crazy Cues and will be communicated prior to the start of the event.</li>
        <li><strong>Game Rules:</strong> All games will follow the official rules of billiards as specified by Crazy Cues. Any disputes will be resolved by the appointed referee or Crazy Cues, whose decision is final.</li>
        <li><strong>Code of Conduct:</strong> Players must exhibit good sportsmanship and respect towards other participants, referees, and staff. Any form of unsportsmanlike conduct, including verbal or physical abuse, may result in disqualification.</li>
        <li><strong>Equipment:</strong> Players may use their own cues, but all equipment must conform to the tournament’s guidelines set by Crazy Cues. House cues and equipment will also be available if needed.</li>
        <li><strong>Timeliness:</strong> Players are required to arrive at the venue and be ready to play at their scheduled match times. Failure to appear within a reasonable time may result in forfeiture of the match.</li>
        <li><strong>Prizes:</strong> Prizes will be awarded as stated in the tournament announcement. In the event of a tie, the prize will be split as per the tournament’s rules set by Crazy Cues.</li>
        <li><strong>Liability:</strong> Crazy Cues or any of their staff are not responsible for any personal injury, loss, or damage to property that occurs during the event.</li>
        <li><strong>Alcohol:</strong> Crazy Cues allows BYOB, and players/guests are subject to comply with all local, state and federal laws for BYOB and alcohol consumption on the premise. Crazy Cues Billiards is not responsible for enforcing the laws with BYOB and alcohol consumption on the premise.</li>
        <li><strong>Smoking:</strong> Strictly No Smoking and No Vaping of any kind at the venue.</li>
        <li><strong>Decisions of the Organizers:</strong> All decisions made by Crazy Cues officials regarding the tournament’s operations and rulings are final and non-negotiable.</li>
        <li><strong>Disqualification:</strong> A player may be disqualified for violating the tournament rules, including unsportsmanlike behavior, cheating, or not following referee decisions or Crazy Cues decisions.</li>
        <li><strong>Media and Promotion:</strong> By participating, players consent to the use of their name, image, and likeness by Crazy Cues in any promotional or media coverage related to the tournament.</li>
        <li><strong>Cancellation or Changes:</strong> Crazy Cues reserve the right to modify or cancel the event at any time due to unforeseen circumstances. In the event of cancellation, registration fees will be refunded.</li>
      </ul>
      <p><em>Note:</em> These terms and conditions are subject to adjustment based on the specific event and location.</p>
    </Typography>
    <Button
      onClick={() => {
        setAgreed(true);
        handleCloseTerms();
      }}
      variant="contained"
      color="secondary"
      fullWidth
      sx={{ mt: 2 }}
    >
      I Agree
    </Button>
  </Box>
</Modal>


    </div>

      {/* Payment Info */}
      <Grid container justifyContent="center" sx={{ mt: 2 }}>
        <Typography variant="body1" color="textSecondary" sx={{ textAlign: 'center', color: '#7A7A7A',marginBottom:'2%',fontFamily:'fangsong',fontWeight:'normal' }}>
          {/* Pay $25 now and remaining on the day before tournament starts */}
          {/* The registration charge of $30 at the time of registration and $30 on the day of tournament before the tournament starts.<br/> */}
          Tournament has limited slots for 16 players and the registration will be based on first come first serve basis. Registration will close at 10:00 AM on Dec 8th 2024. 
        </Typography>
      </Grid>

      {/* FAQ Section */}
      {/* <Box sx={{ width: '100%', mb: 3 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center">
         
          <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Item sx={{ flex: 1 }}>
              <Typography variant="h3" color="black" fontWeight="bold" sx={{ fontFamily: '"fangsong', fontWeight: 'bold', fontSize: { xs: '20px', sm: '22px' }, textAlign: 'left', }}>
                Frequently Asked Questions
              </Typography>
              <Divider style={{ color: 'black', marginBottom: '2%' }} />
              

              <Accordion sx={{ border: 'none',marginBottom:"3%" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" style={{fontFamily:'fangsong',fontWeight:'bold' }}>
                  How Double Elimination Playoff Bracket works?
                </AccordionSummary>
                <AccordionDetails sx={{ textAlign: 'left',fontFamily:'fangsong'  }}>
                  <span style={{ fontSize: '18px', fontWeight: 'bold',fontFamily:'fangsong' }}>1. Round 1:</span><br />
                  i. All teams start in the winners bracket.<br />
                  ii.A team that wins advances in the winners bracket.<br />
                  iiiA team that loses drops into the losers bracket.<br />
                </AccordionDetails>

                <AccordionDetails sx={{ textAlign: 'left', fontFamily: '"fangsong' }}>
                  <span style={{ fontSize: '18px', fontWeight: 'bold', fontFamily: '"fangsong' }}>2. Subsequent Rounds:</span><br />
                  i. Winners continue in the winners bracket.<br />
                  ii.Losers drop to the losers bracket, but teams can continue to advance through the losers bracket by winning.<br />
                </AccordionDetails>

                <AccordionDetails sx={{ textAlign: 'left', fontFamily: '"fangsong' }}>
                  <span style={{ fontSize: '18px', fontWeight: 'bold', fontFamily: '"fangsong' }}>3. Losers Bracket:</span><br />
                  i.In the losers bracket, teams play against each other and can keep advancing with wins.<br />
                  ii.Once a team loses in the losers bracket, they are eliminated from the tournament.<br />
                </AccordionDetails>

                <AccordionDetails sx={{ textAlign: 'left', fontFamily: '"fangsong' }}>
                  <span style={{ fontSize: '18px', fontWeight: 'bold' , fontFamily: '"fangsong'}}>4. Grand Final:</span><br />
                  i.The last team remaining in the winners bracket faces the last team remaining in the losers bracket.<br />
                  ii.If the team from the losers bracket wins, they force a final reset, and a second match (or series) is played to determine the ultimate winner.<br />
                  iii.If the team from the winners bracket wins, they are crowned the champion.<br />
                </AccordionDetails>
              </Accordion>

             <Grid style={{justifyItems:'flex-start',alignItems:'left',textAlign:'left'}}>
             <Typography color="black" fontWeight="bold" sx={{  display: 'inline', color: 'black', textAlign: 'left', fontFamily: '"fangsong',fontWeight:'bold' }}>
                For Detailed Tournament Rules:
                <a href="https://upatour.com/8-ball-rules/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline',fontSize:'15px' }}>
                  Click Here!
                </a>
              </Typography> <br />


             </Grid>
             <Grid sx={{ textAlign: 'left', fontFamily: '"fangsong"' }}>
  <Typography component="span" style={{ display: 'inline', color: 'black', textAlign: 'left', fontFamily: '"fangsong', fontWeight: 'bold' }}>
    For any questions or concerns, please contact us at &nbsp; 
    <a href="tel:+12016040033" style={{ color: 'black', fontWeight: 'bold' }}>
      (201) 604-0033
    </a> during business hours or email us at:
  </Typography>
  <Typography component="span" style={{ display: 'inline', textAlign: 'left', fontFamily: '"fangsong', fontWeight: 'bold' }}>
    <a style={{ color: 'black' }} href="mailto:info@crazycues.com">info@crazycues.com</a>
  </Typography>
</Grid>


            </Item>
          </Grid>

     
        </Grid>
      </Box> */}



      <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      sx={{
        '& .MuiDialog-paper': {
          position: 'relative', // To position the close button
        },
      }}
    >
      {/* Close button in the top-right corner */}
      <IconButton
        onClick={handleClose}
        size="small"
        color="inherit"
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
       
        }}
      >
        <CloseIcon  />
      </IconButton>
 
      {/* <DialogTitle sx={{backgroundColor:'White',color:'black',fontSize:'20px',fontFamily:'fongsong',textAlign:'center'}}>Success</DialogTitle> */}
      <DialogContent sx={{backgroundColor:'#ebd7f5',color:'black',fontSize:'20px',fontFamily:'fongsong',textAlign:'center'}}>
      <iframe style={{background:'none',border:'none'}} src="https://lottie.host/embed/adb98961-4ae0-4b23-a6d9-52f249c364b6/hnrTAdjRKy.json"></iframe> <br />
        Your registration has been successfully completed. <br />We're excited to have you with us!
      </DialogContent>
      <DialogActions sx={{backgroundColor:'#ebd7f5',color:'black',fontSize:'20px',fontFamily:'fongsong',textAlign:'center'}}>
        <Button sx={{backgroundColor:'#ebd7f5',color:'black',fontSize:'20px',fontFamily:'fongsong',textAlign:'center'}} onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>







      <Dialog
      open={open1}
     
      fullWidth
      maxWidth="sm"
      sx={{
        '& .MuiDialog-paper': {
          position: 'relative', // To position the close button
        },
      }}
    >
      {/* Close button in the top-right corner */}
      <IconButton
        onClick={handleClose1}
        size="small"
        color="inherit"
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
       
        }}
      >
        <CloseIcon  />
      </IconButton>
 
      {/* <DialogTitle sx={{backgroundColor:'White',color:'black',fontSize:'20px',fontFamily:'fongsong',textAlign:'center'}}>Success</DialogTitle> */}
      <DialogContent sx={{backgroundColor:'#ebd7f5',color:'black',fontSize:'20px',fontFamily:'fongsong',textAlign:'center'}}>
     
      <iframe  style={{background:'none',border:'none'}} src="https://lottie.host/embed/96313660-af0d-4419-930e-cf295637c421/usi3oCQWsG.json"></iframe> <br />
        Your registration has been Failed. <br />Please Try Again!
      </DialogContent>
      <DialogActions sx={{backgroundColor:'#ebd7f5',color:'black',fontSize:'20px',fontFamily:'fongsong',textAlign:'center'}}>
        <Button sx={{backgroundColor:'#ebd7f5',color:'black',fontSize:'20px',fontFamily:'fongsong',textAlign:'center'}} onClick={handleClose1} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>




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
      <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <VerifiedIcon sx={{ color: "green", width: 200, height: 100 }} />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <h3>PayPal Transaction Successful</h3>
            </Typography>
          
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <b>Transaction Id</b> - {orderid}
            </Typography>
          </Box>
        </Modal>
        <Modal
          open={openfail}
          onClose={handleClosefail}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CancelIcon sx={{ color: "red", width: 200, height: 100 }} />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <h3>PayPal Transaction Transaction Fail!!!</h3>
            </Typography>
            
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <b>Transaction Id</b> - {orderid}
            </Typography>
          </Box>
        </Modal>
    </>
  );
}

export default Tournaments;
