import './style.css';
import { GetMonth } from '../../components/GetMonth.jsx';
import { GetDays } from '../../components/GetDays.jsx';
import { useState } from 'react';

export const HomePage = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const handleClickNext = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };
  const handleClickPrev = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  console.log(currentMonth, currentYear);

  return (
    <div className="container">
      <div className="wrapper">
        <header>
          <GetMonth month={currentMonth} year={currentYear} />
          <div className="icons">
            <span className="icons__symbols-rounded" onClick={handleClickPrev}>
              &lt;
            </span>
            <span className="icons__symbols-rounded" onClick={handleClickNext}>
              &gt;
            </span>
          </div>
        </header>
        <div className="calendar">
          <ul className="calendar__weeks">
            <li>Po</li>
            <li>Út</li>
            <li>St</li>
            <li>Čt</li>
            <li>Pá</li>
            <li>So</li>
            <li>Ne</li>
          </ul>
          <ul className="calendar__days">
            <GetDays month={currentMonth} year={currentYear} />
          </ul>
        </div>
      </div>
    </div>
  );
};
