import React, { useEffect, useState } from 'react';
import './Domestic.css';
import CCRedirect from '../CCRedirect';
import Box from '../box/Box';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Domestic = () => {
  const [accountType, setAccountType] = useState('');

    useEffect(() => {
          AOS.init({
            duration: 3000, 
            once: true,
          });
        }, []);

  return (
    <div className='Domestic'>
      <article>
        <div className="DAheading">
          <h3 style={{ borderBottom: '1px solid #d9dbdf' }}>Transfer Form to other Domestic Banks</h3>
          <h3>Your IP: 102.88.109.106 has been logged on our server at 08:56 PM 27 Dec 2024 to monitor and secure your transaction.</h3>
          <h3 style={{ borderBottom: '1px solid #d9dbdf' }}>Ensure you fill the forms carefully and correctly</h3>
        </div>
        <div className="DAmain">
          <form data-aos="fade-up">
            <section>
              <label>Amount (USD $)</label>
              <input type="number" placeholder='e.g 2345' />
            </section>
            <section>
              <label>Beneficiary Account Name</label>
              <input type="text" placeholder='Beneficiary Name' />
            </section>
            <section>
              <label>Beneficiary Account Number</label>
              <input type="text" placeholder='e.g Beneficiary Account Number' />
            </section>
            <section>
              <label>Bank Name</label>
              <input type="text" placeholder='Bank Name' />
            </section>
            <section>
              <label>Desc.</label>
              <textarea name="" id="" placeholder='Funds Description'></textarea>
            </section>
            <div className="option">
              <h3>Account Type*</h3>
              <div className="radioGroup">
                <label>
                  <input
                    type="radio"
                    name="accountType"
                    value="SaPERSONAL (Savings)vings"
                    checked={accountType === 'PERSONAL (Savings)'}
                    onChange={() => setAccountType('PERSONAL (Savings)')}
                  />
                  PERSONAL (Savings)
                </label>
                <label>
                  <input
                    type="radio"
                    name="accountType"
                    value="CURRENT"
                    checked={accountType === 'CURRENT'}
                    onChange={() => setAccountType('CURRENT')}
                  />
                  CURRENT
                </label>
                <label>
                  <input
                    type="radio"
                    name="accountType"
                    value="CHECKING"
                    checked={accountType === 'CHECKING'}
                    onChange={() => setAccountType('CHECKING')}
                  />
                  CHECKING
                </label>
                <label>
                  <input
                    type="radio"
                    name="accountType"
                    value=" FIX DEPOSIT"
                    checked={accountType === ' FIX DEPOSIT'}
                    onChange={() => setAccountType(' FIX DEPOSIT')}
                  />
                   FIX DEPOSIT
                </label>
                <label>
                  <input
                    type="radio"
                    name="accountType"
                    value="NON RESIDENT"
                    checked={accountType === 'NON RESIDENT'}
                    onChange={() => setAccountType('NON RESIDENT')}
                  />
                  NON RESIDENT
                </label>
                <label>
                  <input
                    type="radio"
                    name="accountType"
                    value="ONLINE BANKING"
                    checked={accountType === 'ONLINE BANKING'}
                    onChange={() => setAccountType('ONLINE BANKING')}
                  />
                  ONLINE BANKING
                </label>
                <label>
                  <input
                    type="radio"
                    name="accountType"
                    value="CHECKING"
                    checked={accountType === 'CHECKING'}
                    onChange={() => setAccountType('CHECKING')}
                  />
                  CHECKING
                </label>
                <label>
                  <input
                    type="radio"
                    name="accountType"
                    value="DOMICILIARY ACCOUNT"
                    checked={accountType === 'DOMICILIARY ACCOUNT'}
                    onChange={() => setAccountType('DOMICILIARY ACCOUNT')}
                  />
                  DOMICILIARY ACCOUNT
                </label>
                <label>
                  <input
                    type="radio"
                    name="accountType"
                    value="JOINT ACCOUNT"
                    checked={accountType === 'JOINT ACCOUNT'}
                    onChange={() => setAccountType('JOINT ACCOUNT')}
                  />
                JOINT ACCOUNT
                </label>
              </div>
            </div>
            <button>Transfer</button>
          </form>
          <Box />
        </div>
      </article>
      <aside><CCRedirect /></aside>
    </div>
  );
};

export default Domestic;
