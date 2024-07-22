//part-1-d exercises 1.6 --> 1.11 unicafe
import React from "react";
import { useState } from "react";

const Button = ({ handleGoodClick, handleBadClick, handleNeutralClick }) => {
  return (
    <div>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
    </div>
  );
};
const StatisticsLine = ({ value, text }) => {
  // const value = "test"
  // const text = "test"
  return (
    <>
      <td>
        {text} : {value}
      </td>
    </>
  );
};
const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <tr>
            <StatisticsLine value={good} text="good" />
          </tr>
          <tr>
            <StatisticsLine value={neutral} text="neutral" />
          </tr>
          <tr>
            <StatisticsLine value={bad} text="bad" />
          </tr>
          <tr>
            <StatisticsLine value={all} text="all" />
          </tr>
          <tr>
            <StatisticsLine value={average} text="average" />
          </tr>
          <tr>
            <StatisticsLine value={positive + "%"} text="positive" />
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleGoodClick = () => {
    const newGood = good + 1;
    setGood(newGood);
    setAll(newGood + neutral + bad);
    setAverage((newGood - bad) / (newGood + neutral + bad));
    setPositive((newGood / (newGood + neutral + bad)) * 100);
  };
  const handleNeutralClick = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
    setAll(good + newNeutral + bad);
    setAverage((good - bad) / (good + newNeutral + bad));
    setPositive((good / (good + newNeutral + bad)) * 100);
  };
  const handleBadClick = () => {
    const newBad = bad + 1;
    setBad(newBad);
    setAll(good + neutral + newBad);
    setAverage((good - newBad) / (good + neutral + newBad));
    setPositive((good / (good + neutral + newBad)) * 100);
  };

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button
        handleGoodClick={handleGoodClick}
        handleBadClick={handleBadClick}
        handleNeutralClick={handleNeutralClick}
      />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
