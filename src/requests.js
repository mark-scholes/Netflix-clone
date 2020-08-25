const APIKEY = "cae9e457e3ca82324f9c392ea76944d5";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-UK`,
  fetchNetflixOriginal: `discover/tv?api_key=${APIKEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-UK`,
  fetchActionMovies: `discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchDocumentaries: `discover/movie?api_key=${APIKEY}&with_genres=99`,
};

export default requests;
