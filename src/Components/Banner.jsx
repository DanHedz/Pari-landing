import React from 'react';
import '../Styles/Banner.sass';
import PrizeInfo from './PrizeInfo';
import logoPari from '../assets/logo_pari.svg';


const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__header">
      <img src={logoPari} alt="Parimatch" className="banner__logo" />
      </div>
      <PrizeInfo />
    </div>
  )
}

export default Banner