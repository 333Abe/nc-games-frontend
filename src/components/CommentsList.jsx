import CommentCard from "./CommentCard";
import Error from "./Error";
import { useEffect, useState } from "react";
import { getCommentsByReviewId, postComment } from "../utils/api";
import { Link } from "react-router-dom";

const CommentsList = ({ review_id, user }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setisError] = useState(false);
  const [noInternet, setNoInternet] = useState(false);
  const [emptyComment, setEmptyComment] = useState(false);

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

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment !== "") {
      setEmptyComment(false);
      postComment(user, newComment, review_id)
        .then((postedComment) => {
          setComments([postedComment, ...comments]);
          setNewComment("");
          setNoInternet(false);
        })
        .catch((err) => {
          setNoInternet(true);
          console.log("error in handleAddComment");
        });
    } else {
      setEmptyComment(true);
    }
  };

  return (
    <div className="CommentsList">
      <h3>Comments:</h3>
      <span>
        {user === "" ? (
          <Link to="/log-in">log in to comment</Link>
        ) : (
          <form onSubmit={handleAddComment}>
            <label htmlFor="newComment">Add a comment</label>
            <input
              id="newComment"
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Have your say..."
            ></input>
            <button>Add comment</button>
            {noInternet ? (
              <p className="postingError">you can't post comments offline</p>
            ) : null}
            {emptyComment ? (
              <p className="postingError">don't try posting empty comments!</p>
            ) : null}
          </form>
        )}
      </span>
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
