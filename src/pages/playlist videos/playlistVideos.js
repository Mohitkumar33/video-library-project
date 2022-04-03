import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  deleteVideoInPlaylist,
  getSinglePlaylistData,
} from "../../utilities/playlistsUtils";
import "./playlistVideos.css";
import { usePlaylist } from "../../contexts/playlistContext/playlist-context";

const PlaylistVideos = () => {
  const { playlistState, playlistDispatch } = usePlaylist();
  const { playlistId } = useParams();
  const [allVideos, setAllVideos] = useState(null);

  useEffect(() => {
    (async (playlistId) => {
      const videos = await getSinglePlaylistData(playlistId);
      console.log("all videos in playlist", videos);
      setAllVideos(videos);
    })(playlistId);
  }, [playlistId]);
  return (
    <>
      <p>{playlistId}</p>
      {allVideos && <h2 className="must-watch">{allVideos.title}</h2>}
      {/* <div className="all-cards-home">
        {allVideos.videos.map((video) => (
          <div className="video-card" key={video._id}>
            <div className="card-image">
              <Link to={`/video/${video._id}`}>
                <img
                  className="card-image"
                  src={video.video_img}
                  onClick={
                    isAuth ? () => addToHistory(video, dispatch) : undefined
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
              onClick={() =>
                deleteVideoInPlaylist(playlistId, video._id, playlistDispatch)
              }
            >
              Remove from playlist
            </button>
          </div>
        ))}
      </div> */}
    </>
  );
};
export { PlaylistVideos };
