import React from 'react'
import './Register.css'
import Registerform from './Registerform'

const Register = () => {
  return (
    <div className='Register'>
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
            <Registerform/>
        </div>
    </div>
  )
}

export default Register