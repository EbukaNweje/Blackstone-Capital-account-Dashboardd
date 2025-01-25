import React from 'react'
import { TbTableDashed,TbTransferIn, TbTransfer } from "react-icons/tb";
import { RiArrowDropDownLine,RiArrowRightSLine  } from "react-icons/ri";
import { FaRegUserCircle, FaMailBulk  } from "react-icons/fa";
import { GiStabbedNote } from "react-icons/gi";
import { LuTicketsPlane } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import './SieBarSub.css'

const SideBarSub = ({onClose}) => {
  return (
        <div className='SideBarSub' >
      <div className="acctInfo">
        <div className="profile"></div>
        <section>
          <span>John loe</span>
          <h3>Account No: 012378307</h3>
        </section>
      </div>
      <div className="status">
        <p>Account status: <span>Active</span></p>
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
          <button>
          <NavLink
            to="/contact-us"
            onClick={onClose}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }
           >
          <IoMailOutline size={'27px'} />
            contact us
            </NavLink>
          </button>
          <button>
          <NavLink
            to="/dashboard"
            onClick={onClose}
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