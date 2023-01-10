const CommentCard = ({ author, body, votes }) => {
  return (
    <div className="CommentCard">
      <h3>{author} says:</h3>
      <p>{body}</p>
      <p>votes: {votes}</p>
    </div>
  );
};

export default CommentCard;
