import "./Blog.css";
import author from "../../../assets/svg/author.svg";
import date from "../../../assets/svg/date.svg";
import darkAuthor from "../../../assets/svg/dark-author.svg";
import darkDate from "../../../assets/svg/dark-date.svg";
import blogBg from "../../../assets/svg/blog-bg.svg";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { latestBlogPosts } from "../../../features/blog/blogSlice";
import PageLoader from "../../PageLoader/PageLoader";
import { ROOT_URL } from "../../../utils";

const Blog = () => {
  const dispatch = useDispatch();

  const { isLoading, isError, latestPosts } = useSelector(
    (store) => store.blog
  );

  useEffect(() => {
    dispatch(latestBlogPosts());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="center-loader">
        <PageLoader />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="center-loader">
        <div className="error-msg">Error fetching posts</div>
      </div>
    );
  }

  if (!latestPosts || latestPosts.length < 1) {
    return (
      <div className="center-loader">
        <h2>No posts Available</h2>
      </div>
    );
  }
  const mainPost = latestPosts[0];

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
            <img
              className="main-post-img"
              src={ROOT_URL + mainPost.image}
              alt=""
            />
            <div className="dark-shade">
              <div className="post-desc">
                <div className="author-date">
                  <div className="author">
                    <img src={author} alt="" />
                    <p>{mainPost.author}</p>
                  </div>
                  <div className="date">
                    <img src={date} alt="" />
                    <p>{mainPost.created}</p>
                  </div>
                </div>
                <h2>{mainPost.title}</h2>
                <a href="/">
                  <h4>Explore more like this</h4>
                </a>
              </div>
            </div>
          </div>

          <div className="more-posts">
            {latestPosts.slice(1).map((post) => {
              return (
                <div key={post.id} className="more-post-card">
                  <div className="card-img-container">
                    <img src={ROOT_URL + post.image} alt="" />
                  </div>
                  <div className="card-post-desc-container">
                    <div className="author-date">
                      <div className="author">
                        <img src={darkAuthor} alt="" />
                        <p>{post.author}</p>
                      </div>
                      <div className="date">
                        <img src={darkDate} alt="" />
                        <p>{post.created}</p>
                      </div>
                    </div>
                    <h5>{post.title}</h5>
                    <a href="#">
                      <h6>Read More</h6>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
