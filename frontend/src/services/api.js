import axios from 'axios'

const api = axios.create({
    baseURL: "https://backend-bethehero-gsp.herokuapp.com",
})

export default api;