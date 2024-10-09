import "./BlogHero.css";
import storiesmoreImg from "../../../../assets/images/stories-more.png";

const BlogHero = () => {
  return (
    <section className="stories-more">
      <div className="wrapper">
        <div className="stories-more-title">
          <h1>
            STORIES <br />
            &nbsp;&nbsp;&nbsp;& MORE
          </h1>
        </div>
        <p>
          Stay informed and inspired with the latest updates, trends, and
          insights in the world of technology. From industry news to expert
          opinions, our blog is your go-to source for all things tech.
        </p>
        <img src={storiesmoreImg} alt="" />
      </div>
    </section>
  );
};
export default BlogHero;
