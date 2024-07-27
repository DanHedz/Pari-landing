import React from 'react'
import '../Styles/Rules.sass'
import pari_1 from '../assets/pari_1.png'
import pari_2 from '../assets/pari_2.png'
import pari_3 from '../assets/pari_3.png'
import btn_act from '../assets/btn_act.svg'
import '../Styles/index.sass'

const Rules = () => {
  return (
    <div className='rules'>
        <div className="text-container">
            <span className='rules-ever'>RULES ARE EASIER <br></br>THAN EVER:</span>
            
        </div>
            <div className="container_rules">
                <div className="container">
                    <img src={pari_1} alt="" />
                    <h1 className='number_rules'>1</h1>
                    <div className="text_rules"><p className='p_txt'>Join <br></br> <span className='span_txt'>Parimatch</span></p></div>
                </div>
                <div className="container">
                    <img src={pari_2} alt="" />
                    <h1 className='number_rules'>2</h1>
                    <div className="text_rules"><p className='p_txt'>Place bets on <br></br> <span className='span_txt' >The Cricket <br></br> World Cup <br></br> Tournament</span> <br></br>You can start with <br></br>  a minimum of ₹750</p></div>
                </div>
                <div className="container">
                    <img src={pari_3} alt="" />
                    <h1 className='number_rules'>3</h1>
                    <div className="text_rules"><p className='p_txt'>Be among the first <br></br> 1,000 on the Leaderboard <br></br>for a chance to win <br></br><span className='span_txt'>motorcycle</span> from <br></br> <span className='span_txt'> Kajal or Pooran</span></p></div>
                </div>
                <img src={btn_act} alt="" className="button_action" />
            </div>
    </div>
  )
}

export default Rules

