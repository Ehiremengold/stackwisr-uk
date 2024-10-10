import "./Blog.css";
import BlogHero from "./components/BlogHero/BlogHero";
import { Blog as BlogSection } from "../../components/Sections/export";
import side from "../../assets/images/side.png";
import darkAuthor from "../../assets/svg/dark-author.svg";
import darkDate from "../../assets/svg/dark-date.svg";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

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

        {/* card 3 */}
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

        {/* card 4 */}

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

        {/* card 5 */}
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

        {/* card 6 */}

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

      <div className="load-more">
        <button className="load-more-btn">Load more</button>
      </div>
    </>
  );
};
export default Blog;
