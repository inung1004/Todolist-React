import axios from "axios"

const BASEURL = "http://10.156.147.203:8080";

const request = axios.create({ baseURL: BASEURL });

//axios 인터셉터 사용
request.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("access_token")

    if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`
    }

    return config;
})

export default request;