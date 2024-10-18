import "./Careerpaths.css";
import greyPlane from "../../../assets/svg/grey-plane.svg";
import greyPlaneDown from "../../../assets/svg/grey-plane-down.svg";
import careerpathBg from "../../../assets/images/careerpathBg.png";
import { useSelector } from "react-redux";
import PageLoader from "../../PageLoader/PageLoader.jsx";
import { truncateText } from "../../../utils.js";



const Careerpaths = () => {
  const { isLoading, isError, careerpaths } = useSelector(
    (store) => store.careerpath
  );

  return (
    <section className="career-paths">
      <div className="wrapper">
        <img src={greyPlane} className="section-plane-2" alt="" />
        <img src={greyPlaneDown} className="section-plane" alt="" />
        <div className="section-header__text">
          <div className="main-desc">
            <div className="desc-bar"></div>
            <h4>Career Paths</h4>
            <div className="desc-bar"></div>
          </div>
          <h1>Explore Our Career Paths</h1>
          <h3>
            Unlock new career opportunities in the most in-demand fields with
            our expert-led programs
          </h3>
        </div>
        {isError && (
          <div className="center-loader">
            <h4>Error Loading Careerpaths</h4>
          </div>
        )}
        {isLoading ? (
          <div className="center-loader">
            <PageLoader />
          </div>
        ) : (
          <>
            <div className="career-paths__cards">
              {careerpaths.map((careerpath) => {
                const { id, career_name, slug, description } = careerpath;
                return (
                  <div key={id} className="career-paths__card">
                    <img src={careerpathBg} alt="" />
                    <h3>{career_name}</h3>
                    <p>{truncateText(description, 90)}</p>
                    <a href={`/careerpaths/${slug}`}>
                      <button className="more-btn">Learn more</button>
                    </a>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
export default Careerpaths;
