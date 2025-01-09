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
            <h1>Welcome Back, <br/>{generatedUsername}!</h1>
            <p>Reach new heights Start your online course today!✨</p>
            <button>Back to Courses</button>
          </div>
          <div className="content__illustration">
            <img src={studyImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
