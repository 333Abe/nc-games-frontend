import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import Error from "./Error";
import { getReviews } from "../utils/api";
import { useParams } from "react-router-dom";

const ReviewsList = ({ sortBy, order }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    getReviews(sortBy, order, category)
      .then((data) => {
        setReviews(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [category, sortBy, order]);

  if (isLoading) {
    return <div className="loading">Please wait while the reviews load up</div>;
  }

  if (isError) {
    return <Error msg={`${category} isn't a valid category`} />;
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
