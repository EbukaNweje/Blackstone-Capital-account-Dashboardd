import React, { useEffect } from 'react';
import './Profile.css';
import { MdOutlinePersonOutline } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Profile = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, 
      once: true,
    });
  }, []);

  return (
    <div className='Profile'>
        <div className="profileHeading">CUSTOMER PROFILE</div>
        <div className='profileWrap'>
          <div className='pAside' data-aos="fade-up">
             <div className="grey">
               <div className="profileUser">
                  <h3>Jun won</h3>
                  <span>012233355</span>
               </div>
             </div>
             <div className="profileDetails">
                <section>
                  <div className='list'><li></li>juwon3997@gmail.com</div>
                  <label>Email:</label>
                  <hr />
                </section>
                <section>
                  <div className='list'><li></li>Savings (USD $)</div>
                  <label>Account Type:</label>
                  <hr />
                </section>
                <section>
                  <div className='list'><li></li>USD $1,938,990.00 </div>
                  <label>Available Balance:</label>
                  <hr />
                </section>
             </div>
          </div>
          <article data-aos="fade-up">
            <div className="profileInfoHeading">
              <MdOutlinePersonOutline size={40} color='#047bf8' />
              <section>
                  <h3>Profile Overview</h3>
                  <span>Below is your Online Banking profile details</span>
              </section>
            </div>   
            <div className="profileInfoMain">
                <section>
                    <ul><li></li> Phone:</ul>
                    <h3>+2333094748</h3>
                </section>
                <section>
                    <ul><li></li> Sex:</ul>
                    <h3>Male</h3>
                </section>
                <section>
                    <ul><li></li> Marital status:</ul>
                    <h3>Single</h3>
                </section>
                <section>
                    <ul><li></li> Date of birth:</ul>
                    <h3>29/03/1990</h3>
                </section>
                <section>
                    <ul><li></li> Address:</ul>
                    <h3>Korean</h3>
                </section>
                <section>
                    <ul><li></li> Active since:</ul>
                    <h3>(09/06/2010)</h3>
                </section>
            </div>
          </article>
        </div>
    </div>
  );
}

export default Profile;
