import "./Event.css";
import EventHero from "./component/EventHero/EventHero";
import { motion } from "framer-motion";

const Event = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Starts off-screen and transparent
        animate={{ opacity: 1, y: 0 }} // Moves into view and becomes fully visible
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }} // Customize the speed and easing
      >
        <EventHero />
      </motion.div>

      <div className="event-body-title">
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
      </div>

      <div className="event-body-section">
        <div className="wrapper"></div>
      </div>
    </>
  );
};
export default Event;
