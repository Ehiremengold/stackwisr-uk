import "./AboutUs.css";
import AboutHero from "./components/AboutHero/AboutHero";
import AboutUsExplained from "./components/AboutUsExplained/AboutUsExplained";
import WhyStackwisr from "./components/WhyStackwisr/WhyStackwisr";
import HowWeDiffer from "./components/HowWeDiffer/HowWeDiffer.jsx";
import ProjectPack from "../../components/Sections/ProjectPack/ProjectPack.jsx";
import CareerPath from "../../components/Sections/Careerpaths/Careerpaths.jsx";
import GirlGetStarted from "./components/GirlGetStarted/GirlGetStarted.jsx";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>StackwisR | About Us</title>
      </Helmet>
      <AboutHero />
      <AboutUsExplained />
      <WhyStackwisr />
      <HowWeDiffer />
      <ProjectPack />
      <CareerPath />
      <GirlGetStarted />
    </>
  );
};

export default AboutUs;
