import "./Blog.css";
import author from "../../../assets/svg/author.svg";
import date from "../../../assets/svg/date.svg";
import darkAuthor from "../../../assets/svg/dark-author.svg";
import darkDate from "../../../assets/svg/dark-date.svg";
import blogBg from "../../../assets/svg/blog-bg.svg";
import main from "../../../assets/images/main.jpg";
import side from "../../../assets/images/side.png";
const Blog = () => {
  return (
    <section className="blog">
      <img src={blogBg} className="blog-bg" alt="" />
      <div className="wrapper">
        <div className="blog-section-title">
          <div className="desc-bar"></div>
          <h4>Blog Update</h4>
          <div className="desc-bar"></div>
        </div>
        <h1 className="blog-section__title">Latest News Update</h1>
        <p className="blog-section__subtitle">
          Get latest updates and news about promotions, deals, news products,
          and also trending happenings in the tech world
        </p>

        <div className="blog-section-grid">
          <div className="main-post">
            <img className="main-post-img" src={main} alt="" />
            <div className="dark-shade">
              <div className="post-desc">
                <div className="author-date">
                  <div className="author">
                    <img src={author} alt="" />
                    <p>By Admin</p>
                  </div>
                  <div className="date">
                    <img src={date} alt="" />
                    <p>Sept 29, 2024</p>
                  </div>
                </div>
                <h2>Top ten tech skills to learn in 2024 to earn 6 figures</h2>
                <a href="/blog">
                  <h4>Explore More</h4>
                </a>
              </div>
            </div>
          </div>

          <div className="more-posts">
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
        </div>
      </div>
    </section>
  );
};
export default Blog;
