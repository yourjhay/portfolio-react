import axios from "axios";
import Cookies from "js-cookie";
const apiKey = import.meta.env.VITE_API_KEY;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers["x-api-key"] = apiKey;
const auth_token = !!Cookies.get("auth_token");
axios.defaults.baseURL = `https://api.rjhon.net`;

if (auth_token) {
  axios.defaults.headers.Authorization = `${Cookies.get("auth_token")}`;
}
console.log(apiKey);
