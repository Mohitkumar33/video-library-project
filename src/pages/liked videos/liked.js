import { Link } from "react-router-dom";
import { mainContext } from "../../contexts/allContexts/main-context";
import "./liked.css";

const Liked = () => {
  const { state } = mainContext();
  const { likes } = state;
  return (
    <>
      <h2 className="must-watch">Liked Videos</h2>
      <div className="all-cards-home">
        {likes.map((i) => (
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

export { Liked };
