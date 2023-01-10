import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="Header">
      <Link to={`/`}>
        <h1 className="container">Northcoders Game Reviews</h1>
      </Link>
    </div>
  );
};

export default Header;
