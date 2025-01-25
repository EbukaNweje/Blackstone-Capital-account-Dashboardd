import React, { useEffect } from 'react';
import './CCRedirect.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CCRedirect = () => {
    const date = new Date();
    const options = { 
        weekday: 'short', 
        month: 'short', 
        day: '2-digit', 
        year: 'numeric' 
    };
    const formattedDate = date.toLocaleDateString('en-US', options);


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
                    <input type="text" value='4257 9801 211XX XXXX' disabled/>
                </section>
                <div className="atmInfo">
                    <div className="sec">
                        <label>Ex.Date</label>
                        <input type="number" value='06/22' disabled/>
                    </div>
                    <div className="sec">
                        <label>Csv</label>
                        <input type="number" value='286' disabled/>
                    </div>
                    <div className="sec">
                        <label>Pin</label>
                        <input type="number" value='1906' disabled/>
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
