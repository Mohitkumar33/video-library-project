import { createContext, useReducer, useContext } from "react";
import { playlistReducer } from "./playlistReducer";
const playlistContext = createContext(null);

const PlaylistProvider = ({ children }) => {
  const [playlistState, playlistDispatch] = useReducer(playlistReducer, {
    playlists: [],
  });
  return (
    <playlistContext.Provider value={{ playlistState, playlistDispatch }}>
      {children}
    </playlistContext.Provider>
  );
};

const usePlaylist = () => useContext(playlistContext);
export { usePlaylist, PlaylistProvider };
