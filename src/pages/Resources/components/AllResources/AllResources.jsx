import { useEffect } from "react";
import "./AllResources.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getResources,
  incrementResources,
} from "../../../../features/resources/resourcesSlice";
import PageLoader from "../../../../components/PageLoader/PageLoader";

const AllResources = () => {
  const dispatch = useDispatch();

  const { resources, more, isLoading, isError, page } = useSelector(
    (store) => store.resources
  );
  useEffect(() => {
    dispatch(getResources(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    dispatch(getResources(page + 1));
    dispatch(incrementResources(page));
  };

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
        <div className="error-msg">Error fetching Resources</div>
      </div>
    );
  }

  if (!resources || resources.length < 1) {
    return (
      <div className="center-loader">
        <h2>No posts Available</h2>
      </div>
    );
  }

  return (
    <>
      <div className="all-resources">
        {resources.map((resource) => {
          const { id, title, slug, description, created } = resource;
          return (
            <div className="resource-card" key={id}>
              <h3>{title}</h3>
              <p>{description}</p>
              <h5 onClick>Get Now</h5>
            </div>
          );
        })}
      </div>
      <div className="load-more">
        {more && (
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load more
          </button>
        )}
      </div>
    </>
  );
};
export default AllResources;
