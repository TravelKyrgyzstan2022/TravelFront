import axios from "axios";
axios.defaults.baseURL = "https://benomad-backend.herokuapp.com/";
const API_URL = "/api/auth/";

export const API = axios.create({
  baseURL: "https://benomad-backend.herokuapp.com/",
  headers: {
    ContentType: "application/json",
  },
});

API.interceptors.request.use(async (req) => {
  req.headers["Authorization"] = "Bearer " + localStorage.getItem("token");
  return req;
});

API.interceptors.response.use(async (res) => {
  res.headers["Authorization"] = "Bearer " + localStorage.getItem("token");
  return res;
});

const login = async (userData) => {
  const response = await axios.post(API_URL + "signin", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const axiosConfig = { login };
export default axiosConfig;
