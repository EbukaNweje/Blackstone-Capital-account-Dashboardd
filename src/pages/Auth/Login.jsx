import React from 'react'
import './Login.css'
import Loginform from './Loginform'

const Login = () => {
  return (
    <div className='Login'>
        <div className="welcomeScreen"> 
        <img src="https://i.pinimg.com/736x/f1/76/c3/f176c3b38f30204ec45fb5f038ae893c.jpg" alt="welcome" />
        </div>
        <div className="formHolder">
            <header>
                <article>
                    <select 
                    name=''
                    id=''
                    >
                        <option disabled selected>Select a language</option>
                        <option value="Arabian">Arabian</option>
                        <option value="English">English</option>
                        <option value="Avar">Avar</option>
                    </select>
                    <span>Powered by Google Translate</span>
                </article>
            </header>
            <Loginform/>
        </div>
    </div>
  )
}

export default Login