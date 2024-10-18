import "./CareerpathDetail.css";
import CareerDetailHero from "./components/CareerDetailHero/CareerDetailHero";
import CareerDetail from "./components/CareerDetailSection/CareerDetail";
import AboutCareerPath from "./components/AboutCareerPath/AboutCareerPath.jsx";
import ProductPricing from "./components/ProductPricing/ProductPricing.jsx";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getCareerpathDetail } from "../../features/careerpaths/careerpathSlice.js";
import PageLoader from "../../components/PageLoader/PageLoader.jsx";
import { useEffect, useState } from "react";
import EnrollForm from "./components/EnrollForm/EnrollForm.jsx";
import { Helmet } from "react-helmet";
import { createLead } from "../../features/lead/leadSlice.js";

const CareerpathDetail = () => {
  const dispatch = useDispatch();

  const [productPlan, setProductPlan] = useState(null);
  const [enrollFormData, setEnrollFormData] = useState(null);

  const { isLoading, careerpath, isError } = useSelector(
    (store) => store.careerpath
  );

  if (productPlan && enrollFormData) {
    dispatch(createLead({ ...productPlan, ...enrollFormData }));
  }

  const location = useLocation();
  
  useEffect(() => {
    dispatch(getCareerpathDetail(location.pathname));
  }, [dispatch, location.pathname]);

  const enrollNow = () => {
    if (document.querySelector(".js-grey-shade").classList.contains("show")) {
      document.body.style.overflow = "auto";
      document.querySelector(".js-grey-shade").classList.remove("show");
    } else {
      document.body.style.overflow = "hidden";
      document.querySelector(".js-grey-shade").classList.add("show");
    }
  };

  if (isLoading) {
    return (
      <div className="center-loader">
        <PageLoader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="center-loader">
        <h4>Error Loading Careerpath</h4>
      </div>
    );
  }

  const {
    img_display,
    career_name,
    description,
    rating,
    what_you_will_learn_list,
    skills_you_will_gain,
    potential_jobs,
  } = careerpath;
  return (
    <>
      <Helmet>
        <title>{`Careerpath | ${career_name} `}</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Starts off-screen and transparent
        animate={{ opacity: 1, y: 0 }} // Moves into view and becomes fully visible
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }} // Customize the speed and easing
      >
        <CareerDetailHero
          img_display={img_display}
          career_name={career_name}
          description={description}
          rating={rating}
        />
      </motion.div>
      <CareerDetail />
      <AboutCareerPath
        wyl={what_you_will_learn_list}
        sywg={skills_you_will_gain}
        pj={potential_jobs}
        description={description}
      />
      <ProductPricing
        enrollNow={enrollNow}
        careerPathName={careerpath.career_name}
        setProductPlan={setProductPlan}
      />
      <EnrollForm
        career_name={career_name}
        enrollNow={enrollNow}
        setEnrollFormData={setEnrollFormData}
      />
    </>
  );
};

export default CareerpathDetail;
