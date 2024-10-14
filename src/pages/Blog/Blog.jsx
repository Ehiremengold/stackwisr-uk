import "./Blog.css";
import BlogHero from "./components/BlogHero/BlogHero";
import { Blog as BlogSection } from "../../components/Sections/export";
import darkAuthor from "../../assets/svg/dark-author.svg";
import darkDate from "../../assets/svg/dark-date.svg";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const Blog = () => {
  return (
    <>
      <Helmet>
        <title>StackwisR | Blog</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Starts off-screen and transparent
        animate={{ opacity: 1, y: 0 }} // Moves into view and becomes fully visible
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }} // Customize the speed and easing
      >
        <BlogHero />
      </motion.div>
      <BlogSection />

      <div className="more-posts container">
        {/* card 1 */}
        <div className="more-post-card">
          <div className="card-img-container">
            <img src="" alt="" />
          </div>
          <div className="card-post-desc-container">
            <div className="author-date">
              <div className="author">
                <img src={darkAuthor} alt="" />
                <p>author</p>
              </div>
              <div className="date">
                <img src={darkDate} alt="" />
                <p>created</p>
              </div>
            </div>
            <h5>title</h5>
            <NavLink to="#">
              <h6>Read More</h6>
            </NavLink>
          </div>
        </div>
        {/* card 2 */}
        <div className="more-post-card">
          <div className="card-img-container">
            <img src="" alt="" />
          </div>
          <div className="card-post-desc-container">
            <div className="author-date">
              <div className="author">
                <img src={darkAuthor} alt="" />
                <p>author</p>
              </div>
              <div className="date">
                <img src={darkDate} alt="" />
                <p>created</p>
              </div>
            </div>
            <h5>title</h5>
            <NavLink to="#">
              <h6>Read More</h6>
            </NavLink>
          </div>
        </div>

        {/* card 3 */}
        <div className="more-post-card">
          <div className="card-img-container">
            <img src="" alt="" />
          </div>
          <div className="card-post-desc-container">
            <div className="author-date">
              <div className="author">
                <img src={darkAuthor} alt="" />
                <p>author</p>
              </div>
              <div className="date">
                <img src={darkDate} alt="" />
                <p>created</p>
              </div>
            </div>
            <h5>title</h5>
            <NavLink to="#">
              <h6>Read More</h6>
            </NavLink>
          </div>
        </div>
        {/* card 4 */}

        <div className="more-post-card">
          <div className="card-img-container">
            <img src="" alt="" />
          </div>
          <div className="card-post-desc-container">
            <div className="author-date">
              <div className="author">
                <img src={darkAuthor} alt="" />
                <p>author</p>
              </div>
              <div className="date">
                <img src={darkDate} alt="" />
                <p>created</p>
              </div>
            </div>
            <h5>title</h5>
            <NavLink to="#">
              <h6>Read More</h6>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="load-more">
        <button className="load-more-btn">Load more</button>
      </div>
    </>
  );
};
export default Blog;
