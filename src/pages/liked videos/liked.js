import { Link } from "react-router-dom";
import { Aside } from "../../components/aside/aside";
import { mainContext } from "../../contexts/allContexts/main-context";
import { useAuth } from "../../contexts/auth-context";
import { addToHistory } from "../../utilities/historyUtils";
import { removeFromLikes } from "../../utilities/likesUtils";
import "./liked.css";

const Liked = () => {
  const { state, dispatch } = mainContext();
  const { likes } = state;
  const { authState } = useAuth();
  const { isAuth } = authState;
  return (
    <>
      <main className="main-content">
        <div className="home-page">
          <Aside />
          <div className="content-column">
            <h2 className="must-watch">Liked Videos</h2>
            <div className="all-cards-home">
              {likes.map((video) => (
                <div className="video-card" key={video._id}>
                  <div className="card-image">
                    <Link to={`/video/${video._id}`}>
                      <img
                        className="card-image"
                        src={video.video_img}
                        onClick={
                          isAuth
                            ? () => addToHistory(video, dispatch)
                            : undefined
                        }
                        alt={video.title}
                      />
                    </Link>
                  </div>
                  <div className="card-title text">{video.title}</div>
                  <div className="card-views">
                    <p>6k views</p>
                    <p className="hours-pading">| 4 hours ago</p>
                  </div>
                  <button
                    className="card-watch-button"
                    onClick={() => removeFromLikes(video._id, dispatch)}
                  >
                    Remove from Liked
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export { Liked };
