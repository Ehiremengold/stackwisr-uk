import "./Careerpaths.css";
import { Careerpaths as CareerpathSection } from "../../components/Sections/export.js";
import CareerpathHero from "./component/CareerpathHero/CareerpathHero.jsx";

const Careerpaths = () => {
  return (
    <>
      <CareerpathHero />
      <section className="all-paths-with-bg">
        <CareerpathSection />
      </section>
      <section className="grow-with-stackwisr">
        <div className="wwa-left-top">
          <h4>Grow with Stackwisr</h4>
          <div className="desc-bar"></div>
        </div>
      </section>
    </>
  );
};
export default Careerpaths;
