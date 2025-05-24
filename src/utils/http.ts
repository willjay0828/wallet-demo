import axios from "axios";

const httpRequset = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
  timeout: 20000,
})

httpRequset.interceptors.request.use(
  (config) => {
    return config;
  }
  , (error) => {
    return Promise.reject(error);
  }
)

httpRequset.interceptors.response.use(
  (response) => {
    return response;
  }
  , (error) => {
    return Promise.reject(error);
  }
)
export { httpRequset };