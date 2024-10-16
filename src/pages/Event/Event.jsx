import "./Event.css";
import EventHero from "./component/EventHero/EventHero";
import { motion, useInView } from "framer-motion";
import leftEventIcon from "../../assets/icons/left-events-icon.png";
import rightEventIcon from "../../assets/icons/right-events-icon.png";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

const Event = () => {
  // Create refs for each section
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  // Use useInView for each section, referencing the corresponding ref
  const eventSection1InView = useInView(section1Ref, {
    triggerOnce: true,
    threshold: 0.4,
  });
  const eventSection2InView = useInView(section2Ref, {
    triggerOnce: true,
    threshold: 0.4,
  });
  const eventSection3InView = useInView(section3Ref, {
    triggerOnce: true,
    threshold: 0.4,
  });

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

      <motion.div
        ref={section1Ref} // Attach ref for in-view trigger
        initial={{ opacity: 0, y: 50 }} // Initial offscreen state
        animate={eventSection1InView ? { opacity: 1, y: 0 } : {}} // Animate on view
        transition={{ duration: 0.8, ease: "easeOut" }} // Customize speed/easing
        className="event-section section-1"
      >
        <img className="left-one" src={leftEventIcon} alt="" />
        <div className="wrapp">
          <h5>Webinar</h5>
          <h1>AI Meets Human Resource Management</h1>
          <p className="event-desc">
            AI Meets Human Resource Management explores the integration of
            artificial intelligence into HR processes, transforming how
            organizations manage talent, performance, and employee engagement.
            AI enhances HR functions by automating repetitive tasks like
            candidate screening, streamlining the recruitment process, and
            providing data-driven insights for decision-making.
          </p>
          <div className="register-date">
            <p className="date-time">Wednesday, October 09, 11 AM ET</p>
            <NavLink to="">
              <button className="register-btn btn-secondary">Register</button>
            </NavLink>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={section2Ref}
        initial={{ opacity: 0, x: 50 }}
        animate={eventSection2InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="event-section section-2"
      >
        <img src={rightEventIcon} className="right-one" alt="" />
        <div className="wrapp">
          <h5>Webinar</h5>
          <h1>AI Meets Human Resource Management</h1>
          <p className="event-desc">
            AI Meets Human Resource Management explores the integration of
            artificial intelligence into HR processes, transforming how
            organizations manage talent, performance, and employee engagement.
            AI enhances HR functions by automating repetitive tasks like
            candidate screening, streamlining the recruitment process, and
            providing data-driven insights for decision-making.
          </p>
          <div className="register-date">
            <p className="date-time">Wednesday, October 09, 11 AM ET</p>
            <NavLink to="">
              <button className="register-btn">Register</button>
            </NavLink>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={section3Ref}
        initial={{ opacity: 0, y: 50 }}
        animate={eventSection3InView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="event-section section-3"
      >
        <div className="wrapp">
          <h5>Webinar</h5>
          <h1>AI Meets Human Resource Management</h1>
          <p className="event-desc">
            AI Meets Human Resource Management explores the integration of
            artificial intelligence into HR processes, transforming how
            organizations manage talent, performance, and employee engagement.
            AI enhances HR functions by automating repetitive tasks like
            candidate screening, streamlining the recruitment process, and
            providing data-driven insights for decision-making.
          </p>
          <div className="register-date">
            <p className="date-time">Wednesday, October 09, 11 AM ET</p>
            <NavLink to="">
              <button className="register-btn btn-secondary">Register</button>
            </NavLink>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Event;
