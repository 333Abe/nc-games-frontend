import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Sort from "./components/Sort";
import ReviewsList from "./components/ReviewsList";
import ReviewInfo from "./components/ReviewInfo";
import LogIn from "./components/LogIn";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [order, setOrder] = useState("asc");
  const [isSortVisible, setIsSortVisible] = useState(false);

  return (
    <div className="App">
      <Header />
      <NavBar
        isSortVisible={isSortVisible}
        setIsSortVisible={setIsSortVisible}
        user={user}
      />
      <Sort
        isSortVisible={isSortVisible}
        setSortBy={setSortBy}
        setOrder={setOrder}
      />
      <Routes>
        <Route
          path="/"
          element={<ReviewsList sortBy={sortBy} order={order} />}
        />
        <Route
          path="/reviews"
          element={<ReviewsList sortBy={sortBy} order={order} />}
        />
        <Route
          path="/reviews/categories/:category"
          element={<ReviewsList sortBy={sortBy} order={order} />}
        />
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
