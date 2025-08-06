const BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;
const token = process.env.REACT_APP_TMDB_TOKEN;

const headers = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
  accept: 'application/json',
};

const makeRequest = async (endpoint, params = {}) => {
  const url = new URL(`${BASE_URL}${endpoint}`);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  const options = {
    method: 'GET',
    headers,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
    throw error;
  }
};

export const getPopularMovies = async (page = 1) => {
  return makeRequest('/movie/popular', { page });
};

export const searchMovies = async (query, page = 1) => {
  return makeRequest('/search/movie', { query, page });
};

export const getMovieDetails = async (id) => {
  return makeRequest(`/movie/${id}`);
};

export const getTopRatedMovies = async (page = 1) => {
  return makeRequest('/movie/top_rated', { page });
};

export const getUpcomingMovies = async (page = 1) => {
  return makeRequest('/movie/upcoming', { page });
};

const tmdbService = {
  getPopularMovies,
  searchMovies,
  getMovieDetails,
  getTopRatedMovies,
  getUpcomingMovies,
};

export default tmdbService;
