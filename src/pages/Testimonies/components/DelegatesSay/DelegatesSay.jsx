import "./DelegatesSay.css";
import stackwisrLogo from "../../../../assets/logo/Ellipse.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTestimonials } from "../../../../features/testimonials/testimonialSlice";
import PageLoader from "../../../../components/PageLoader/PageLoader";

const DelegatesSay = () => {
  const dispatch = useDispatch();

  const { testimonials, isLoading, isError } = useSelector(
    (store) => store.testimonials
  );

  useEffect(() => {
    dispatch(getTestimonials());
  }, [dispatch]);

  return (
    <section className="delegates-say">
      <div className="wrapper">
        <h2 className="hear-what">Hear what our delegates have to say</h2>
        <div className="delegates-say-grid">
          {isLoading && (
            <div className="center-loader">
              <PageLoader />
            </div>
          )}

          {isError && (
            <div className="center-loader">
              <h3 style={{ color: "#fff" }}>Error Loading Testimonials</h3>
            </div>
          )}

          {testimonials.map(({ id, name, job_description, feedback }) => {
            return (
              <div key={id} className="delegates-say-card">
                <img
                  src={stackwisrLogo}
                  alt="stackwisr logo"
                  className="logo"
                />
                <h3>{name}</h3>
                <p className="company-name">{job_description}</p>
                <p>{feedback}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default DelegatesSay;
