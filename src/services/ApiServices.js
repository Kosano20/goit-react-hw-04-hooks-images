import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "23383407-e7cc8d35786a3d378c61a119c";

export const getPhoto = (findPicture, page = 1) => {
  return axios
    .get(
      `${BASE_URL}?q=${findPicture}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((res) => res.data);
};
