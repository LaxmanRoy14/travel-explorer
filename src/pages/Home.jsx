import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>🌍 Travel Explorer</h1>

        <p>
          Discover breathtaking destinations, plan your next adventure, and
          explore the world's most amazing places.
        </p>

        <div className="hero-buttons">
          <Link to="/destinations" className="hero-btn">
            Explore Destinations
          </Link>

          <Link to="/favorites" className="hero-btn secondary-btn">
            My Favorites
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
