import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ReviewsList from "./components/ReviewsList";
import ReviewInfo from "./components/ReviewInfo";
import LogIn from "./components/LogIn";

function App() {
  const [reviews, setReviews] = useState([])

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<ReviewsList reviews={reviews} setReviews={setReviews}/>} />
        <Route path="/reviews" element={<ReviewsList reviews={reviews} setReviews={setReviews}/>} />
        <Route path="/reviews/:review_id" element={<ReviewInfo />} />
        <Route path="/log-in" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
