import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../utils/api";
import CommentsList from "./CommentsList";

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
        console.log(data, "<<< data in reviewInfo");
        setReview(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [review_id]);

  // was just implementing the isLoading and isError functionality here

  return (
    <div>
      <h2>review title</h2>
      <p>some review info</p>
      <CommentsList />
    </div>
  );
};

export default ReviewInfo;
