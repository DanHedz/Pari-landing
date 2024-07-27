import React, { useState } from 'react';
import '../Styles/Faq.sass';
import arrow_down from '../assets/arrow.svg';
import arrow_up from '../assets/arrow_up.svg';

const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className='faq'>
      <div className="faq-questiones">
        <h1>FAQ</h1>
        <p>All Your Questions <br /> Answered!</p>
      </div>
      <div className="questiones">
        <div className="question" onClick={() => toggleQuestion(2)}>
          <p>01 <span>How long does the Royal Khazana Tournament last?</span>
            <div>
              <img src={activeQuestion === 2 ? arrow_up : arrow_down} alt="Toggle arrow" />
            </div>
          </p>
          {activeQuestion === 2 && (
            <div className="answer">
              <p>Place a promotional bet of ₹750 on Cricket World Cup 2024, these bets can be single (Single bet) or combined (Parlay), live or pre-match, on Cricket World Cup 2024 with odds of at least 1.75 in a single bet and 1.5 in each parlay bet. Promotional bet points are summed up to determine a player's total points and position in the Rating Leaderboard. You can find out in more detail how points are calculated for each promotional rate in the T&C.</p>
            </div>
          )}
        </div>
      </div>
      <div className="questiones">
        <div className="question" onClick={() => toggleQuestion(3)}>
          <p>02 <span>What are the rounds and dates for the Tournament?</span>
            <div>
              <img src={activeQuestion === 3 ? arrow_up : arrow_down} alt="Toggle arrow" />
            </div>
          </p>
          {activeQuestion === 3 && (
            <div className="answer">
              <p>Place a promotional bet of ₹750 on Cricket World Cup 2024, these bets can be single (Single bet) or combined (Parlay), live or pre-match, on Cricket World Cup 2024 with odds of at least 1.75 in a single bet and 1.5 in each parlay bet. Promotional bet points are summed up to determine a player's total points and position in the Rating Leaderboard. You can find out in more detail how points are calculated for each promotional rate in the T&C.</p>
            </div>
          )}
        </div>

      </div>
      <div className="questiones">
        <div className="question" onClick={() => toggleQuestion(4)}>
          <p>03<span>How can I participate in the Tournament?</span>
            <div>
              <img src={activeQuestion === 4 ? arrow_up : arrow_down} alt="Toggle arrow" />
            </div>
          </p>
          {activeQuestion === 4 && (
            <div className="answer">
              <p>Place a promotional bet of ₹750 on Cricket World Cup 2024, these bets can be single (Single bet) or combined (Parlay), live or pre-match, on Cricket World Cup 2024 with odds of at least 1.75 in a single bet and 1.5 in each parlay bet. Promotional bet points are summed up to determine a player's total points and position in the Rating Leaderboard. You can find out in more detail how points are calculated for each promotional rate in the T&C.</p>
            </div>
          )}
        </div>

      </div>
      <div className="questiones">
        <div className="question" onClick={() => toggleQuestion(5)}>
          <p>04 <span>How do I earn PrizePoints in the Tournament?</span>
            <div>
              <img src={activeQuestion === 5 ? arrow_up : arrow_down} alt="Toggle arrow" />
            </div>
          </p>
          {activeQuestion === 5 && (
            <div className="answer">
              <p>Place a promotional bet of ₹750 on Cricket World Cup 2024, these bets can be single (Single bet) or combined (Parlay), live or pre-match, on Cricket World Cup 2024 with odds of at least 1.75 in a single bet and 1.5 in each parlay bet. Promotional bet points are summed up to determine a player's total points and position in the Rating Leaderboard. You can find out in more detail how points are calculated for each promotional rate in the T&C.</p>
            </div>
          )}
        </div>

      </div>
      <div className="questiones">
        <div className="question" onClick={() => toggleQuestion(6)}>
          <p>05 <span>What rewards can I win in the Tournament?</span>
            <div>
              <img src={activeQuestion === 6 ? arrow_up : arrow_down} alt="Toggle arrow" />
            </div>
          </p>
          {activeQuestion === 6 && (
            <div className="answer">
              <p>Place a promotional bet of ₹750 on Cricket World Cup 2024, these bets can be single (Single bet) or combined (Parlay), live or pre-match, on Cricket World Cup 2024 with odds of at least 1.75 in a single bet and 1.5 in each parlay bet. Promotional bet points are summed up to determine a player's total points and position in the Rating Leaderboard. You can find out in more detail how points are calculated for each promotional rate in the T&C.</p>
            </div>
          )}
        </div>

      </div>
      <div className="questiones">
        <div className="question" onClick={() => toggleQuestion(7)}>
          <p>06 <span>How can I win a motorcycle?</span>
            <div>
              <img src={activeQuestion === 7 ? arrow_up : arrow_down} alt="Toggle arrow" />
            </div>
          </p>
          {activeQuestion === 7 && (
            <div className="answer">
              <p>Place a promotional bet of ₹750 on Cricket World Cup 2024, these bets can be single (Single bet) or combined (Parlay), live or pre-match, on Cricket World Cup 2024 with odds of at least 1.75 in a single bet and 1.5 in each parlay bet. Promotional bet points are summed up to determine a player's total points and position in the Rating Leaderboard. You can find out in more detail how points are calculated for each promotional rate in the T&C.</p>
            </div>
          )}
        </div>

      </div>
      <div className="questiones">
        <div className="question" onClick={() => toggleQuestion(1)}>
          <p>07<span>When will the prize winners be selected?</span>
            <div>
              <img src={activeQuestion === 1 ? arrow_up : arrow_down} alt="Toggle arrow" />
            </div>
          </p>
          {activeQuestion === 1 && (
            <div className="answer">
              <p>Place a promotional bet of ₹750 on Cricket World Cup 2024, these bets can be single (Single bet) or combined (Parlay), live or pre-match, on Cricket World Cup 2024 with odds of at least 1.75 in a single bet and 1.5 in each parlay bet. Promotional bet points are summed up to determine a player's total points and position in the Rating Leaderboard. You can find out in more detail how points are calculated for each promotional rate in the T&C.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Faq;
