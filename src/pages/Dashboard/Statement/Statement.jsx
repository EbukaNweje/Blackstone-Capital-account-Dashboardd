import React from 'react'
import './Statement.css'
import Box from '../box/Box'

const Statement = () => {
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
                <section><li></li> Account Number: (01538838277)</section>
                <section><li></li> Available balance: (USD $ 0153,883,8277)</section>
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
            <Box/>
        </div>
    </div>
  )
}

export default Statement