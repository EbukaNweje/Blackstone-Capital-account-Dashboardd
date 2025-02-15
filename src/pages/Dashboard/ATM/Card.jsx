import React, { useState } from 'react'
import './Card.css'
import scratch from '../../../assets/scratch.png'

const Card = ({userData}) => {
    const [flipped, setFlipped] = useState(false);

  const handleMouseEnter = () => {
    setFlipped(true);
  };

  const handleMouseLeave = () => {
    setFlipped(false);
  };
  
  return (
    <div
    className={`atmCard ${flipped ? 'flipped' : ''}`}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <div className="cardFront">
      <div className="cardFrontHead">
      <div className="scratchArea">
        <img src={scratch} alt="scratch" />
      </div>
      <div className="cardLogo">VISA</div>
      </div>
      <p className="cardNumber">{userData?.atmCard.cardNumber || ''}</p>
      <div className="cardDetails">
        <p className="cardHolder">
          <span>CARD HOLDER</span>
          <h3 style={{textTransform: 'capitalize'}}>{userData?.atmCard.cardHolderName || 'User'}</h3>
        </p>
        <p className="validTill">
          <span>VALID TILL: </span>
          <h3> {userData?.atmCard.cardExpDate}</h3></p>
      </div>
    </div>
    <div className="cardBack">
      <div className="blackBar"></div>
      <div className="whitebarInfo">
      <div className="whiteBar">
      {userData?.atmCard.cardCvvNumber}
      </div>
      <p className="infoText">This virtual debit card issued by CBS Bank. pursuant to a licensed from VISA USA Inc.</p>
      </div>

      <div className="backDetails">
        <p className="customerSignature">Customer Signature: <span>Signature</span></p>
        <div className='cardL'>VISA</div>
      </div>
    </div>
  </div>
  )
}

export default Card