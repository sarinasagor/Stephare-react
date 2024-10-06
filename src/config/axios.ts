import Axios, { AxiosRequestConfig } from "axios";
import { useCookies } from "react-cookie";

const apiService = Axios.create();

const withToken = (config: AxiosRequestConfig) => {
  const [tokenCookie] = useCookies(["token"]);

  console.log(tokenCookie);

  return {
    ...config,
    headers: {
      Accept: "application/json",
      ...config.headers,
      ...(tokenCookie.token
        ? { Authorization: `Bearer ${tokenCookie.token}` }
        : {}),
    },
  };
};

apiService.interceptors.request.use(withToken as any);
// eslint-disable-next-line no-undef
//@ts-ignore
apiService.defaults.baseURL = import.meta.env.VITE_ROOT;
// eslint-disable-next-line no-undef
export default apiService;
