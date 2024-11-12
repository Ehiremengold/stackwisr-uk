import { useParams } from "react-router-dom";
import "./BlogDetail.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostDetail } from "../../features/blog/blogSlice";
import DOMPurify from "dompurify";
import PageLoader from "../../components/PageLoader/PageLoader";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const BlogDetail = () => {
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostDetail(param.slug));
  }, [dispatch, param.slug]);

  const { isLoading, isError, post } = useSelector((store) => store.blog);

  if (!post || isLoading) {
    return (
      <div className="center-loader">
        <PageLoader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="center-loader">
        <h3>oops...Something went wrong getting the post!</h3>
      </div>
    );
  }

  const { image, author, title, body, created, meta_description } = post;

  return (
    <>
      <Helmet>
        <title>{`Blog | ${title}`}</title>
        <meta name="description" content={meta_description} />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Starts off-screen and transparent
        animate={{ opacity: 1, y: 0 }} // Moves into view and becomes fully visible
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }} // Customize the speed and easing
      >
        <section
          className="detail"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="post-detail__header">
            <h1>{title}</h1>
            <div className="post-detail__desc">
              <p>By {author}</p>
              <div>|</div>
              <p>{created}</p>
            </div>
          </div>
        </section>
      </motion.div>
      <section className="post-body">
        <div className="post-body__wrapper">
          <div className="left__main-body">
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(body),
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default BlogDetail;
