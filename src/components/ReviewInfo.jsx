import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../utils/api";
import CommentsList from "./CommentsList";
import { Error } from "./Error";

const ReviewInfo = () => {
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { review_id } = useParams();

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    getReviewById(review_id)
      .then((data) => {
        setReview(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [review_id]);

  if (isLoading) {
    return <div className="loading">Please wait while this review loads</div>;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className="container">
      <div className="ReviewInfo_img_container">
        <img
          className="ReviewInfo_img"
          src={review.review_img_url}
          alt={review.title}
        />
      </div>

      <h2>{review.title}</h2>
      <p>{review.review_body}</p>
      <CommentsList />
    </div>
  );
};

export default ReviewInfo;
