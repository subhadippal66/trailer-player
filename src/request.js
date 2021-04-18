const API_KEY = 'bbbd4ddcb42b3ce77ac45125a8d3d910';

const request = {
    fetchTrending : `/movie/popular?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginal : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US&sort_by=popularity`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentryMovies : `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default request;