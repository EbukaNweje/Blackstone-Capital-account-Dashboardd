import React, { useEffect, useState } from 'react';
import './Wire.css';
import Box from '../box/Box';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CCRedirect from '../CCRedirect';
import { useSelector } from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Wire = () => {
  const [accountType, setAccountType] = useState('');
  const [amount, setAmount] = useState('');
  const [beneficiaryName, setBeneficiaryName] = useState('');
  const [beneficiaryAccount, setBeneficiaryAccount] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [IBAN, setIBAN] = useState('');
  const [swiftCode, setSwiftCode] = useState('');
  const [description, setDescription] = useState('');
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState('');
  const userId = useSelector((state) => state.blackstone.user); 
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const nav = useNavigate()


  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  const isFormValid = () => {
    return (
      amount.trim() !== '' &&
      beneficiaryName.trim() !== '' &&
      beneficiaryAccount.trim() !== '' &&
      selectedBank.trim() !== '' &&
      IBAN.trim() !== '' &&
      swiftCode.trim() !== '' &&
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
    <div className='Wire'>
      <article>
        <h3>INTERNATIONAL TRANSFER PAGE</h3>
        <Box />
        <main>
          <h3>WIRE TRANSFER FORM</h3>
          <div className="Wheading">
          </div>
          <div className="Wmain">
            <form data-aos="fade-up">
              <section>
                <label>Amount (USD $)</label>
                <input
                  type="number"
                  placeholder="e.g 2345"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </section>
              <section>
                <label>Beneficiary Account Name</label>
                <input
                  type="text"
                  placeholder="Beneficiary Name"
                  value={beneficiaryName}
                  onChange={(e) => setBeneficiaryName(e.target.value)}
                />
              </section>
              <section>
                <label>Beneficiary Account Number</label>
                <input
                  type="text"
                  placeholder="Beneficiary Account Number"
                  value={beneficiaryAccount}
                  onChange={(e) => setBeneficiaryAccount(e.target.value)}
                />
              </section>
              <section>
                <label>Bank Name</label>
                <select
                  value={selectedBank}
                  onChange={(e) => setSelectedBank(e.target.value)}
                >
                  <option value="">Select Bank</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Antarctica">Antarctica</option>
                  <option value="Antigua And Barbuda">Antigua And Barbuda</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  {/* ... More countries as needed */}
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
              </section>
              <section>
                <label>IBAN</label>
                <input
                  type="text"
                  placeholder="Enter Iban Number"
                  value={IBAN}
                  onChange={(e) => setIBAN(e.target.value)}
                />
              </section>
              <section>
                <label>Swift Code</label>
                <input
                  type="text"
                  placeholder="Enter swift code"
                  value={swiftCode}
                  onChange={(e) => setSwiftCode(e.target.value)}
                />
              </section>
              <section>
                <label>Desc.</label>
                <textarea
                  placeholder="Description"
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
          </div>
        </main>
      </article>
      <aside>
        <CCRedirect />
      </aside>

      {/* OTP Modal */}
      {showOtpModal && (
        <div className="otp-modal">
          <div className="otp-content">
            <h2>Enter OTP</h2>
            <input
              type="text"
              placeholder="Enter 4-digit OTP"
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

export default Wire;
