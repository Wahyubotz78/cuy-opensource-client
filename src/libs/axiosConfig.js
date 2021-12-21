import axios from "axios";

const axiosConfig = axios.create({
  baseURL: `http://localhost:3000/v1/`,
  headers: {
    Authorization: `Bearer 3949b1c47a538ac303a5e06d8dc2c5c7580a72f716e1f05aa354d9c136bcd404f85dbb811fe6efbbea1dc09d0c8d36dc7e42fc5eb7960a60425ed93cf280108a86b254a83246e06631140c4f0412b52c83bfa8f4`,
    AccessControlAllowOrigin: true,
    ContentType: "application/json",
    Accept: "application/json",
  },
});

export default axiosConfig;
