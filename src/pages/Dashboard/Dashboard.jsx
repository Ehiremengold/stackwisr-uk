import { useSelector } from "react-redux";
import "./Dashboard.css";
import { Helmet } from "react-helmet";
import studyImg from "../../assets/images/studying.png";

const Dashboard = () => {
  const { email } = useSelector((store) => store.signIn);

  const generatedUsername = email.split("@")[0];
  return (
    <>
      <Helmet>
        <title>Dashboard | Stackwisr</title>
      </Helmet>
      <div className="dashboard-hero">
        <div className="content-wrapper">
          <div className="content__text">
            <h1>
              Welcome Back, <br />
              {generatedUsername}!
            </h1>
            <p>Reach new heights Start your online course today!✨</p>
            <button>Back to Courses</button>
          </div>
          <div className="content__illustration">
            <img src={studyImg} alt="" />
          </div>
        </div>
      </div>
      <div className="dashboard-body">
        <div className="left-dashboard-body"></div>
        <div className="main-dashboard-body">
          {/* Most Popular Course */}
          <div className="most-popular-courses">
            <h2>Most Popular Courses</h2>
            <hr />
            <div className="most-popular-courses-row">
              <div className="course-card">
                <div className="course-img-container">
                  <img src="" alt="" />
                </div>
                <div className="course-body-details"></div>
              </div>
              <div className="course-card">
                <div className="course-img-container">
                  <img src="" alt="" />
                </div>
                <div className="course-body-details"></div>
              </div>
            </div>
          </div>

          {/* Newest Courses */}
          <div className="newest-courses">
            <h2>Newest Courses</h2>
            <hr />
            <div className="newest-courses-row">
              <div className="course-card"></div>
              <div className="course-card"></div>
              <div className="course-card"></div>
              <div className="course-card"></div>
              <div className="course-card"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
