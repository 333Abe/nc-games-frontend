import { useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { getReviews } from "../api";

const ReviewsList = ({ reviews, setReviews }) => {
  useEffect(() => {
    getReviews().then((data) => {
      setReviews(data);
    });
  }, []);

  return (
    <div className="ReviewsList">
      {reviews.map((review) => {
        return <ReviewCard key={review.review_id} review={review} />;
      })}
    </div>
  );
};

export default ReviewsList;
