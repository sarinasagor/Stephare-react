import Axios, { AxiosRequestConfig } from "axios";
import { Cookies } from "react-cookie"; // Import Cookies directly

// Create a custom Axios instance
const apiService = Axios.create({
  //@ts-ignore
  baseURL: import.meta.env.VITE_ROOT,
});

// Create a hook to configure Axios with a token
export const useApiService = () => {
  const cookies = new Cookies(); // Use Cookies instance directly

  const withToken = async (config: AxiosRequestConfig) => {
    const token = cookies.get("jwtToken"); // Get token from cookies directly

    return {
      ...config,
      headers: {
        ...config.headers,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    };
  };

  apiService.interceptors.request.use(withToken as any);

  return apiService;
};

// Named export for apiService
export { apiService };
