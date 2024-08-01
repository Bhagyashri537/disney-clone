import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3/configuration";
const api_key = "5c7f9652dd3c716cbbbd9e61788909b2"; 

const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key"+api_key);

export default {
    getTrendingVideos
}