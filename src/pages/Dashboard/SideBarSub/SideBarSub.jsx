import React, { useEffect, useState } from 'react'
import { TbTableDashed,TbTransferIn, TbTransfer } from "react-icons/tb";
import { RiArrowDropDownLine,RiArrowRightSLine  } from "react-icons/ri";
import { FaRegUserCircle, FaMailBulk  } from "react-icons/fa";
import { GiStabbedNote } from "react-icons/gi";
import { LuTicketsPlane } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import './SieBarSub.css'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { logout } from '../../../Global/Slice';

const SideBarSub = ({onClose}) => {
  const [userData, setUserData] = useState(null);
  const userId = useSelector((state) => state.blackstone.user); 
  // console.log("User ID:", userId);
  const dispatch = useDispatch()

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
        <div className='SideBarSub' >
      <div className="acctInfo">
        <div className="profile"></div>
        <section>
        <span style={{textTransform: 'capitalize'}}>{userData?.atmCard.cardHolderName || 'User'}</span>
        <h3>Account No:{userData?.accountNumber || 'N/A'}</h3>
        </section>
      </div>
      <div className="status">
        <p>Account status: <span>{userData?.status ? 'Active' : 'Inactive'}</span></p>
      </div>
      <main className='m'>
        <section>
          <button>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }
            onClick={onClose}
          >
            <TbTableDashed size="27px" />
            Dashboard
          </NavLink>
              </button>
          <button>
          <NavLink
            to="my-profile"
            onClick={onClose}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }
          >
          <FaRegUserCircle size={'27px'}/>
            my profile
          </NavLink>
          </button>
          <button>
          <NavLink
            to="my-statement"
            onClick={onClose}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }
          >
            <GiStabbedNote size={'27px'} />
            my statement
          </NavLink>
          </button>
          <button>
          <NavLink
            to="change-password"
            onClick={onClose}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }
          >
            <GiStabbedNote size={'27px'}/>
            change password
          </NavLink>
          </button>
        </section>
        <section>
          <button>
          <NavLink
            to="Domestic-Transfer"
            onClick={onClose}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }
          >
            <TbTransferIn size={'27px'} />
            Domestic Transfer
          </NavLink>
          </button>
          <button>
          <NavLink
            to="Inter-Bank-transfer"
            onClick={onClose}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }
          >
            <TbTransferIn size={'27px'}/>
            Inter Bank transfer
          </NavLink>
          </button>
          <button>
          <NavLink
            to="wire-transfer"
            onClick={onClose}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }
          >
           <TbTransfer size={'27px'}/>
            wire transfer
            </NavLink>
          </button>
        </section>
        <section>
          <button>
          <NavLink
            to="ticket"
            onClick={onClose}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }
           >
            <LuTicketsPlane size={'27px'}/>
            create a ticket
            </NavLink>
          </button>
          <button>
          <NavLink
            to="inbox"
            onClick={onClose}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }
           >
            <FaMailBulk size={'27px'}/>
            messages
            </NavLink>
          </button>
          <button>
          <NavLink
            to="loan-application"
            onClick={onClose}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }
           >
          <LuTicketsPlane size={'27px'}/>
            apply for loan
            </NavLink>
          </button>
          {/* <button>
          <NavLink
            to="/contact-us"
            onClick={onClose}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }
           >
          <IoMailOutline size={'27px'} />
            contact us
            </NavLink>
          </button> */}
          <button>
          <NavLink
            onClick={() => {onClose, dispatch(logout())}}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }
           >
          <CiLogout size={'27px'}/>
            logout
            </NavLink>          </button>
        </section>
      </main>
    </div>
  )
}

export default SideBarSub