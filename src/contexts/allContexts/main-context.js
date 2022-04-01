import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import { setCategories } from "../../utilities/categoriesUtils";
import { setVideos } from "../../utilities/videosUtils";
import { reducerFunction } from "./reducerFunction";
const context = createContext(null);

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, {
    allVideos: [],
    allCategories: [],
    likes: [],
    watchlater: [],
    history: [],
  });

  useEffect(() => {
    (async () => {
      const data = await setVideos();
      dispatch({ type: "SET_VIDEOS", payload: data });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await setCategories();
      dispatch({ type: "SET_CATEGORIES", payload: data });
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const data = await setLikes();
      dispatch({ type: "SET_VIDEOS", payload: data });
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const data = await setWatchlater();
      dispatch({ type: "SET_VIDEOS", payload: data });
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const data = await setHistory();
      dispatch({ type: "SET_VIDEOS", payload: data });
    })();
  }, []);

  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
};

const mainContext = () => useContext(context);

export { ContextProvider, mainContext };
