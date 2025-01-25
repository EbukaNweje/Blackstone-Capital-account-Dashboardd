import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Loginform = () => {
  const Nav = useNavigate()
  return (
    <div className='formCOn'>
    <aside><img src="https://blackstonecapital-nu.vercel.app/used/logo.png" alt="Logo" /></aside>
    <form action="">
     <div className="formHead">
     <h3>Login</h3>
      <div className="redirection">
        <span>New User?</span>
        <h4 onClick={()=>Nav('/Register')}>Create account</h4>
      </div>
     </div>
      <section>
      <label>Email</label>
        <input type="text" />
      </section>
      <section>
      <label>Password</label>
        <input type="password" />
      </section>
      <span style={{color: '#2e81ef'}}>Forgot password?</span>
      <button className='formBtn' onClick={() => Nav('/dashboard')}>Login</button>
    </form>
    </div>
  )
}

export default Loginform