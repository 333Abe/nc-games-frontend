import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  return (
    <div className="ReviewCard">
      <Link to={`/reviews/${review.review_id}`}>
        <div className="imgContainer">
          <img
            className="reviewImg"
            src={review.review_img_url}
            alt={review.title}
          />
        </div>

        <h3 className="reviewTitle">{review.title}</h3>
      </Link>
    </div>
  );
};

export default ReviewCard;
