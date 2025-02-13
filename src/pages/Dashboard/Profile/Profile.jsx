import React, { useEffect, useState } from 'react';
import './Profile.css';
import { MdOutlinePersonOutline } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const userId = useSelector((state) => state.blackstone.user); 
  // console.log("User ID:", userId);

  const getOne = async () => {
    // console.log('working,,');
    
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
                  <h3 style={{textTransform: 'capitalize'}}>{userData?.atmCard.cardHolderName || 'User'}</h3>
                  <span>{userData?.accountNumber || 'N/A'}</span>
               </div>
             </div>
             <div className="profileDetails">
                <section>
                  <div className='list'><li></li>{userData?.email || 'user@gmail.com'}</div>
                  <label>Email:</label>
                  <hr />
                </section>
                <section>
                  <div className='list'><li></li>{userData?.accountType || 'N/A'} (USD $)</div>
                  <label>Account Type:</label>
                  <hr />
                </section>
                <section>
                  <div className='list'><li></li>USD ${userData?.accountBalance || '0.00'}</div>
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
                    <h3>{userData?.phoneNumber}</h3>
                </section>
                <section>
                    <ul><li></li> Sex:</ul>
                    <h3>{userData?.gender}</h3>
                </section>
                {/* <section>
                    <ul><li></li> Marital status:</ul>
                    <h3>Single</h3>
                </section> */}
                <section>
                    <ul><li></li> Date of birth:</ul>
                    <h3>{userData?.dateofBirth}</h3>
                </section>
                <section>
                    <ul><li></li> Address:</ul>
                    <h3>{userData?.country}</h3>
                </section>
                <section>
                    <ul><li></li> Active since:</ul>
                    <h3>{userData?.createdAt}</h3>
                </section>
            </div>
          </article>
        </div>
    </div>
  );
}

export default Profile;
