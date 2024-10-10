import { motion, useInView } from "framer-motion";
import blueDot from "../../../../../../assets/icons/blue-dot.png";
import { useRef } from "react";

const ProgramCards = () => {
  const programCards = [
    "Flexible Learning",
    "Expert-led Training",
    "Future-Proofed Curriculum",
    "Support Session with Experts",
    "Holistic Talent Development",
    "Comprehensive Learning Paths",
  ];

  return (
    <div className="program-cards-grid">
      <div className="program-cards-grid-1">
        {programCards.slice(0, 4).map((card, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: false }); // Set `once` to false to allow re-triggering if it goes out of view

          return (
            <motion.div
              className="program-card-item"
              key={index}
              ref={ref} // Attach the ref to the motion div
              initial={{ scale: 0 }} // Start from scale 0
              animate={{ scale: isInView ? 1 : 0 }} // Scale to 1 when in view
              transition={{ 
                duration: 0.4, // Duration of the scale animation
                delay: index * 0.1, // Stagger the delay based on index
                ease: "easeOut",
              }}
            >
              <img src={blueDot} alt="" />
              <p>{card}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="program-cards-grid-2">
        {programCards.slice(4).map((card, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: false });

          return (
            <motion.div
              className="program-card-item"
              key={index + 4} // Adjust index for the second grid
              ref={ref} // Attach the ref to the motion div
              initial={{ scale: 0 }} // Start from scale 0
              animate={{ scale: isInView ? 1 : 0 }} // Scale to 1 when in view
              transition={{ 
                duration: 0.4, // Duration of the scale animation
                delay: (index + 4) * 0.1, // Stagger the delay based on index
                ease: "easeOut",
              }}
            >
              <img src={blueDot} alt="" />
              <p>{card}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgramCards;
