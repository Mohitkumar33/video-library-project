import { Link } from "react-router-dom";
import { mainContext } from "../../contexts/allContexts/main-context";
import { useAuth } from "../../contexts/auth-context";
import { addToHistory } from "../../utilities/historyUtils";
import "./disliked.css";

const Disliked = () => {
  const { state, dispatch } = mainContext();
  const { dislikes } = state;
  const { authState } = useAuth();
  const { isAuth } = authState;
  return (
    <>
      <h2 className="must-watch">Disliked Videos</h2>
      <div className="all-cards-home">
        {dislikes &&
          dislikes.map((i) => (
            <div className="video-card" key={i._id}>
              <div className="card-image">
                <Link to={`/video/${i._id}`}>
                  <img
                    className="card-image"
                    src={i.video_img}
                    onClick={
                      isAuth ? () => addToHistory(i, dispatch) : undefined
                    }
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
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_DISLIKES",
                    payload: i,
                  })
                }
              >
                Remove from Disliked
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export { Disliked };
