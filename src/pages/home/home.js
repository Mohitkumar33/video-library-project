import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <>
      <Link to="/">Home</Link> ||
      <Link to="/explore">Explore</Link> ||
      <Link to="/playlist">Playlist</Link> ||
      <Link to="/history">History</Link> ||
      <Link to="/watchlater">WatchLater</Link> ||
      <Link to="/liked">Liked</Link>
    </>
  );
};

export { Home };
