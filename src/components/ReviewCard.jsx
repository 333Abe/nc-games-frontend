const ReviewCard = ({ review }) => {
  return (
    <div className="ReviewCard">
      <div className="imgContainer">
        <img
          className="reviewImg"
          src={review.review_img_url}
          alt={review.title}
        />
      </div>

      <h3 className="reviewTitle">
        {review.title}
      </h3>
    </div>
  );
};

export default ReviewCard;
