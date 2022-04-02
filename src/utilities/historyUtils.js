import axios from "axios";
import { history } from "./apiUrls";

const setHistory = async () => {
  try {
    const { data } = await axios.get(history, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    return data.history;
  } catch (error) {
    console.error(error);
  }
};
export { setHistory };
