import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  deleteVideoInPlaylist,
  getSinglePlaylistData,
} from "../../utilities/playlistsUtils";
import "./playlistVideos.css";
import { usePlaylist } from "../../contexts/playlistContext/playlist-context";
import { useAuth } from "../../contexts/auth-context";
import { Aside } from "../../components/aside/aside";

const PlaylistVideos = () => {
  const { playlistDispatch } = usePlaylist();
  const { playlistId } = useParams();
  const [allVideos, setAllVideos] = useState(null);
  const { authState } = useAuth();
  const { isAuth } = authState;
  const [loader, setLoader] = useState(false);

  const getVideosOfPlaylist = async () => {
    setLoader(true);
    const playlistData = await getSinglePlaylistData(playlistId);
    setLoader(false);
    setAllVideos(playlistData);
  };

  useEffect(async () => {
    await getVideosOfPlaylist();
  }, []);

  return (
    <>
      <main className="main-content">
        <div className="home-page">
          <Aside />
          <div className="content-column">
            {loader && (
              <img
                className="loading-image"
                src="https://res.cloudinary.com/dbfzfqfhl/image/upload/v1648755213/ecom%20item%20images/video%20library%20data/loading_vja82z.gif"
              />
            )}
            {allVideos && <h2 className="must-watch">{allVideos.title}</h2>}
            <div className="all-cards-home">
              {allVideos &&
                allVideos.videos.map((video) => (
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
                      onClick={() => {
                        deleteVideoInPlaylist(
                          playlistId,
                          video._id,
                          playlistDispatch
                        );
                        getVideosOfPlaylist();
                      }}
                    >
                      Remove from playlist
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
export { PlaylistVideos };
