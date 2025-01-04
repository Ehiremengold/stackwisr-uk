import { Helmet } from "react-helmet";
import Hero from "../../components/Hero/Hero";
import addUser from "../../assets/icons/adduser.png";
import selfpace from "../../assets/icons/selfpace.png";
import {
  Careerpaths,
  Futureproof,
  ProjectPack,
  WhyChooseUs,
  Blog,
  Testimonial,
  CallToAction,
  AssociatedCompanies,
} from "../../components/Sections/export.js";

import "./Home.css";
import { useInView } from "framer-motion";
import { useEffect,useRef } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const heroRef = useRef(null);
  const careerpathsRef = useRef(null);
  const blogRef = useRef(null);
  const futureProofRef = useRef(null);
  const projectPackRef = useRef(null);

  const imageInContainerRef = useRef(null);

  const heroIsInView = useInView(heroRef);
  const careerpathsIsInView = useInView(careerpathsRef, {
    // once: true,
    threshold: 0.9,
  });
  const blogSectionIsInView = useInView(blogRef, {
    // once: true,
    threshold: 0.9,
  });
  const futureProofSection = useInView(futureProofRef, {
    // once: true,
    threshold: 0.9,
  });
  const projectPackSection = useInView(projectPackRef, {
    // once: true,
    threshold: 0.9,
  });

  const imageInWhyChooseUsSection = useInView(imageInContainerRef, {
    // once: true,
    threshold: 0.9,
  });

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
    <>
      <Helmet>
        <title>StackwisR | Home </title>
      </Helmet>

      <>
        <Hero heroRef={heroRef} heroIsInView={heroIsInView} />
        <AssociatedCompanies />
        <motion.div
          ref={careerpathsRef}
          initial={{ opacity: 0, y: 100 }}
          animate={
            careerpathsIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
          }
          transition={{ duration: 0.5 }}
        >
          <Careerpaths />
        </motion.div>

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

        <motion.div
          ref={futureProofRef}
          initial={{ opacity: 0, y: 100 }}
          animate={
            futureProofSection ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
          }
          transition={{ duration: 0.5 }}
        >
          <Futureproof />
        </motion.div>

        <motion.div
          ref={projectPackRef}
          initial={{ opacity: 0, x: -200 }} // `x: -200` translates to `translateX(-200px)`
          animate={
            projectPackSection ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }
          }
          transition={{
            duration: 0.9,
            ease: [0.17, 0.55, 0.55, 1], // cubic-bezier timing function
            delay: 0.3, // Delay for 0.5 seconds
          }}
        >
          <ProjectPack />
        </motion.div>

        <WhyChooseUs
          imageInContainerRef={imageInContainerRef}
          imageInWhyChooseUsSection={imageInWhyChooseUsSection}
        />
        <motion.div
          ref={blogRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            blogSectionIsInView
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.8 }}
        >
          <Blog />
        </motion.div>
        <Testimonial />
        <CallToAction />
      </>
    </>
  );
};
export default Home;
