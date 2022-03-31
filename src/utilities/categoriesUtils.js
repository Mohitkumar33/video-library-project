import axios from "axios";

const setCategories = async () => {
  try {
    const { data } = await axios.get("/api/categories");
    return data.categories;
  } catch (error) {
    console.error(error);
  }
};

const setVideos = async () => {
  try {
    const { data } = await axios.get("/api/videos");
    return data.videos;
  } catch (error) {
    console.error(error);
  }
};

export { setCategories, setVideos };
