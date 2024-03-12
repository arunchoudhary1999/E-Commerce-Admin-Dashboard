import axios from "axios";

export const useAxios = (token) => {
  const instance = axios.create({
    baseURL: "https://e-commerce-backend-2ltj.onrender.com/api/v1",
    // baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
    headers: {
      Authorization: `Bearer ${token || ""}`,
    },
  });
  return instance;
};
