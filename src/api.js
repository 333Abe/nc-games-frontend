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
