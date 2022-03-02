import axios from "axios";

const instance = axios.create({
  baseURL: "http://206.189.112.218/api",
});

if (localStorage.token) {
  instance.defaults.headers.common["Authorization"] =
    "Bearer " + localStorage.token;
}
export default instance;
