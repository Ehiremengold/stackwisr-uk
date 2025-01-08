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
        <div className="wrapper">
          <div className="left-contact-side">
            <h3>
              Contact us about anything related to our company or services.
              We&apos;ll do our best to get back to you as soon as possible.
            </h3>

            <form action="" className="contact-form-box">
              <div className="contact-form-row">
                <div className="contact-form-column">
                  <label htmlFor="name">Name</label>
                  <input
                    required
                    type="text"
                    id="name"
                    placeholder="Name"
                    name="name"
                  />
                </div>

                <div className="contact-form-column">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="text"
                    id="phone-number"
                    placeholder="Phone Number"
                    name="phone-number"
                  />
                </div>
              </div>
              <div className="contact-form-row">
                <div className="contact-form-column">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    required
                    id="email"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div className="contact-form-column">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    required
                    id="company"
                    placeholder="Company"
                    name="company"
                  />
                </div>
              </div>
              <div className="contact-form-column">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  required
                  id="subject"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="contact-form-column">
              <label htmlFor="body">Body</label>
              <textarea name="" rows={7} id=""></textarea>
              </div>
              <button className="contact-form-submit-btn" disabled>Submit</button>
            </form>
          </div>
          <div className="right-contact-side">
            <h2>StackwisR Limited</h2>
            <p>
              <i className="fa fa-map-marker"></i>&nbsp; Solent Business Park,
              Steel House, Plot 4300 Fareham Hampshire PO15 7FP
            </p>
            <p>
              <i className="fa fa-phone"></i>&nbsp; +44 788-887-1630
            </p>
            <p>
              <i className="fa fa-envelope"></i>&nbsp; cx@stackwisr.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactUs;
