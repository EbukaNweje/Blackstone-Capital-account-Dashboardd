import React from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom'

const Registerform = () => {
    const Nav = useNavigate()
  return (
    <div className='Registerform'>
     <aside><img src="https://blackstonecapital.vercel.app/used/logo.png" alt="Logo" /></aside>
     <form action="">
     <div className="formHead">
     <h3>Create Account     </h3>
      <div className="redirection">
        <span>Already User? </span>
        <h4 onClick={()=>Nav('/')}>Login</h4>
      </div>
     </div>
        <div className="twoSec">
            <section>
                <label>First Name</label>
                <input type="text" />
            </section>
            <section>
                <label>Last Name</label>
                <input type="text" />
            </section>
        </div>
        <section>
            <label>Username</label>
            <input type="text" />
        </section>
        <section>
            <label>Email address</label>
            <input type="email" />
        </section>
        <div className="twoSec">
            <section>
                <label>Password</label>
                <input type="password" />
            </section>
            <section>
                <label>Confirm password</label>
                <input type="password" />
            </section>
        </div>
        <section>
            <label>Residential Address</label>
            <input type="address" />
        </section>
        <section>
            <label>Phone Number</label>
            <input type="phone" />
        </section>
        <section>
            <label>Date of birth</label>
            <input type="date" />
        </section>
        <section>
            <label>Gender</label>
            <input type="text" />
        </section>
        <section>
            <label>Country</label>
            <input type="text" />
        </section>
        <div className="term">
       <input type="checkbox" /> I accept the <span> terms</span> and <span> privacy policy </span>
        </div>
        <button onClick={() => Nav('/')}>Register</button>
     </form>
    </div>
  )
}

export default Registerform