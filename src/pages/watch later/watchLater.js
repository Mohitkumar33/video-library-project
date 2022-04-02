import { Link } from "react-router-dom";
import { mainContext } from "../../contexts/allContexts/main-context";
import { useAuth } from "../../contexts/auth-context";
import { addToHistory } from "../../utilities/historyUtils";
import { removeFromWatchlater } from "../../utilities/watchlaterUtils";
import "./watchLater.css";

const WatchLater = () => {
  const { state, dispatch } = mainContext();
  const { watchlater } = state;
  const { authState } = useAuth();
  const { isAuth } = authState;
  return (
    <>
      <h2 className="must-watch">WatchLater Videos</h2>
      <div className="all-cards-home">
        {watchlater.map((i) => (
          <div className="video-card" key={i._id}>
            <div className="card-image">
              <Link to={`/${i._id}`}>
                <img
                  className="card-image"
                  src={i.video_img}
                  onClick={isAuth ? () => addToHistory(i, dispatch) : undefined}
                  alt={i.title}
                />
              </Link>
            </div>
            <div className="card-title text">{i.title}</div>
            <div className="card-views">
              <p>6k views</p>
              <p className="hours-pading">| 4 hours ago</p>
            </div>
            <button
              className="card-watch-button"
              onClick={() => removeFromWatchlater(i._id, dispatch)}
            >
              Remove from Watchlater
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export { WatchLater };
