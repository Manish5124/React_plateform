import React from 'react'
import './Subscription.css';

function Subscription() {
  return (
    <div className='Subscription'>
    <div >Click here to get access</div>
    <div className="plan">
      <h3>1 Months</h3>
      <p>Rs 500</p>
      <p>10 interviews</p>
    </div>
    <div className="plan">
      <h3>3 Months</h3>
      <p>Rs 1400</p>
      <p>30 interviews</p>
    </div>
  </div>
  )
}

export default Subscription;