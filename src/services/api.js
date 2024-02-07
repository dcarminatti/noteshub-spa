import axios from "axios";

export const api = axios.create({
  baseURL: "https://noteshub-dc-api.onrender.com",
});
