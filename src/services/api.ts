import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-m3-g2.herokuapp.com",
  timeout: 5000,
});
