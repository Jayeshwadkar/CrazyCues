import axios from 'axios';
import { PAYMENT_BASE_PATH,Paypal_BASE_PATH } from './api-base-paths';

export const InitiatePayment = (data) => {
  return axios.post(`${PAYMENT_BASE_PATH}/makePayment`,data);
};

export const payPalPayment = (data) => {
  console.log("data",data)
    try {
      return axios.post(`${Paypal_BASE_PATH}/paypalPayment`,data);
    } catch (error) {
      console.error('Error fetching :', error);
      throw error;
    }
  };


  export const sendOrderId = (data) => {
   
    try {
      return axios.post(`${Paypal_BASE_PATH}/sendOrderId`,data);
    } catch (error) {
      console.error('Error fetching :', error);
      throw error;
    }
  };
export const sendMail = (data) => {
  console.log('lllllllllllllllllll',data);
  try {
    return axios.post(`${Paypal_BASE_PATH}/mail`,data);
  } catch (error) {
    console.error('Error fetching :', error);
    throw error;
    }
  };



export const handleBtnState = () => {
    try {
      return axios.get(`${Paypal_BASE_PATH}/btnState`);
    } catch (error) {
      console.error('Error fetching btn State:', error);
      throw error;
    }
  };