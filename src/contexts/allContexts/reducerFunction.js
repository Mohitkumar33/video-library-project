const reducerFunction = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return {
        ...state,
        allCategories: action.payload,
      };
    case "SET_VIDEOS":
      return {
        ...state,
        allVideos: action.payload,
      };
    // case "SET_LIKES":
    //   return {
    //     ...state,
    //     likes: action.payload,
    //   };
    // case "SET_WATCHLATER":
    //   return {
    //     ...state,
    //     watchlater: action.payload,
    //   };
    // case "SET_HISTORY":
    //   return {
    //     ...state,
    //     history: action.payload,
    //   };
    default:
      return { state };
  }
};

export { reducerFunction };
