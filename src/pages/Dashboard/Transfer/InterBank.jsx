import React, { useState } from 'react';
import './InterBank.css';
import Box from '../box/Box';
import { useSelector } from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const InterBank = () => {
  const [accountType, setAccountType] = useState('');
  const [amount, setAmount] = useState('');
  const [beneficiaryName, setBeneficiaryName] = useState('');
  const [beneficiaryAccount, setBeneficiaryAccount] = useState('');
  const [bankName, setBankName] = useState('');
  const [description, setDescription] = useState('');
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState('');
  const userId = useSelector((state) => state.blackstone.user); 
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const nav = useNavigate()

  const isFormValid = () => {
    return (
      amount.trim() !== '' &&
      beneficiaryName.trim() !== '' &&
      beneficiaryAccount.trim() !== '' &&
      bankName.trim() !== '' &&
      description.trim() !== '' &&
      accountType.trim() !== ''
    );
  };

  const handleTransferClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isFormValid()) {
        // Add transfer logic here
        const response = await axios.post(`https://blackstonecapital-bank-end.vercel.app/api/send-otp/${userId}`)
        console.log(response)
        toast.success(response.data.message);
        setShowOtpModal(true);
      }
    }catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
      console.error('Error creating transfer:', error);
    }
  };

  const handleOtpVerify = async () => {
    try {
      const data = {
        amount: amount,
        accountName: beneficiaryName,
        accountNumber: beneficiaryAccount,
        bankName: selectedBank,
        iban: IBAN,
        swiftCode: swiftCode,
        description: description,
        accountType: accountType,
        otpStore: otp
      }
  
      const response = await axios.post(`https://blackstonecapital-bank-end.vercel.app/api/vrify-otp-and-create-transfer/${userId}`, data);
      console.log(response);
      toast.success(response.data.message);
      setVerified(true);
      console.log('Verifying OTP:', data);
      // Add OTP verification logic here
      setShowOtpModal(false);
      nav("/dashboard")
      
    }catch (error) {
      setLoading(false);
      console.error('Error verifying OTP:', error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className='InterBank'>
      <div className="IBheading">
        <h3 style={{ borderBottom: '1px solid #d9dbdf' }}>Transfer Form to other Domestic Banks</h3>
        <h3>Your IP: 102.88.109.106 has been logged on our server at 08:56 PM 27 Dec 2024 to monitor and secure your transaction.</h3>
        <h3 style={{ borderBottom: '1px solid #d9dbdf' }}>Ensure you fill the forms carefully and correctly</h3>
      </div>

      <div className="IBmain">
        <form>
          <section>
            <label>Amount (USD $)</label>
            <input
              type="number"
              placeholder='e.g 2345'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </section>
          <section>
            <label>Beneficiary Account Name</label>
            <input
              type="text"
              placeholder='Beneficiary Name'
              value={beneficiaryName}
              onChange={(e) => setBeneficiaryName(e.target.value)}
            />
          </section>
          <section>
            <label>Beneficiary Account Number</label>
            <input
              type="text"
              placeholder='e.g Beneficiary Account Number'
              value={beneficiaryAccount}
              onChange={(e) => setBeneficiaryAccount(e.target.value)}
            />
          </section>
          <section>
            <label>Bank Name</label>
            <input
              type="text"
              placeholder='Bank Name'
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
            />
          </section>
          <section>
            <label>Desc.</label>
            <textarea
              placeholder='Funds Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </section>

          <div className="option">
            <h3>Account Type*</h3>
            <div className="radioGroup">
              {[
                'PERSONAL (Savings)',
                'CURRENT',
                'CHECKING',
                'FIX DEPOSIT',
                'NON RESIDENT',
                'ONLINE BANKING',
                'DOMICILIARY ACCOUNT',
                'JOINT ACCOUNT'
              ].map((type) => (
                <label key={type}>
                  <input
                    type="radio"
                    name="accountType"
                    value={type}
                    checked={accountType === type}
                    onChange={() => setAccountType(type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleTransferClick}
            disabled={!isFormValid()}
            style={{
              backgroundColor: isFormValid() ? '#1e90ff' : '#ccc',
              cursor: isFormValid() ? 'pointer' : 'not-allowed',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '6px',
              marginTop: '20px'
            }}
          >
            {loading ? 'Transferring...' : 'Transfer'}
          </button>
        </form>

        <h3 style={{ borderBottom: '1px solid #d9dbdf', paddingBottom: '20px', marginTop: '40px', fontFamily: 'Rubik' }}>TRANSFER FORM</h3>
        <Box />
      </div>

      {/* OTP Modal */}
      {showOtpModal && (
        <div className="otp-modal">
          <div className="otp-content">
            <h2>Enter OTP</h2>
            <input
              type="text"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <div className="otp-actions">
              <button onClick={() => setShowOtpModal(false)}>Cancel</button>
              <button onClick={handleOtpVerify}>{verified ? 'Transfered"' : 'Verify' }</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InterBank;
