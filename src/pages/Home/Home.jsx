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
} from "../../components/Sections/export.js";

import "./Home.css";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>StackwisR | Home </title>
      </Helmet>

      <>
        <Hero />
        <Careerpaths />
        <Futureproof />
        <ProjectPack />
        <WhyChooseUs />
        <Blog />
        <Testimonial />
        <CallToAction />
      </>
    </>
  );
};
export default Home;
