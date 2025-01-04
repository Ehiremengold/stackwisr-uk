import "./Cohort.css";
import addUser from "../../../assets/icons/adduser.png";
import selfpace from "../../../assets/icons/selfpace.png";
import { useEffect } from "react";

const Cohort = () => {
  let interval;

  useEffect(() => {
    interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Ensure it runs once immediately

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array to run once on mount

  const updateCountdown = () => {
    const targetDate = new Date("2025-01-10T00:00:00");
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      clearInterval(interval); // Stop the interval
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    updateCircle("days", days, 365);
    updateCircle("hours", hours, 24);
    updateCircle("minutes", minutes, 60);
    updateCircle("seconds", seconds, 60);
  };

  const updateCircle = (id, value, max) => {
    const circle = document.getElementById(id);
    if (!circle) return; // Prevent errors if the element is missing

    const percentage = (value / max) * 100;
    circle.style.background = `conic-gradient(
      white ${percentage}%,
      rgba(255, 255, 255, 0.1) ${percentage}%
    )`;

    const timeSpan = circle.querySelector(".time");
    if (timeSpan) {
      timeSpan.textContent = value;
    }
  };

  return (
    <div className="cohort">
      <div className="wrapper">
        <h1>Join our next Cohort Starting Jan 10th</h1>
        <h4>Register Now and Start your first Class for FREE &rarr;</h4>

        {/* countdown */}
        <div className="countdown">
          <div className="circle" id="days">
            <span className="time">0</span>
            <span className="label">Days</span>
          </div>
          <div className="circle" id="hours">
            <span className="time">0</span>
            <span className="label">Hours</span>
          </div>
          <div className="circle" id="minutes">
            <span className="time">0</span>
            <span className="label">Minutes</span>
          </div>
          <div className="circle" id="seconds">
            <span className="time">0</span>
            <span className="label">Seconds</span>
          </div>
        </div>
        {/* countdown */}

        <div className="we-offer-button-like">
          <div className="button-like">
            <img src={addUser} alt="" />
            <p>Live Virtual - Instruction Led</p>
          </div>
          <div className="button-like">
            <img src={selfpace} alt="" />
            <p>Self Paced</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cohort;
