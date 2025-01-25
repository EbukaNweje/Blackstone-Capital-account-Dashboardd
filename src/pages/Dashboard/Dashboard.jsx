import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import { IoIosMenu, IoMdSettings } from "react-icons/io";
import Sidebar from './Sidebar';
import ScrollToTop from '../ScrollToTop';
import SideBarSub from './SideBarSub/SideBarSub';
import { SlNote } from "react-icons/sl";
import { GoLock } from "react-icons/go";


const Dashboard = () => {
  const [showSideSub, setShowSideSub] = useState(false);
  const [showModal, setShowModal] = useState(false)

  const toggleSideSub = () => setShowSideSub(!showSideSub);
  const nav = useNavigate()
  return (
    <div className='Dashboard'>
      <ScrollToTop />
      <aside><Sidebar /></aside>
      <article>
        <div className="sideMobile">
          <div className="sideMobileHead">
            <span>CBS Federal Bạnking | Online login portal</span>
            <IoIosMenu size={45} cursor={'pointer'} onClick={toggleSideSub} />
          </div>
          <div className={`sideBarSubContainer ${showSideSub ? 'open' : 'close'}`}>
            <SideBarSub onClose={toggleSideSub} />
          </div>
        </div>
        <header>
          <article className='firstHead'>
            <div className="language">
              <select name='' id=''>
                <option disabled selected>Select a language</option>
                <option value="Arabian">Arabian</option>
                <option value="English">English</option>
                <option value="Avar">Avar</option>
              </select>
              <span>Powered by Google Translate</span>
            </div>
            <div className="profileSetings">
              <IoMdSettings color='#d83337' size={40}  onMouseEnter={() => setShowModal(!showModal)} />
            {
              showModal ?   <div className="profileModal" onMouseLeave={() => setShowModal(false)} >
              <button style={{borderBottom: '1px solid #bcb9b944'}} onClick={() => nav('my-profile')}><SlNote className='note'/> my profile</button>
              <button onClick={() => nav('/')}> <GoLock className='lock'/>logout</button>
            </div>: null
            }
            </div>
          </article>
          <div className="secondHeader">
            <marquee behavior="scroll" direction="left">Notice: We are committed to providing a secured and convenient banking experience to all our customers...</marquee>
            <div className="rateDiv">
              <h3>CURRENCY EXCHANGE RATE</h3>
              <marquee className="m2" behavior="scroll" direction="left">GBP/EGP = 63.94235 ▼ GBP/EGP = 63.94235 ▼ GBP/EGP = 63.94235 ▼...</marquee>
            </div>
          </div>
        </header>
        <main><Outlet /></main>
      </article>
    </div>
  );
};

export default Dashboard;
