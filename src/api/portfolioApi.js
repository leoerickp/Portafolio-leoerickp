import axios from "axios";
export const config = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
});
export const portfolioApi = axios.create({
  //baseURL: " http://localhost:3000/api",
  baseURL: 'https://portofolioserverapp.onrender.com/api',
});
