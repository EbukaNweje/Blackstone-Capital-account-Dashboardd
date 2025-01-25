import React, { useEffect } from 'react'
import './Ticket.css'
import CCRedirect from '../CCRedirect'
import Box from '../box/Box'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LuTicketsPlane } from "react-icons/lu";


const Ticket = () => {
     useEffect(() => {
            AOS.init({
              duration: 3000, 
              once: true,
            });
          }, []);
  return (
    <div className='Ticket'>
       <article>
        <hr />
            <Box/>
            <main>
                <h3>WIRE TRANSFER FORM</h3>
        <div className="Tmain">
          <form data-aos="fade-up">
            <div className="btnHolder">
                <button><LuTicketsPlane/>Open ticket</button>
                <span>Discard</span>
            </div>
            <section>
              <label>To:</label>
              <input type="number" placeholder='Customer care' disabled/>
            </section>
            <section>
              <label>Subject:</label>
              <input type="text" placeholder='Type your subject' />
            </section>
            <section>
              <label>Message:</label>
              <textarea name="" id="" placeholder='Type your compliant'></textarea>
            </section>
            
          </form>
          </div>
            </main>
        </article>
        <aside>
           <CCRedirect/> 
        </aside>  
    </div>
  )
}

export default Ticket