import { axiosPrivate } from "@/api/axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import useRefresh from "./useRefresh";

export default function useAxiosPrivate() {
  const { auth } = useAuth();
  const refresh = useRefresh();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"] && auth) {
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest.sent) {
          console.log(error, "responseIntercept");
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers[
            "Authorization"
          ] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      (error) => Promise.reject(error)
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth,refresh]);

  return axiosPrivate;
}
