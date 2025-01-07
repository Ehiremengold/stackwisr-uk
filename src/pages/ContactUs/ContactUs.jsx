import "./ContactUs.css";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  return (
    <>
    <Helmet>
    <title>Contact Us | Stackwisr</title>
    </Helmet>
      <section className="contact-us-hero">
        <div className="hero-overlay">
          <h1>Contact Us</h1>
        </div>
      </section>

      <section className="contact-form-body">
        <div className="wrapper"></div>
      </section>
    </>
  );
};
export default ContactUs;
