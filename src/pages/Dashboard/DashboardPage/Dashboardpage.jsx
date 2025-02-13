import React, { useEffect, useState } from 'react';
import './Dashboardpage.css';
import Card from '../ATM/Card';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Dashboardpage = () => {
  const [userData, setUserData] = useState(null);
  const userId = useSelector((state) => state.blackstone.user); 
  // console.log("User ID:", userId);

  const date = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  const getOne = async () => {    
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
    <div className='Dashboardpage'>
      <div className="pageHeader">
        <h3>Hi, {userData?.userName || 'User'}! Welcome back!</h3>
        <span>Banking Like Never Before.</span>
      </div>

      <div className="userAcctInfo">
        <div className="userInfo">
          <div className="bigCard">
            <div className="bcUp">
              <div className="warning">
                <h3>Tips</h3>
                <span>Change your Internet banking Password frequently to keep your Account Safe.</span>
              </div>
              <div className="bcUpDown">
                <div className="bcUpDownHead">
                  <span>Available Balance</span>
                  <img src="https://cbsremmittance.com/dashboard/img/bar.png" alt="bar" />
                </div>
                <aside>
                  <h3 style={{ color: '#0076b6' }}>USD $</h3> {userData?.accountBalance || '0.00'}
                </aside>
              </div>
            </div>
            <marquee behavior="scroll" direction="left">Good Day! Welcome to your banking portal. Thank you!</marquee>
            <div className="bcDown">
              <div className="bcAcctInfo">
                <span>Your Account Number</span>
                <h3>{userData?.accountNumber || 'N/A'}</h3>
              </div>
              <div className="bcDownFooter">
                <section>
                  <span>Account Holder</span>
                  <h3>{userData?.firstName} {userData?.lastName}</h3>
                </section>
                <section>
                  <span>Account type</span>
                  <h3>{userData?.accountType || 'N/A'}</h3>
                </section>
                <section>
                  <span>Account status</span>
                  <h3>{userData?.status ? 'Active' : 'Inactive'}</h3>
                </section>
              </div>
            </div>
          </div>
          <div className="beneficiaries">
          <div className="wrap">
            <h3>LAST TRANSFER MADE</h3>
            <button>View more</button>
            <table>
              <thead>
                {/* <tr> */}
                  <th style={{ width: '30%' }}>Beneficiary Bank & Account</th>
                  <th style={{ width: '23.3%' }}>Amount</th>
                  <th style={{ width: '23.3%' }}>Status</th>
                  <th style={{ width: '23.3%' }}>Date/Time</th>
                {/* </tr> */}
              </thead>
              <tbody>
                {userData?.Transactions?.transfar.length > 0 ? (
                  <tr>
                    <td style={{ width: '30%' }}>
                      {userData.Transactions.transfar.at(-1)?.bank || 'N/A'}
                    </td>
                    <td style={{ width: '23.3%' }}>
                      USD ${userData.Transactions.transfar.at(-1)?.amount || '0.00'}
                    </td>
                    <td style={{ width: '23.3%' }}>
                      {userData.Transactions.transfar.at(-1)?.status || 'N/A'}
                    </td>
                    <td style={{ width: '23.3%' }}>
                      {userData.Transactions.transfar.at(-1)?.date || 'N/A'}
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td colSpan="4" style={{ textAlign: 'center', width: '100%' }}>No transactions available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          </div>
        </div>
        <div className="atmInfo">
          <div className="userIpBalance">
            <div className="bookBalance">
            <div className="bbHead">
            <h3>TOTAL BOOK BALANCE</h3>
            <img src="https://cbsremmittance.com/dashboard/img/bar.png" alt="bar" />
            </div>
             <div className="bbInfo">
             <h2>USD</h2>
              <span>${userData?.accountBalance || '0.00'}</span>
              <p>as at <span style={{color: ' #3bb001'}} >{formattedDate}</span></p>
             </div>
            </div>
            <div className="userIp">
              <h3>Account Logged From:</h3>
              <div className="upInfo">
                <img src="https://cbsremmittance.com/dashboard/com.png" />
                <span>This Computer IP</span>
                <h3>102.88.70.91</h3>
              </div>
            </div>
          </div>
          <Card userData={userData}/>
        </div>
      </div>
      <div className="userAcctStatement">
        <div className="review" style={{color: '#212229', fontSize: '13px', lineHeight: '15.6px', fontWeight: '700'}}>Your Financial Statement Review</div>
        <div className="statements" style={{color: '#212229', fontSize: '13px', lineHeight: '15.6px', fontWeight: '700'}}>Your Financial Statement</div>
        <div className="statements">(Credit and Debit Statements)        </div>
        <table>
          <thead>
            <th>Type</th>
            <th>amount</th>
            <th>to/from</th>
            <th>Description</th>
            <th>date/time</th>
            <th>status</th>
          </thead>
          <tbody>
            {userData?.Transactions?.deposits.length > 0 ? (
              userData.Transactions.deposits.map((deposit, index) => (
                <tr key={index}>
                  <td>Credit</td>
                  <td>USD ${deposit.amount}</td>
                  <td>{deposit.from || 'N/A'}</td>
                  <td>{deposit.description || 'No description'}</td>
                  <td>{deposit.date || 'N/A'}</td>
                  <td>{deposit.status || 'Pending'}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', width: '100%' }}>No credit transactions available</td>
              </tr>
            )}
          </tbody>

        </table>
        <div className="viewMore">
          <button>view more</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboardpage;
