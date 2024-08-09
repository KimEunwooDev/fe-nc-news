import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-box">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users">User</Link>
      </nav>
    </div>
  );
};

export default Nav;
