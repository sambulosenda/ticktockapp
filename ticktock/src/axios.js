import axios from "axios"

const instance = axios.create({
    baseURL: "https://ticktock-backend.herokuapp.com/"
})

export default instance;