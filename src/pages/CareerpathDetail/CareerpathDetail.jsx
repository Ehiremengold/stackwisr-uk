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

  useEffect(() => {
    // Trigger lead creation only when both states are set
    if (productPlan && enrollFormData) {
      dispatch(
        createLead({
          careerPathName: careerpath.career_name,
          selectedPlan: productPlan,
          ...enrollFormData,
        })
      );
    }
  }, [productPlan, careerpath.career_name, enrollFormData, dispatch]);

  const countries = [
    "uk",
    "canada",
    "usa",
    "america",
    "nigeria",
    "india",
    "australia",
    "south africa",
    "ghana",
    "kenya",
    "uganda",
    "tanzania",
    "new zealand",
    "ireland",
    "germany",
    "france",
    "spain",
    "italy",
    "switzerland",
    "netherlands",
    "belgium",
    "portugal",
    "sweden",
    "norway",
    "denmark",
    "finland",
    "poland",
    "czech republic",
    "slovakia",
    "slovenia",
    "croatia",
    "hungary",
    "romania",
    "bulgaria",
    "greece",
    "turkey",
    "russia",
    "china",
    "japan",
    "south korea",
    "singapore",
    "malaysia",
    "indonesia",
    "philippines",
    "vietnam",
    "thailand",
    "ukraine",
  ];

  const location = useLocation();

  useEffect(() => {
    dispatch(getCareerpathDetail(location.pathname));
  }, [dispatch, location.pathname]);

  const enrollNow = () => {
    document.body.style.overflow = "hidden";
    document.querySelector(".js-grey-shade").classList.add("show");
  };

  const clearForm = () => {
    document.body.style.overflow = "auto";
    document.querySelector(".js-grey-shade").classList.remove("show");
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
    course_start_date,
  } = careerpath;

  const countryDescriptions = countries
    .map(
      (country) =>
        `${career_name} in ${country}, learn ${career_name} in ${country}`
    )
    .join(", ");

  // ${career_name} programs in uk,

  const programInCountry = countries
    .map((country) => `${career_name} programs in ${country}`)
    .join(", ");

  // data analytics certification online canada

  const careerCertificationInCountries = countries
    .map((country) => `${career_name} certification online ${country}`)
    .join(", ");
  
  const bestTraining = countries((country) => `best ${career_name} training  in ${country}`).join(", ");

  return (
    <>
      <Helmet>
        <title>{`Careerpath | ${career_name} `}</title>
        <meta
          name="description"
          content={`${bestTraining}, learning path for ${career_name}, learn to become a ${career_name}, start a career in ${career_name}, build a career in ${career_name}, switching career to ${career_name} in your 30s, ${career_name} live classes, career switch to ${career_name}, ${career_name} job opportunities, courses to become a ${career_name}, what is ${career_name}, training to be a ${career_name}, best courses for ${career_name}, ${career_name} role, ${career_name} what to learn, get started in IT, get started in tech, path to be ${career_name}, job ${career_name}, hands on it training, fastest way  to become a ${career_name}, ${countryDescriptions}, ${careerCertificationInCountries}, best courses for ${career_name}, ${career_name} job training, getting into ${career_name}, difference between ${career_name}, ${career_name} in india, path to ${career_name}, ${career_name} certificate program, about ${career_name}, learn ${career_name} from scratch, professional certificate in ${career_name}, ${career_name} programmes, ${programInCountry},skills required for ${career_name}, best place to learn ${career_name}, ${career_name} job requirements, ${career_name} program, ${career_name} programs,v${career_name} certification online, ${career_name} certification courses, best ${career_name} courses, ${career_name} courses for working professionals, learn to be a ${career_name},${career_name} career, ${career_name} skill, ${career_name} schooling,${career_name} skills, ${career_name} classes near me, ${career_name} training uk, ${career_name} near me, ${career_name} professional certification, ${career_name} professional certificate, ${career_name} classes, ${career_name} how to become, become a ${career_name}, ${career_name} career path, learn ${career_name}, ${career_name} courses, learn ${career_name} UK,learn ${career_name} uk, learn ${career_name} nigeria, ${career_name} education, ${career_name} certification, ${career_name} certificate, ${career_name} training, ${career_name} course, ${career_name} learning, `}
        />
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
          course_start_date={course_start_date}
        />
      </motion.div>
      <CareerDetail />
      <AboutCareerPath
        wyl={what_you_will_learn_list}
        sywg={skills_you_will_gain}
        pj={potential_jobs}
        description={description}
      />
      <ProductPricing enrollNow={enrollNow} setProductPlan={setProductPlan} />
      <EnrollForm
        career_name={career_name}
        clearForm={clearForm}
        enrollNow={enrollNow}
        setEnrollFormData={setEnrollFormData}
      />
    </>
  );
};

export default CareerpathDetail;
