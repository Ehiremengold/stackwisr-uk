import "./Careerpaths.css";
import { Careerpaths as CareerpathSection } from "../../components/Sections/export.js";
import CareerpathHero from "./component/CareerpathHero/CareerpathHero.jsx";
import GrowWithStackwisr from "./component/GrowWithStackwisr/GrowWithStackwisr.jsx";
import getJobImage from "../../assets/images/get-job.png";
import Recruitment from "./component/Recruitment/Recruitment.jsx";
import { Helmet } from "react-helmet";

const Careerpaths = () => {
  return (
    <>
    <Helmet>
      <title>Stackwisr | Careerpaths</title>
    </Helmet>
      <CareerpathHero />
      <section className="all-paths-with-bg">
        <CareerpathSection />
      </section>
      <GrowWithStackwisr />
      <img className="get-job-image" src={getJobImage} alt="" />
      <Recruitment />
    </>
  );
};
export default Careerpaths;
