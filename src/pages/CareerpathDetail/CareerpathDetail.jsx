import "./CareerpathDetail.css";
import CareerDetailHero from "./components/CareerDetailHero/CareerDetailHero";
import CareerDetail from "./components/CareerDetailSection/CareerDetail";
import AboutCareerPath from "./components/AboutCareerPath/AboutCareerPath.jsx";
import ProductPricing from "./components/ProductPricing/ProductPricing.jsx";

const CareerpathDetail = () => {
  return (
    <>
      <CareerDetailHero />
      <CareerDetail />
      <AboutCareerPath />
      <ProductPricing />
    </>
  );
};

export default CareerpathDetail;
