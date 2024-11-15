import "./CareerDetail.css";

const CareerDetail = () => {
  return (
    <section className="details-products-pricing">
      <div className="wrapper">
        <div className="tab-control">
          <button className="tab tab-details active">Details</button>
          {/* <button className="tab tab-products">Products</button> */}
          <button
            onClick={() => {
              document.getElementById("products-pricing").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="tab tab-pricing"
          >
            Pricing
          </button>
        </div>
        <div className="tab-body">
          <div className="tab-body-top">
            <div className="col">
              <h3>Program Type</h3>
              <div className="program-types">
                <div>
                  <p>Training</p>
                </div>
                <div>
                  <p>Nano Projects</p>
                </div>
              </div>
            </div>
            <div className="col">
              <h3>Acceptance Rate</h3>
              <p>95%</p>
            </div>
            <div className="col">
              <h3>Classes</h3>
              <p>LIVE</p>
            </div>
            <div className="col">
              <h3>Support</h3>
              <p>YES</p>
            </div>
          </div>
          <hr className="tab-divider" />
          <div className="tab-body-bottom">
            <div className="col">
              <h3>Programme Experience</h3>
              <p>Beginner</p>
            </div>
            <div className="col">
              <h3>Avg. Earnings</h3>
              <p>£50k - £65k</p>
            </div>
            <div className="col">
              <h3>Focus</h3>
              <p>Project Specific</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CareerDetail;
