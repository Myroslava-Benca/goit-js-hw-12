import axios from 'axios';

const API_KEY = '43559338-49e51b38628b18648a05e4f59';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15
    }
  });
  return response.data;
};
