import CommentCard from "./CommentCard";
import { Error } from "./Error";
import { useEffect, useState } from "react";
import { getCommentsByReviewId } from "../utils/api";

const CommentsList = ({ review_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCommentsByReviewId(review_id)
      .then((data) => {
        setComments(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setisError(true);
        setIsLoading(false);
      });
  }, [review_id]);

  if (isLoading) {
    return <div className="loading">comments are loading</div>;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className="CommentsList">
      <h3>Comments:</h3>
      {comments.map((comment) => {
        return (
          <CommentCard
            author={comment.author}
            body={comment.body}
            votes={comment.votes}
            key={comment.comment_id}
          />
        );
      })}
    </div>
  );
};

export default CommentsList;
