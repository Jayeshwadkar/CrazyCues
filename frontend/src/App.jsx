import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Membership from '../src/pages/Membership';
import Footer from './component/Footer';
import Pricing from '../src/pages/Pricing';
import Tournaments from './pages/Tournaments';
import HouseCatering from './pages/HouseCatering';
import BookingPage from './pages/BookingPage';
import CardPage from './pages/CardPage';
import CheckoutPage  from './pages/CheckoutPage'
import Gallery from './pages/Gallery'
import PrivacyPolicy from './pages/PrivacyPolicy'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
function App() {
  const initialOptions = {
    //Client for newcrazeycues//
   //clientId: "AdHu8AItMj3DIpqQdUrvsDfQD7K_MJKg24CfH3cgylSbvc4CIuI5RRzg586Piy9X7H1ZZydyoylrS8Hz",
   //
       //Client for crazeycues//
       clientId: "AWATVwD1JjqFBoFISO3GQ56Uhdtupo6CwvgMmFsQSshSqgiuISaQA2Kv7nUe0hSTuT6hQ5_8qkzbg7jb",
       //
   
   //Testing
    //  clientId: "AVTOuoBoCKlZc8n2APQ26qr4Hc8HaPL3iURgxmp__-IEBVexkczGp3SqXzd3s8iQsJTIcC_9WtlKGkr7",
    //
    currency: "USD",
    intent: "capture",
  };

  return (
    <Router>
     <PayPalScriptProvider options={initialOptions}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/housecatering" element={<HouseCatering />} />
        <Route path="/bookingpage" element={<BookingPage />} />
        <Route path="/cardpage" element={<CardPage />} />
        <Route path="/checkoutpage" element={<CheckoutPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />

        
      </Routes>
      </PayPalScriptProvider>
      { location.pathname !== "/cardpage"  && <Footer />}
         </Router>
       
  );
}

export default App;

