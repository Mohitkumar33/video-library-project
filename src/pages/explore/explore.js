import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { mainContext } from "../../contexts/allContexts/main-context";
import { useSearchFilter } from "../../contexts/search-filter-context";
import "./explore.css";
import { navbarSearch } from "../../utilities/navbarSearch";
import { addToHistory } from "../../utilities/historyUtils";
import { useAuth } from "../../contexts/auth-context";
import {
  addToWatchlater,
  removeFromWatchlater,
} from "../../utilities/watchlaterUtils";

const Explore = () => {
  const { state, dispatch } = mainContext();
  const { authState } = useAuth();
  const { isAuth } = authState;
  const { filterState } = useSearchFilter();
  const { allVideos, watchlater } = state;
  const [finalArray, setFinalArray] = useState(allVideos);
  useEffect(() => {
    const newArray = navbarSearch(filterState, allVideos);
    setFinalArray(newArray);
  }, [filterState]);
  return (
    <>
      <h2 className="must-watch">Trending Videos</h2>
      <div className="all-cards-home">
        {finalArray.map((i) => (
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
            {isAuth ? (
              watchlater.some((item) => item._id === i._id) ? (
                <button
                  className="card-watch-button"
                  onClick={() => removeFromWatchlater(i._id, dispatch)}
                >
                  Remove from Watchlater
                </button>
              ) : (
                <button
                  className="card-watch-button"
                  onClick={() => addToWatchlater(i, dispatch)}
                >
                  Add to Watchlater
                </button>
              )
            ) : (
              <button
                className="card-watch-button"
                onClick={() => alert("Please login")}
              >
                Watch Later
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export { Explore };
