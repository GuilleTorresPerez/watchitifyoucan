const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGFkYjg1MzQyZTViNGU1YmM1NTk5MWRlNDM5OThkNSIsIm5iZiI6MTczNDY1NTMxNS4zMiwic3ViIjoiNjc2NGJkNTM4Y2E1M2NjNmE3NWRlMjMwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Zqci6_t-x8ona4xkk-mZ-T0OPXWtbfk2TnqikSsNVlQ';
const BASE_URL = 'https://api.themoviedb.org/3';
const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGFkYjg1MzQyZTViNGU1YmM1NTk5MWRlNDM5OThkNSIsIm5iZiI6MTczNDY1NTMxNS4zMiwic3ViIjoiNjc2NGJkNTM4Y2E1M2NjNmE3NWRlMjMwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Zqci6_t-x8ona4xkk-mZ-T0OPXWtbfk2TnqikSsNVlQ';  

const makeRequest = async (endpoint, params = {}) => {
    const url = new URL(`${BASE_URL}${endpoint}`);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: AUTH_TOKEN,
        },
    }

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
        throw error;
    }
};

export const getPopularMovies = async (page = 1) => {
    return makeRequest('/movie/popular', { page, api_key: API_KEY });

};

export const searchMovies = async (query) => {
    return makeRequest('/search/movie', { query, api_key: API_KEY });
}

export const getMovieDetails = async (id) => {
    return makeRequest(`/movie/${id}`, { api_key: API_KEY  });
}

export default {
    getPopularMovies,
    searchMovies,
    getMovieDetails,
};
