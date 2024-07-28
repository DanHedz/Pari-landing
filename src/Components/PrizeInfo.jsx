import React from 'react';
import '../Styles/PrizeInfo.sass';
import play_now from '../assets/button_play_now.svg'
import '../Styles/index.sass'

const PrizeInfo = () => {
  return (
    <div className="prize-info">
      <span className='win'>WIN</span>
      <span className='new3-8' data-text="3 New " >3 New</span>
      <span className='new3-8' data-text=" Motorcycles">Motorcycles</span>
      <span className='from-kajal'>From Kajal Aggarwal</span>
      <span className="nicolas-pooran">or Nicholas Pooran</span>
      <span className='and-guaranteed'>And</span> 
      <span className='new3-8' data-text=" ₹8,00,000 ">₹8,00,000</span> 
      <span className='and-guaranteed'>guaranteed</span>
      <div className='play_now'><img src={play_now} alt="" /></div>
      <span className='terms'>Terms and conditions</span>
    </div>
  );
};

export default PrizeInfo;

