import React, { useState } from 'react'
import './Dashboardpage.css'
import Card from '../ATM/Card';
import { useSelector } from 'react-redux';

const Dashboardpage = () => {
  const date = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = date.toLocaleDateString('en-US', options);
const userData = useSelector((state)=> state.blackstone.user)
console.log("userData", userData);

  return (
    <div className='Dashboardpage'>
      <div className="pageHeader">
        <h3>Hi, {userData?.userName} Welcome back!</h3>
        <span>Banking Like Never Before.</span>
      </div>

      <div className="userAcctInfo">
        <div className="userInfo">
          <div className="bigCard">
            <div className="bcUp">
              <div className="warning">
                <h3>Tips</h3>
                <span>Change your Internet banking Password Frequently to keep your Account Safe</span>
              </div>
             <div className="bcUpDown">
              <div className="bcUpDownHead">
                <span>Available Balance</span>
                <img src="https://cbsremmittance.com/dashboard/img/bar.png" alt="bar" />
                </div>
                <aside><h3 style={{color: '#0076b6'}}>USD $</h3> {userData?.accountBalance
                }</aside>
             </div>
            </div>
            <marquee behavior="scroll" direction="left">Good Day! and Welcome to your banking portal. Thank you!</marquee>
            <div className="bcDown">
            <div className="bcAcctInfo">
              <span>Your Account Number</span>
              <h3>01538838277</h3>
            </div>
            <div className="bcDownFooter">
              <section>
                <span>Account Holder</span>
                <h3>jul won</h3>
              </section>
              <section>
                <span>Account type</span>
                <h3>savings</h3>
              </section>
              <section>
                <span>Account status</span>
                <h3>Active</h3>
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
                  <th style={{width: '30%'}}>Beneficiary Bank & Account</th>
                  <th  style={{width: '23.3333333%'}}>Amount</th>
                  <th style={{width: '23.3333333%'}}>Status</th>
                  <th style={{width: '23.3333333%'}}>Date/Time</th>
                </thead>
                <tbody>
                  <tr>
                    <td style={{width: '30%'}}></td>
                    <td style={{width: '23.3333333%'}}>USD $</td>
                    <td style={{width: '23.3333333%'}}></td>
                    <td style={{width: '23.3333333%'}}></td>
                  </tr>
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
              <span>$1,938,990.00</span>
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
          <Card/>
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
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="viewMore">
          <button>view more</button>
        </div>
      </div>

    </div>
  )
}

export default Dashboardpage