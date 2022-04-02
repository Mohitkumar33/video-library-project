import { Link } from "react-router-dom";
import { mainContext } from "../../contexts/allContexts/main-context";
import "./history.css";

const History = () => {
  const { state } = mainContext();
  const { history } = state;
  return (
    <>
      <h2 className="must-watch">My History</h2>
      <div className="all-cards-home">
        {history.map((video) => (
          <div className="video-card" key={video._id}>
            <div className="card-image">
              <Link to={`/video/${video._id}`}>
                <img className="card-image" src={video.video_img} alt="" />
              </Link>
            </div>
            <div className="card-title text">{video.title}</div>
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

export { History };
