import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCategories } from "../utils/api";

const NavBar = ({ user }) => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("All categories");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getCategories().then((data) => {
      setCategories(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>loading categories</p>;
  }

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    navigate(`/reviews/${cat}`);
  };

  return (
    <span className="container nav">
      <span>
        <select
          value={category}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          {categories.map((category, index) => {
            return (
              <option key={index} value={category.slug}>
                {category.slug}
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
