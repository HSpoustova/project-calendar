import '../pages/HomePage/style.css';
import { useState } from 'react';
import { Modal } from './Modal';

export const GetDays = ({ month, year }) => {
  const [onModal, setModal] = useState(false);
  const [isTask, setTask] = useState({});

  const handleClick = (year, month, day) => {
    setModal(true);
    setTask({ year, month, day });
  };

  const lastDateofMonth = new Date(year, month + 1, 0).getDate();

  const firstDayofMonth =
    new Date(year, month, 1).getDay() === 0
      ? 7
      : new Date(year, month, 1).getDay();
  const lastDateofLastMonth = new Date(year, month, 0).getDate();
  const lastDayofMonth =
    new Date(year, month, lastDateofMonth).getDay() === 0
      ? 7
      : new Date(year, month, lastDateofMonth).getDay();

  let days = [];

  for (let i = firstDayofMonth; i > 1; i--) {
    days.push({ class: 'inactive', day: lastDateofLastMonth - i + 2 });
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday =
      i === new Date().getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? 'active'
        : '';
    days.push({ class: isToday, day: i });
  }

  for (let i = lastDayofMonth; i < 7; i++) {
    days.push({ class: 'inactive', day: i - lastDayofMonth + 1 });
  }

  return (
    <>
      {days.map((day, index) => {
        return (
          <li
            className={day.class}
            key={index}
            onClick={() => handleClick(year, month, day.day)}
          >
            {day.day}
          </li>
        );
      })}
      {onModal ? (
        <Modal
          taskYear={isTask.year}
          taskMonth={isTask.month}
          taskDay={isTask.day}
          setModal={setModal}
        />
      ) : null}
    </>
  );
};
