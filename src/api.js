import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://adrian-nc-games.onrender.com/api",
});

export const getReviews = () => {
  return gamesApi.get(`/reviews`).then((res) => {
    return res.data.reviews;
  });
};
