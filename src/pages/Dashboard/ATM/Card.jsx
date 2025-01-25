import React, { useState } from 'react'
import './Card.css'

const Card = () => {
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
      <div className="scratchArea"></div>
      <div className="cardLogo">VISA</div>
      </div>
      <p className="cardNumber"><span>1234</span> <span>5678</span>  <span>9012 </span> <span>3456</span></p>
      <div className="cardDetails">
        <p className="cardHolder">
          <span>CARD HOLDER</span>
          <h3>Ju Yeong</h3>
        </p>
        <p className="validTill">
          <span>VALID TILL: </span>
          <h3> 12/24</h3></p>
      </div>
    </div>
    <div className="cardBack">
      <div className="blackBar"></div>
      <div className="whitebarInfo">
      <div className="whiteBar">
        123
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