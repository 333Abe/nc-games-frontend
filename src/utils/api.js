import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://adrian-nc-games.onrender.com/api",
});

export const getReviews = () => {
  return gamesApi.get(`/reviews`).then((res) => {
    return res.data.reviews;
  });
};

export const getReviewById = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};

export const getCommentsByReviewId = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchReviewVote = (review_id, increment) => {
  const patchBody = {
    inc_votes: increment,
  };
  return gamesApi.patch(`/reviews/${review_id}`, patchBody).then((res) => {
    return res.data.review;
  });
};

export const getUsers = () => {
  return gamesApi.get(`/users`).then((res) => {
    return res.data.users;
  });
};

export const postComment = (author, body, review_id) => {
  const postBody = { author: author, body: body };
  return gamesApi
    .post(`/reviews/${review_id}/comments`, postBody)
    .then((res) => {
      return res.data.comment;
    });
};
