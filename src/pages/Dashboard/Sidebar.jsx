import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { TbTableDashed,TbTransferIn, TbTransfer } from "react-icons/tb";
import { RiArrowDropDownLine,RiArrowRightSLine  } from "react-icons/ri";
import { FaRegUserCircle, FaMailBulk  } from "react-icons/fa";
import { GiStabbedNote } from "react-icons/gi";
import { LuTicketsPlane } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const [hovered, setHovered] = useState(null);
  const [userData, setUserData] = useState(null);
  const userId = useSelector((state) => state.blackstone.user); 
  // console.log("User ID:", userId);

  const handleMouseEnter = (index) => setHovered(index);
  const handleMouseLeave = () => setHovered(null);

  const getOne = async () => {
    // console.log('working,,');
    
    try {
      const response = await axios.get(`https://blackstonecapital-bank-end.vercel.app/api/userdata/${userId}`);
      setUserData(response.data.data);
      // console.log("getone",response.data.data);
      
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    if (userId) getOne();
  }, [userId]);

  return (
    <div className='Sidebar'>
      <div className="sideBarHeader">
        <div className="first">
        <img src="https://blackstonecapital-nu.vercel.app/used/logo.png" alt="Logo" />        </div>
        <div className="second">
          icon
          <span>Boshville Federal Banking </span>
            <p>Online Account portal</p>
        </div>
      </div>
      <div className="acctInfo">
        <div className="profile"></div>
        <section>
          <span>{userData?.atmCard.cardHolderName || 'User'}</span>
          <h3>Account No:</h3>
          <p>{userData?.accountNumber || 'N/A'}</p>
        </section>
      </div>
      <div className="status">
        <p>Account status: <span>{userData?.status ? 'Active' : 'Inactive'}</span></p>
      </div>
      <main>
        <section>
          <h4>PERSONAL MENU</h4>
          <button>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <TbTableDashed size="27px" />
            Dashboard
            {hovered === 1 ? (
              <RiArrowRightSLine size="24px" />
            ) : (
              <RiArrowDropDownLine size="24px" />
            )}
          </NavLink>
              </button>
          <button>
          <NavLink
            to="my-profile"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
          <FaRegUserCircle size={'27px'}/>
            my profile
            {hovered === 2 ? (
              <RiArrowRightSLine size="24px" />
            ) : (
              <RiArrowDropDownLine size="24px" />
            )}
          </NavLink>
          </button>
          <button>
          <NavLink
            to="my-statement"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <GiStabbedNote size={'27px'} />
            my statement
            {hovered === 3 ? (
              <RiArrowRightSLine size="24px" />
            ) : (
              <RiArrowDropDownLine size="24px" />
            )}
          </NavLink>
          </button>
          <button>
          <NavLink
            to="change-password"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            <GiStabbedNote size={'27px'}/>
            change password
            {hovered === 4 ? (
              <RiArrowRightSLine size="24px" />
            ) : (
              <RiArrowDropDownLine size="24px" />
            )}
          </NavLink>
          </button>
        </section>
        <section>
          <h4>transfer</h4>
          <button>
          <NavLink
            to="Domestic-Transfer"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={handleMouseLeave}
          >
            <TbTransferIn size={'27px'} />
            Domestic Transfer
            {hovered === 5 ? (
              <RiArrowRightSLine size="24px" />
            ) : (
              <RiArrowDropDownLine size="24px" />
            )}
          </NavLink>
          </button>
          <button>
          <NavLink
            to="Inter-Bank-transfer"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }
            onMouseEnter={() => handleMouseEnter(6)}
            onMouseLeave={handleMouseLeave}
          >
            <TbTransferIn size={'27px'}/>
            Inter Bank transfer
            {hovered === 6? (
              <RiArrowRightSLine size="24px" />
            ) : (
              <RiArrowDropDownLine size="24px" />
            )}
          </NavLink>
          </button>
          <button>
          <NavLink
            to="wire-transfer"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }
            onMouseEnter={() => handleMouseEnter(7)}
            onMouseLeave={handleMouseLeave}
          >
           <TbTransfer size={'27px'}/>
            wire transfer
            {hovered === 7? (
              <RiArrowRightSLine size="24px" />
            ) : (
              <RiArrowDropDownLine size="24px" />
            )}</NavLink>
          </button>
        </section>
        <section>
          <h4>PERSONAL Banking</h4>
          <button>
          <NavLink
            to="ticket"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }
            onMouseEnter={() => handleMouseEnter(8)}
           >
            <LuTicketsPlane size={'27px'}/>
            create a ticket
            {hovered === 8? (
              <RiArrowRightSLine size="24px" />
            ) : (
              <RiArrowDropDownLine size="24px" />
            )}
            </NavLink>
          </button>
          <button>
          <NavLink
            to="inbox"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }
            onMouseEnter={() => handleMouseEnter(9)}
           >
            <FaMailBulk size={'27px'}/>
            messages
            {hovered === 9? (
              <RiArrowRightSLine size="24px" />
            ) : (
              <RiArrowDropDownLine size="24px" />
            )}
            </NavLink>
          </button>
          <button>
          <NavLink
            to="loan-application"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }
            onMouseEnter={() => handleMouseEnter(10)}
           >
          <LuTicketsPlane size={'27px'}/>
            apply for loan
              {hovered === 10? (
              <RiArrowRightSLine size="24px" />
            ) : (
              <RiArrowDropDownLine size="24px" />
            )}
            </NavLink>
          </button>
          <button>
          <NavLink
            to="/contact-us"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }
            onMouseEnter={() => handleMouseEnter(11)}
           >
          <IoMailOutline size={'27px'} />
            contact us
              {hovered === 11? (
              <RiArrowRightSLine size="24px" />
            ) : (
              <RiArrowDropDownLine size="24px" />
            )}
            </NavLink>
          </button>
          <button>
          <NavLink
            // to="/dashboard"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }
            onMouseEnter={() => handleMouseEnter(12)}
           >
          <CiLogout size={'27px'}/>
            logout
            {hovered === 12? (
              <RiArrowRightSLine size="24px" />
            ) : (
              <RiArrowDropDownLine size="24px" />
            )}
            </NavLink>          </button>
        </section>
      </main>
    </div>
  )
}

export default Sidebar