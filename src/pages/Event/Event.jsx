import "./Event.css";
import EventHero from "./component/EventHero/EventHero";
import { motion, useInView } from "framer-motion";
import leftEventIcon from "../../assets/icons/left-events-icon.png";
import rightEventIcon from "../../assets/icons/right-events-icon.png";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

const Event = () => {
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  const inViewStatuses = sectionRefs.map((ref) =>
    useInView(ref, {
      triggerOnce: true,
      threshold: 0.4,
    })
  );

  const events = [
    [
      "AI Meets Human Resource Management",
      `AI Meets Human Resource Management explores the integration of
            artificial intelligence into HR processes, transforming how
            organizations manage talent, performance, and employee engagement.
            AI enhances HR functions by automating repetitive tasks like
            candidate screening, streamlining the recruitment process, and
            providing data-driven insights for decision-making.`,
    ],
    [
      "AI Meets Marketing Automation",
      `Explore the role of AI in marketing automation, enabling personalized
            campaigns, predictive analytics, and optimizing marketing efforts
            through data-driven strategies.`,
    ],
    [
      "AI in Financial Services",
      `AI is revolutionizing the financial industry by enhancing fraud detection,
            risk management, and improving customer experiences through chatbots
            and personalized services.`,
    ],
  ];

  return (
    <>
      {/* Animation for the Event Hero */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Starts off-screen and transparent
        animate={{ opacity: 1, y: 0 }} // Moves into view and becomes fully visible
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }} // Customize the speed and easing
      >
        <EventHero />
      </motion.div>

      {/* Title Section */}
      <motion.div
        className="event-body-title"
        initial={{ opacity: 0, y: 20 }} // Fade in and slide up
        animate={{ opacity: 1, y: 0 }} // Visible and in position
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} // Smooth and slightly delayed transition
      >
        <div className="blue-title">
          <div className="desc-bar"></div>
          <h4>Our Events</h4>
          <div className="desc-bar"></div>
        </div>
        <h1>Latest Events</h1>
        <p className="hero-desc">
          Get latest updates around our upcoming events and sign up to join for
          free
        </p>
      </motion.div>

      {events.map(([title, eventInfo], index) => {
        const isEven = index % 2 == 0;
        const ref = sectionRefs[index];
        const inView = inViewStatuses[index];

        return (
          <motion.div
            ref={ref} // Attach ref for in-view trigger
            initial={{ opacity: 0, [isEven ? "x" : "y"]: 50 }} // Initial offscreen state
            animate={inView && { opacity: 1, [isEven ? "x" : "y"]: 0 }} // Animate on view
            transition={{ duration: 0.8, ease: "easeOut" }} // Customize speed/easing
            className={`event-section section-${index + 1}`}
            key={index}
          >
            {index !== events.length - 1 && (
              <img
                className={isEven ? "left-one" : "right-one"}
                src={isEven ? leftEventIcon : rightEventIcon}
                alt=""
              />
            )}
            <div className="wrapp">
              <h5>Webinar</h5>
              <h1>{title}</h1>
              <p className="event-desc">{eventInfo}</p>
              <div className="register-date">
                <p className="date-time">Wednesday, October 09, 11 AM ET</p>
                <NavLink to="">
                  <button
                    className={`register-btn ${isEven ? "btn-secondary" : ""}`}
                  >
                    Register
                  </button>
                </NavLink>
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default Event;
