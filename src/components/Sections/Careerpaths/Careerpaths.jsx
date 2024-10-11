import "./Careerpaths.css";
import greyPlane from "../../../assets/svg/grey-plane.svg";
import greyPlaneDown from "../../../assets/svg/grey-plane-down.svg";
import careerpathBg from "../../../assets/images/careerpathBg.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PageLoader from "../../PageLoader/PageLoader.jsx";
import { truncateText } from "../../../utils.js";
import { getCareerpaths } from "../../../features/careerpaths/careerpathSlice.js";
// import PageLoader from "../../components/PageLoader/PageLoader.jsx";

const Careerpaths = () => {

  const dispatch = useDispatch();

  const { isLoading, isError, careerpaths } = useSelector(
    (store) => store.careerpath
  );

  useEffect(() => {
    dispatch(getCareerpaths());
  }, [dispatch]);

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
          <PageLoader />
        ) : (
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
        )}
      </div>
    </section>
  );
};
export default Careerpaths;
