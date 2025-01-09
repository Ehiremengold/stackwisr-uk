import "./NotFound.css";
import notFoundImg from "../../assets/icons/notfound.png";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img src={notFoundImg} alt="stackwisr-img page-not-found" />
      <h1>Oops...This page doesn&apos;t exist :(</h1>
    </div>
  );
};
export default NotFound;
