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
        <div className="more_prizes">
          <div className="more-prize">MORE PRIZE POINTS</div>
          <span className="arrow"> &gt;&gt;<br /> </span>
          <div className="more-prize">MORE CHANCES TO WIN BIG!</div>
        </div>
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
          <div className="winner_number">
            <p><span>№</span><span>User ID</span><span >Prize Points</span></p>
          </div>
          <div className="winner_container">
            <div className="winner">
              <p><span>01</span> <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p><span>02</span> <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p><span>03</span> <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p><span>04</span> <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p><span>05</span> <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p><span>06</span> <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p><span>07</span> <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p><span>08</span> <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p><span>09</span> <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p><span>10</span> <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p><span>11</span> <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p><span>12</span> <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p><span>13</span> <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p><span>14</span> <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p><span>15</span> <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p><span>16</span> <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p><span>17</span> <span>0000000000</span><span>00000</span></p>
            </div>
            <div className="winner">
              <p><span>18</span> <span>0000000000</span><span>00000</span></p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
