import axios  from 'axios'


const  resData= axios.create({
    baseURL : "https://api.themoviedb.org/3//trending/movie/week?api_key=",
    timeout: 15000
});
export { resData };