import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const favorites = useSelector((state) => state.favorites);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🌍 Travel Explorer</Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/destinations">Destinations</Link>

        <Link to="/favorites">Favorites ({favorites.length})</Link>

        {!user && (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}

        {user && <Link to="/logout">Logout</Link>}
      </div>
    </nav>
  );
}

export default Navbar;
