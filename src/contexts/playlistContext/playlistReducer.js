// import * as playlistUtils from "../../utilities/playlistsUtils"
const playlistReducer = (playlistState, playlistAction) => {
  switch (playlistAction.type) {
    case "SET_PLAYLIST":
      return { ...playlistState, playlists: playlistAction.payload };
    case "ADD_SINGLE_PLAYLIST":
      return { ...playlistState, playlists: playlistAction.payload };
    case "DELETE_SINGLE_PLAYLIST":
      return { ...playlistState, playlists: playlistAction.payload };
    case "DELETE_SINGLE_VIDEO_FROM_PLAYLIST":
      return { ...playlistState, playlists: playlistAction.payload };
    default:
      return playlistState;
  }
};

export { playlistReducer };
