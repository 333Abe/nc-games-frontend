import { Link } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <span className="container nav">
      <button className="cat_button">Category 1</button>
      <button className="cat_button">Category 2</button>
      <button className="cat_button">Category 3</button>
      <Link to="/log-in">Log-in</Link>
      <p>{user === "" ? `not logged in` : `logged in as ${user}`}</p>
    </span>
  );
};

export default NavBar;
