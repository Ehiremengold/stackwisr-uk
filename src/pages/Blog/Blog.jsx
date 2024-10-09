import "./Blog.css";
import BlogHero from "./components/BlogHero/BlogHero";
import { Blog as BlogSection } from "../../components/Sections/export";
import side from "../../assets/images/side.png";
import darkAuthor from "../../assets/svg/dark-author.svg";
import darkDate from "../../assets/svg/dark-date.svg";

const Blog = () => {
  return (
    <>
      <BlogHero />
      <BlogSection />
      
      <div className="more-posts container">
        {/* card 1 */}
        <div className="more-posts__card">
          <img className="more-post___img" src={side} alt="" />
          <div className="post-desc">
            <div className="author-date">
              <div className="author">
                <img src={darkAuthor} alt="" />
                <p>By Admin</p>
              </div>
              <div className="date">
                <img src={darkDate} alt="" />
                <p>Sept 29, 2024</p>
              </div>
            </div>
            <h2>Top ten tech skills to learn...</h2>
            <a href="#">
              <h4>Read More</h4>
            </a>
          </div>
        </div>
        {/* card 2 */}
        <div className="more-posts__card">
          <img className="more-post___img" src={side} alt="" />
          <div className="post-desc">
            <div className="author-date">
              <div className="author">
                <img src={darkAuthor} alt="" />
                <p>By Admin</p>
              </div>
              <div className="date">
                <img src={darkDate} alt="" />
                <p>Sept 29, 2024</p>
              </div>
            </div>
            <h2>Top ten tech skills to learn...</h2>
            <a href="#">
              <h4>Read More</h4>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blog;
