import axios from "axios";
import { likes } from "./apiUrls";

const setLikes = async () => {
  try {
    const { data } = await axios.get(likes, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    return data.likes;
  } catch (error) {
    console.error(error);
  }
};
export { setLikes };
