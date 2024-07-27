import React from 'react'
import '../Styles/Maximize.sass'
import '../Styles/index.sass'

const Maximize = () => {
  return (
    <div className='bg_3'>
        <div className="maximize"><h1>Maximize your<br></br> winning chances</h1></div>
        <div className="choose-try">
            <div className="choose-try-children">
                <h2 className='number'>1.</h2>
                <div className="chotrb">
                    <div className="ch-tr">Choose</div>
                    <div className="hi-pa">High</div>
                    <div className="od-be">Odds</div>
                </div>
            </div>
            <div className="choose-try-children">
                <h2 className='number'>2.</h2>
                <div className="chotrb">
                <div className="ch-tr">Try</div>
                <div className="hi-pa">Parlay</div>
                <div className="od-be">Bets</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Maximize