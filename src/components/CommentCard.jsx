const CommentCard = ({ author, body, votes }) => {
  return (
    <div className="CommentCard">
      <h3>{author} says:</h3>
      <p>{body}</p>
      <span aria-label="votes for this comment">{votes}</span>
    </div>
  );
};

export default CommentCard;
