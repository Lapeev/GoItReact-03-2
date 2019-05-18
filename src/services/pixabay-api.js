import axios from 'axios';

const BASE_URL =
  'https://pixabay.com/api/?key=11172718-f6e56b8a08a6b762793b5fef6&q=';

/* eslint-disable-next-line */
export const fetchFotos = (askString, pageNumber) =>  axios.get(
    `${BASE_URL +
      askString}&page=${pageNumber}&per_page=12&image_type=photo&orientation=horizontal`,
  );
