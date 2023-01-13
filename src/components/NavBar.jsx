import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCategories } from "../utils/api";

const NavBar = ({ user, isSortVisible, setIsSortVisible }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const { category } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getCategories().then((data) => {
      setCategories(
        data.map((cat) => {
          return cat.slug;
        })
      );
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>loading categories</p>;
  }

  const handleCategoryChange = (cat) => {
    navigate(`/reviews/categories/${cat}`);
  };

  return (
    <span className="container nav">
      <button
        onClick={() => {
          setIsSortVisible(!isSortVisible);
        }}
      >
        {isSortVisible ? `hide sort` : `show sort`}
      </button>
      <span>
        <select
          value={category}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          {categories.map((category, index) => {
            return (
              <option key={index} value={category}>
                {category}
              </option>
            );
          })}
        </select>
        <span> </span>
        <Link to="/">Reset category</Link>
      </span>

      <Link to="/log-in">Log-in</Link>
      <p>{user === "" ? `not logged in` : `logged in as ${user}`}</p>
    </span>
  );
};

export default NavBar;
