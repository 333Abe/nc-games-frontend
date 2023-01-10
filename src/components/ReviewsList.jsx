import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { getReviews } from "../utils/api";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getReviews().then((data) => {
      setReviews(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="loading">Please wait while the reviews load up</div>;
  }

  return (
    <div className="ReviewsList">
      {reviews.map((review) => {
        return <ReviewCard key={review.review_id} review={review} />;
      })}
    </div>
  );
};

export default ReviewsList;
