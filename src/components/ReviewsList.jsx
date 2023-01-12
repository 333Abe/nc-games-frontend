import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { getReviews } from "../utils/api";
import { useParams } from "react-router-dom";

const ReviewsList = ({sortBy, order}) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getReviews(sortBy, order).then((data) => {
      if (category) {
        setReviews(
          data.filter((review) => {
            return review.category === category;
          })
        );
      } else {
        setReviews(data);
      }

      setIsLoading(false);
    });
  }, [category, sortBy, order]);

  if (isLoading) {
    return <div className="loading">Please wait while the reviews load up</div>;
  }

  return (
    <main>
      <div className="ReviewsList">
        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </div>
    </main>
  );
};

export default ReviewsList;
