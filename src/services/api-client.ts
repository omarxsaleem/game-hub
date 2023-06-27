import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '434134b1806c49b78cfc3a8e0f80b511'
    }
})