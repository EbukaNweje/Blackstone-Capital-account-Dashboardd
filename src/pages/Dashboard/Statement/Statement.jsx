import React, { useEffect, useState } from 'react'
import './Statement.css'
import Box from '../box/Box'
import { useSelector } from 'react-redux';
import axios from 'axios';

const Statement = () => {
    const [userData, setUserData] = useState(null);
    const userId = useSelector((state) => state.blackstone.user); 
    // console.log("User ID:", userId);
  

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
    <div className='Statement'>
        <div className="stateMentHead">
        YOUR ONLINE BANKING STATEMENT!
        </div>
        <section>RECENT TRANSFER STATEMENT <button>Print statement</button></section>
        <div className="info">
            <div className="Logo">
            <img src="https://blackstonecapital-nu.vercel.app/used/logo.png" alt="Logo" />
            </div>
            <div className="sectioNs">
                <section><li></li> Account Number: ({userData?.accountNumber || 'N/A'})</section>
                <section><li></li> Available balance: (USD ${userData?.accountBalance || '0.00'})</section>
                <section><li></li> Account logged in from: (01538838277)</section>
            </div>
            <h3>TRANSFER HISTORY</h3>
            <table>
                <thead>
                    <th>#</th>
                    <th>AMOUNT</th>
                    <th>RECIEVING ACCOUNT AND NAME</th>
                    <th>TYPE</th>
                    <th>BANK</th>
                    <th>DESCRIPTION</th>
                    <th>DATE/TIME</th>
                    <th>STATUS</th>
                </thead>
                <tbody>
                   {
                    userData?.Transactions?.transfar.length !== 0? (
                        <tr>
                        <td>1</td>
                        <td>500</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    ): (
                        <tr>
                        <td colSpan="4" style={{ textAlign: 'center', width: '100%' }}>No transactions available</td>
                      </tr>   
                    )
                   }
                </tbody>
            </table>

            <h3>TRANSACTION STATEMENT</h3>
            <span>Here is your Credit and Debit Transaction Statement</span>
            <table>
                <thead>
                    <th>Ref No.</th>
                    <th>TYPE</th>
                    <th>AMOUNT (USD $)</th>
                    <th>TO/FROM</th>
                    <th>DESCRIPTION</th>
                    <th>DATE/TIME</th>
                </thead>
                <tbody>
                   {
                    userData?.Transactions?.deposits.length !== 0 ?(
                        <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    ): (
                        <tr>
                        <td colSpan="4" style={{ textAlign: 'center', width: '100%' }}>No transactions available</td>
                      </tr>   
                    )
                   }
                </tbody>
            </table>
            <Box userData={userData}/>
        </div>
    </div>
  )
}

export default Statement