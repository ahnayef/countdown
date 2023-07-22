"use client"

import { useState, useEffect } from 'react';
import style from './countdown.module.css';

export default function Countdown(props: any) {
  const { targetDate, title } = props;

  const [difference, setDifference] = useState(0);
  const [weeks, setWeeks] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let date1 = new Date();
      let date2 = new Date(targetDate);
      let difference = date2.getTime() - date1.getTime();
      let weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
      let days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 7);
      let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      let minutes = Math.floor((difference / (1000 * 60)) % 60);
      let seconds = Math.floor((difference / 1000) % 60);

      setDifference(difference);
      setWeeks(weeks);
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className={style.countdownMain}>
      <h1 className={style.title}>{title}</h1>
      <div className={style.countdown}>
        {difference < 0 ? "The time has come!" :
        <div>{weeks} weeks {days} days {hours} hours {minutes} minutes {seconds} seconds</div>
        }
      </div>
    </div>
  );
}