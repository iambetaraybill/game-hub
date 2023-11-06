import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params : {
        key : '059dfcee26d84317b480f71ec48b7b63'
    }
});