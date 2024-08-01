import axios from "axios";

const movieBaseUrl1 = "https://api.themoviedb.org/3/configuration";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key="5c7f9652dd3c716cbbbd9e61788909b2"; 

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=5c7f9652dd3c716cbbbd9e61788909b2';

//https://api.themoviedb.org/3/trending/all/day?api_key=5c7f9652dd3c716cbbbd9e61788909b2
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}