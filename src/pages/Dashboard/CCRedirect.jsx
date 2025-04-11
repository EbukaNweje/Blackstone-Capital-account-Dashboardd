import React, { useEffect, useState } from 'react';
import './CCRedirect.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSelector } from 'react-redux';
import axios from 'axios';

const CCRedirect = () => {
    const date = new Date();
    const options = { 
        weekday: 'short', 
        month: 'short', 
        day: '2-digit', 
        year: 'numeric' 
    };
    const formattedDate = date.toLocaleDateString('en-US', options);

    const [userData, setUserData] = useState(null);
    const userId = useSelector((state) => state.blackstone.user); 
    // console.log("User ID:", userId);
  

    const getOne = async () => {    
        try {
          const response = await axios.get(`https://blackstonecapital-bank-end.vercel.app/api/userdata/${userId}`);
          setUserData(response.data.data);
          console.log("getone",response.data.data);
          
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
    
      useEffect(() => {
        if (userId) getOne();
      }, [userId]);


    useEffect(() => {
            AOS.init({
              duration: 2000, 
              once: true,
            });
          }, []);
    return (
        <div className='CCRedirect'>
            <h3 className='tks' data-aos="fade-left">QUICK VIEW </h3>
            <div className="date" data-aos="fade-left">{formattedDate}</div>
            <div className="atmCardDetails" data-aos="fade-left">
                <h3>ATM Card Details</h3>
                <section>
                    <label>Card Number</label>
                    <input type="text" value={userData?.atmCard.cardNumber || 'XXXX XXXX XXXX XXXX'} disabled/>
                </section>
                <div className="atmInfo">
                    <div className="sec">
                        <label>Ex.Date</label>
                        <input type="number" value={userData?.atmCard.cardExpDate || 'N/A'} disabled/>
                    </div>
                    <div className="sec">
                        <label>Csv</label>
                        <input type="number" value={userData?.atmCard.cardCvvNumber || 'N/A'} disabled/>
                    </div>
                    <div className="sec">
                        <label>Pin</label>
                        <input type="number" value={userData?.atmCard.cardPinNumber || 'N/A'} disabled/>
                    </div>
                </div>
            </div>
            <div className="infoBox">
                <h3 className='tks' data-aos="fade-left">Tips</h3>
                <div className="h" data-aos="fade-left">
                    <div className='online'>
                        <h3>ONLINE</h3>
                    </div>

                    <div className='processing'>
                        <h3>Your Transfer is Processing!</h3>
                        <span>Do you have issues regarding Transfer? Feel free to contact Customer care</span>
                        <button>Contact Customer Care</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CCRedirect;
