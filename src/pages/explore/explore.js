import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { mainContext } from "../../contexts/allContexts/main-context";
import { useSearchFilter } from "../../contexts/search-filter-context";
import "./explore.css";
import { navbarSearch } from "../../utilities/navbarSearch";
const Explore = () => {
  const { state } = mainContext();
  const { filterState } = useSearchFilter();
  const { allVideos } = state;
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
                <img className="card-image" src={i.video_img} alt="" />
              </Link>
            </div>
            <div className="card-title text">{i.title}</div>
            <div className="card-views">
              <p>6k views</p>
              <p className="hours-pading">| 4 hours ago</p>
            </div>
            <button className="card-watch-button">Watch Later</button>
          </div>
        ))}
      </div>
    </>
  );
};

export { Explore };
