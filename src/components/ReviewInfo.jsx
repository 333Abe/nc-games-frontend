import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../utils/api";
import CommentsList from "./CommentsList";
import { Error } from "./Error";
import { patchReviewVote } from "../utils/api";

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

  const upVote = (review_id) => {
    // update votes optimistically
    setReview({ ...review, votes: review.votes + 1 });
    // interact with the server
    patchReviewVote(review_id, 1).catch((err) => {
      setReview({ ...review, votes: review.votes - 1 });
    });
  };

  const downVote = (review_id) => {
    // update votes optimistically
    setReview({ ...review, votes: review.votes - 1 });
    // interact with the server
    patchReviewVote(review_id, -1).catch((err) => {
      setReview({ ...review, votes: review.votes + 1 });
    });
  };

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
      <span>
        <button onClick={() => upVote(review_id)}>&#x1F44D;</button>
        <span aria-label="votes for this review"> {review.votes} </span>
        <button onClick={() => downVote(review_id)}>&#x1F44E;</button>
      </span>

      <CommentsList review_id={review_id} />
    </div>
  );
};

export default ReviewInfo;
