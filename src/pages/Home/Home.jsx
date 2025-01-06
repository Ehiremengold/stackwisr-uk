import { Helmet } from "react-helmet";
import Hero from "../../components/Hero/Hero";

import {
  Careerpaths,
  Futureproof,
  ProjectPack,
  WhyChooseUs,
  Blog,
  Testimonial,
  CallToAction,
  AssociatedCompanies,
  Cohort,
  OurProgrammeOffer,
  OurFaculty,
} from "../../components/Sections/export.js";

import "./Home.css";
import { useInView } from "framer-motion";
import { useRef } from "react";
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
    once: true,
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

  return (
    <>
      <Helmet>
        <title>StackwisR | Home </title>
        <meta
          name="description"
          content="Unlock your career potential with Stackwisr's innovative programs, expert guidance, and a growth-oriented community. Start your journey to success today!"
        ></meta>
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

        <Cohort />

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

        <OurProgrammeOffer />

        <OurFaculty />

        <WhyChooseUs
          imageInContainerRef={imageInContainerRef}
          imageInWhyChooseUsSection={imageInWhyChooseUsSection}
        />

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
