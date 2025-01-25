import React, { useEffect } from 'react'
import './Box.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Box = () => {
    useEffect(() => {
          AOS.init({
            duration: 3000, 
            once: true,
          });
        }, []);
  return (
    <div className="boxHolder">
    <section data-aos="fade-up">
       <span>BOOK BALANCE</span> 
       <h3>USD $ 1,845,990.00</h3>
    </section>
    <section data-aos="fade-up">
    <span>AVAILABLE BALANCE</span> 
    <h3 style={{color: '#348a2c'}}>USD $ 1,845,990.00</h3>
    </section>
    <section data-aos="fade-up">
    <span>ACCOUNT LOGGED IN FROM:</span> 
    <h3 style={{color: '#348a2c'}}>: 1,845,990.00</h3>
    </section>
</div>
  )
}

export default Box