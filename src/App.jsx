import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ReviewsList from "./components/ReviewsList";
import ReviewInfo from "./components/ReviewInfo";
import LogIn from "./components/LogIn";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");

  return (
    <div className="App">
      <Header />
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<ReviewsList />} />
        <Route path="/reviews" element={<ReviewsList />} />
        <Route
          path="/reviews/:review_id"
          element={<ReviewInfo user={user} />}
        />
        <Route
          path="/log-in"
          element={<LogIn user={user} setUser={setUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
