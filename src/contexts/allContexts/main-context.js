import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import { setCategories, setVideos } from "../../utilities/categoriesUtils";
import { reducerFunction } from "./reducerFunction";

const context = createContext(null);

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, {
    allVideos: [],
    allCategories: [],
    // likes: [],
    // watchlater: [],
    // history: [],
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

  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
};

const mainContext = () => useContext(context);

export { ContextProvider, mainContext };
