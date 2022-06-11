import axios from "axios";

export const feedbackApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});