"use client"

import { useState, useEffect, useRef } from 'react';
import style from './countdown.module.css';
import VanillaTilt from 'vanilla-tilt';
import { FaGithub } from 'react-icons/fa';
import ReactGA from "react-ga4";

export default function Countdown(props: any) {
  const { targetDate, title, subtitle } = props;
  const [difference, setDifference] = useState(0);
  const [weeks, setWeeks] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [date, setDate] = useState(new Date());
  const [today, setToday] = useState(date.toLocaleDateString("en-US", { weekday: 'long' }));

  const MID = process.env.NEXT_PUBLIC_MID;


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


  const tiltRef = useRef(null);

  useEffect(() => {

    ReactGA.initialize(`${MID}`);
    ReactGA.send("pageview");

    ReactGA.event({
      category: 'Page Visit',
      action: `${today}`,
      label: `Page Visit ${today}`,
    });



    let width = document.body.clientWidth;
    if (width < 769) {
    } else {
      const tiltElement = tiltRef.current;
      if (tiltElement) {
        VanillaTilt.init(tiltElement, {
          max: 20,
          glare: true,
          "max-glare": 0.3,
          gyroscope: true, // Enable gyroscope on mobile devices
          gyroscopeMinAngleX: -45,
          gyroscopeMaxAngleX: 45,
          gyroscopeMinAngleY: -45,
          gyroscopeMaxAngleY: 45,
          scale: 1.1
        });
      }

    }

  }, []);


  return (
    <div className={style.countdownMain}>
      <a id={style.gitIcon} href="https://github.com/ahnayef/countdown" target='_'><FaGithub /></a>
      <h1 className={style.title}>North East University Bangladesh</h1>
      <h2 className={style.exam}>{title}</h2>
      <div className={style.countdown} ref={tiltRef} >
        {difference < 0 ? "The time has come!" :
          // <div>{weeks} weeks {days} days {hours} hours {minutes} minutes {seconds} seconds</div>
          <>
            <div className={style.cdBox}>
              <div className={style.cdTime}>{weeks}</div>
              <div className={style.cdTname}>Weeks</div>
            </div>

            <div className={style.cdBox}>
              <div className={style.cdTime}>{days}</div>
              <div className={style.cdTname}>Days</div>
            </div>

            <div className={style.cdBox}>
              <div className={style.cdTime}>{hours}</div>
              <div className={style.cdTname}>hours</div>
            </div>

            <div className={style.cdBox}>
              <div className={style.cdTime}>{minutes}</div>
              <div className={style.cdTname}>Minute</div>
            </div>

            <div className={style.cdBox}>
              <div className={style.cdTime}>{seconds}</div>
              <div className={style.cdTname}>Seconds</div>
            </div>
          </>


        }
      </div>
      {
        difference < 0 ? <p className={style.subtitle}>The time has come!</p> :
          <p className={style.subtitle}>Time left for the exam</p>
      }
    </div>
  );
}