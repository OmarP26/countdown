import React, { useState, useEffect, Fragment } from "react";
import CircleContainer from "./CircleContainer";
import "../style/Counter.css";

const Countdown = (props) => {
  var initDate = {
    years: 0,
    days: 0,
    hours: 0,
    min: 0,
    sec: 1,
  };
  const [targetDate, setTargetDate] = useState(initDate);
  let isRunning = true;

  useEffect(() => {
    if (
      targetDate.days === 0 &&
      targetDate.hours === 0 &&
      targetDate.min === 0 &&
      targetDate.sec <= 0
    ) {
      isRunning = false;
    }
    setInterval(() => {
      const date = calculateCountdown(props.date);
      date && isRunning ? setTargetDate(date) : clearInterval();
    }, 1000);
    return () => clearInterval();
  }, [isRunning]);

  return (
    <Fragment>
      {targetDate.years === 0 &&
      targetDate.days === 0 &&
      targetDate.hours === 0 &&
      targetDate.min === 0 &&
      targetDate.sec <= 0 ? (
        <div className="clockContainer text">Let's Celebrate!</div>
      ) : (
        <div className="clockContainer">
          <div className="clockContainer clockDisplay">
            <CircleContainer max={365} done={targetDate.days} />
            <div className="clockContainer">
              <strong className="clockContainer text">
                {addLeadingZeros(targetDate.days)}
              </strong>
              <span
                className="clockContainer"
                style={{ fontSize: 20, marginTop: "-10px" }}
              >
                {targetDate.days === 1 ? "Day" : "Days"}
              </span>
            </div>
          </div>
          <div className="clockContainer clockDisplay">
            <CircleContainer max={24} done={targetDate.hours} />
            <div className="clockContainer">
              <strong className="clockContainer text">
                {addLeadingZeros(targetDate.hours)}
              </strong>
              <span
                className="clockContainer"
                style={{ fontSize: 20, marginTop: "-10px" }}
              >
                Hours
              </span>
            </div>
          </div>
          <div className="clockContainer clockDisplay">
            <CircleContainer max={60} done={targetDate.min} />
            <div className="clockContainer">
              <strong className="clockContainer text">
                {addLeadingZeros(targetDate.min)}
              </strong>
              <span
                className="clockContainer"
                style={{ fontSize: 20, marginTop: "-10px" }}
              >
                Minutes
              </span>
            </div>
          </div>
          <div className="clockContainer clockDisplay">
            <CircleContainer max={60} done={targetDate.sec} />
            <div className="clockContainer">
              <strong className="clockContainer text">
                {addLeadingZeros(targetDate.sec)}
              </strong>
              <span
                className="clockContainer"
                style={{ fontSize: 20, marginTop: "-10px" }}
              >
                Seconds
              </span>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

const calculateCountdown = (endDate) => {
  let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

  const timeLeft = {
    years: 0,
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
  };

  if (diff >= 365.25 * 86400) {
    timeLeft.years = Math.floor((diff / 365.25) * 86400);
    diff -= timeLeft.years * 365.25 * 86400;
  }
  if (diff >= 86400) {
    // 24 * 60 * 60
    timeLeft.days = Math.floor(diff / 86400);
    diff -= timeLeft.days * 86400;
  }
  if (diff >= 3600) {
    // 60 * 60
    timeLeft.hours = Math.floor(diff / 3600);
    diff -= timeLeft.hours * 3600;
  }
  if (diff >= 60) {
    timeLeft.min = Math.floor(diff / 60);
    diff -= timeLeft.min * 60;
  }
  timeLeft.sec = diff;

  return timeLeft;
};

const addLeadingZeros = (value) => {
  value = String(value);
  while (value.length < 2) {
    value = "0" + value;
  }
  return value;
};

export default Countdown;
