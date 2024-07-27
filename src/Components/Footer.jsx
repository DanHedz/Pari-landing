import React from 'react';
import '../Styles/Footer.sass';
import hdfc from '../assets/hdfc.svg'
import sbi from '../assets/sbi.svg'
import icici from '../assets/icici.svg'
import visa  from '../assets/visa.svg'
import mastercard from '../assets/mastercard.svg'
import ups from '../assets/upi.svg'
import feder from '../assets/FederBet.svg'
import more_18 from '../assets/18.svg'
import warn from '../assets/stop.svg'
import curacao from '../assets/Curacao.svg'
import facebook from '../assets/facebook.svg'
import x from '../assets/x.svg'
import insta from '../assets/insta.svg'
import tele from '../assets/tele.svg'

const Footer = () => {
    return (
      <footer className="footer">

        <div className="footer__payment-options">
          <img src={hdfc} alt="HDFC Bank" />
          <img src={sbi} alt="SBI" />
          <img src={icici} alt="ICICI Bank" />
          <img src={visa} alt="Visa" />
          <img src={mastercard} alt="Mastercard" />
          <img src={ups} alt="UPI" />
        </div>
        <div className="footer__container">
          <div className="footer__links">
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
          <div className="footer__social-media">
            <a className='social' href="https://facebook.com" aria-label="Facebook"><img src={facebook} alt="Facebook" /></a>
            <a className='social' href="https://twitter.com" aria-label="Twitter"><img src={x} alt="Twitter" /></a>
            <a className='social' href="https://instagram.com" aria-label="Instagram"><img src={insta} alt="Instagram" /></a>
            <a className='social' href="https://telegram.org" aria-label="Telegram"><img src={tele} alt="Telegram" /></a>
          </div>
        </div>
        <div className="footer__container">
          <div className="footer__links">
            <a href="/privacy-policy">Responsible gambling</a>
          </div>
          <div className="footer__responsible-gambling">
            <img className='sponsors' src={feder} alt="Federbet" />
            <img className='sponsors' src={more_18} alt="18+" />
            <img className='sponsors' src={warn} alt="Gambling Warning" />
            <img className='sponsors' src={curacao} alt="Curacao eGaming" />
            </div>
        </div>
        <div className="footer__legal-info">
          <p>
            © 1994-2024 Parimatch – Best online betting company. This website is operated by PMSPORT N.V. (reg. number 146906)
            with a registered address at Schout Bij Nacht Doormanweg 40, Curaçao. This service operated under the License No. 1668/JAZ
            issued to Curacao eGaming. Payment Agent MYRCIUS INTERNATIONAL LTD (reg. number HE 404130) with a registered address at
            Christodoulou Hatzipavlou 199, Office 4A, 4th floor, 3936, Limassol, Cyprus.
          </p>
        </div>
        <div className="support">
            <p>support@parimatch.in  <span>© parimatch 2024</span></p>
        </div>
      </footer>
    )
  }
  
export default Footer
  
