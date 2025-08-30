import React from 'react';
import './Home.css';
import Category from '../Category/Category';
import Subscription from '../Subscription/Subscription';

function Home() {
  return (
    <div>
      <div className='title'>
        {/* <div>We will provide you real interview experience</div> */}
        <div className='quote'>Get a real <span className='highlight'>interview</span> <br /> experience  with us</div>
      </div>
      <div>
        <Category/>
      </div>
      <div>
      <Subscription/>
      </div>
    </div>
  )
}

export default Home