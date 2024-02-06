import axios from "axios";

export const api = axios.create({
  baseURL: "https://dcnotes-api.onrender.com",
});
