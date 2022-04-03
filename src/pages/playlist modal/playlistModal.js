import { useState } from "react";
import { usePlaylist } from "../../contexts/playlistContext/playlist-context";
import { addSinglePlaylist } from "../../utilities/playlistsUtils";
import "./playlistModal.css";

const PlaylistModal = ({ setModal, video }) => {
  const [playlistInfo, setPlaylistInfo] = useState({
    title: "",
    description: "",
  });
  const [playId, setPlayId] = useState("");
  const { playlistState, playlistDispatch } = usePlaylist();
  const { playlists } = playlistState;
  return (
    <>
      <div className="set-background-color">
        <div className="confirmation-dialog">
          <div className="confirmation-dialog-content">
            <h2>Create Playlist</h2>
            <ul>
              {playlists &&
                playlists.map((item) => (
                  <li key={item._id}>
                    <input
                      type="checkbox"
                      // value={item._id}
                      defaultChecked={false}
                      onChange={(e) => {
                        console.log(e.target);
                        // setPlayId(e.target.value);
                      }}
                    />
                    <label className="set-label-inline">{item.title}</label>
                  </li>
                ))}
            </ul>
            <div className="playlist-input">
              <label>Playlist Name</label>
              <input
                type="text"
                placeholder="playlist name"
                value={playlistInfo.title}
                onChange={(e) =>
                  setPlaylistInfo({ ...playlistInfo, title: e.target.value })
                }
              />
              <label>Description</label>
              <input
                type="text"
                placeholder="Description"
                value={playlistInfo.description}
                onChange={(e) =>
                  setPlaylistInfo({
                    ...playlistInfo,
                    description: e.target.value,
                  })
                }
              />
            </div>
            <div className="confirmation-dialog-buttons">
              <button
                className="primary-button"
                onClick={() =>
                  addSinglePlaylist(playlistInfo, playlistDispatch)
                }
              >
                Create Playlist
              </button>
              <button
                className="secondary-button"
                onClick={() => setModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { PlaylistModal };
