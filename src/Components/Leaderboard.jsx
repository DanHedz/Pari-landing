import React, { useState } from 'react';
import '../Styles/Leaderboard.sass';
import '../Styles/index.sass';

const Leaderboard = () => {
  const [activeRound, setActiveRound] = useState(null);

  const handleRoundClick = (round) => {
    setActiveRound(round);
    console.log(round);
  };

  return (
    <div className='leaderboard'>
      <div className="leaderboard_container">
        <h1 className='world-cup'>The Cricket World Cup <br />Tournament</h1>
        <span className='new3-8' data-text="LEADERBOARD">LEADERBOARD</span> 
        <div className="more-prize">MORE PRIZE POINTS</div>
        <span className="arrow"> &gt;&gt;<br /> </span>
        <div className="more-prize">MORE CHANCES TO WIN BIG!</div>
      </div>

      <div className="rounds_container">
        <div className='btn-container'>
          <button
            className={activeRound === 1 ? 'active_btn' : 'disabled_btn'}
            onClick={() => handleRoundClick(1)}>
            1 Round
          </button>
          <button
            className={activeRound === 2 ? 'active_btn' : 'disabled_btn'}
            onClick={() => handleRoundClick(2)}>
            2 Round
          </button>
          <button
            className={activeRound === 3 ? 'active_btn' : 'disabled_btn'}
            onClick={() => handleRoundClick(3)}>
            3 Round
          </button>
        </div>
        <div className='moto_winner_container'>
          <p>MOTORCYCLE WINNER  <span>00000</span> </p>
        </div>
        <div className="table_container">
          <div className="winner_container">
            <div className="winner">
              <p>01 <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p>02 <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p>03 <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p>04 <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p>05 <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p>06 <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p>07 <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p>08 <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p>09 <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p>10 <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p>11 <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p>12 <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p>13 <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p>14 <span>0000000000</span><span>00000</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
