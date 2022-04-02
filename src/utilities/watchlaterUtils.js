import { watchlater } from "./apiUrls";
import axios from "axios";

const setWatchlater = async () => {
  try {
    const { data } = await axios.get(watchlater, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    return data.watchlater;
  } catch (error) {
    console.error(error);
  }
};
export { setWatchlater };
