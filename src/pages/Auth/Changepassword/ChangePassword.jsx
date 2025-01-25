import React from 'react'
import './ChangePassword.css'
import CCRedirect from '../../Dashboard/CCRedirect';
import Box from '../../Dashboard/box/Box';

const ChangePassword = () => {

  return (
    <div className='ChangePassword'>
       <article>
       <hr />
     <Box/>
            <h3 className='tks'>TICKETS  </h3>

            <form>
                <h3>Update your password below</h3>
                <section>
                    <label>Old Password</label>
                    <input type="password" placeholder='********' />
                </section>
                <section>
                    <label>New Password</label>
                    <input type="password" placeholder='********' />
                </section>
                <section>
                    <label>Retype New Password</label>
                    <input type="password" placeholder='********' />
                </section>
                <button>update password</button>
            </form>
       </article>

       <aside>
       <CCRedirect/>
       </aside>

    </div>
  )
}

export default ChangePassword