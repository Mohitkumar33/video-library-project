import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { mainContext } from "../../contexts/allContexts/main-context";
import "./home.css";
import { useEffect } from "react";
import { useSearchFilter } from "../../contexts/search-filter-context";
import { navbarSearch } from "../../utilities/navbarSearch";
import { useAuth } from "../../contexts/auth-context";
import { addToHistory } from "../../utilities/historyUtils";
import {
  addToWatchlater,
  removeFromWatchlater,
} from "../../utilities/watchlaterUtils";
import { Aside } from "../../components/aside/aside";

const Home = () => {
  const { authState } = useAuth();
  const { isAuth } = authState;
  const { filterState } = useSearchFilter();
  const { state, dispatch } = mainContext();
  const { allCategories } = state;
  const { allVideos, watchlater } = state;
  const [finalArray, setFinalArray] = useState(allVideos);
  const categorySelect = (categoryName, allVideos) => {
    if (categoryName === "ALL") return setFinalArray(allVideos);
    const newVideos = allVideos.filter(
      (video) => video.categoryName === categoryName
    );
    setFinalArray(newVideos);
  };

  useEffect(() => {
    const newArray = navbarSearch(filterState, allVideos);
    setFinalArray(newArray);
  }, [filterState]);

  useEffect(() => {
    setFinalArray(allVideos);
  }, [allVideos]);

  return (
    <>
      <main className="main-content">
        <div className="home-page">
          <Aside />

          {/* ************************************************************************ */}
          <div className="content-column">
            <div className="chips">
              {allCategories.map((video) => (
                <button
                  key={video._id}
                  onClick={() => categorySelect(video.categoryName, allVideos)}
                >
                  {video.categoryName}
                </button>
              ))}
            </div>

            <div className="header-image">
              <div className="latest-video-info">
                <h4>RIOT GAMES</h4>
                <h2>VALORANT MASTERS:</h2>
                <h2>Berlin - Group State</h2>
                <Link to="/explore">
                  <button>Watch Now</button>
                </Link>
              </div>
              <div className="latest-video-image">
                <img
                  src="https://res.cloudinary.com/dbfzfqfhl/image/upload/v1648666734/ecom%20item%20images/video%20library%20data/VCT_M3_BERLIN_Article_Banner_050_gaif5u.png"
                  alt="advertisement_image"
                />
              </div>
            </div>
            <h2 className="must-watch">Must watch videos</h2>
            <div className="all-cards-home">
              {finalArray &&
                finalArray.map((video) => (
                  <div className="video-card" key={video._id}>
                    <Link to={`/video/${video._id}`}>
                      <div className="card-image">
                        <img
                          className="card-image"
                          src={video.static_image}
                          onClick={
                            isAuth
                              ? () => addToHistory(video, dispatch)
                              : undefined
                          }
                          alt={video.title}
                        />
                      </div>
                      <div className="card-title text">{video.title}</div>
                      <div className="card-views">
                        <p>6k views</p>
                        <p className="hours-pading">| 4 hours ago</p>
                      </div>
                    </Link>
                    {isAuth ? (
                      watchlater.some((item) => item._id === video._id) ? (
                        <button
                          className="card-watch-button"
                          onClick={() =>
                            removeFromWatchlater(video._id, dispatch)
                          }
                        >
                          Remove from Watchlater
                        </button>
                      ) : (
                        <button
                          className="card-watch-button"
                          onClick={() => addToWatchlater(video, dispatch)}
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
          </div>
        </div>
      </main>
    </>
  );
};

export { Home };
