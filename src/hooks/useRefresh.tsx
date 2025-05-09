import useAuth from "./useAuth";
import axios from "axios";

export default function useRefresh() {
  const { setAuth } = useAuth();
  const refresh = async () => {
    try {
      const res = await axios.get("/api/refresh", {
        withCredentials: true,
      });
      console.log(res.data)

      const accessToken = res.data;
      setAuth((prev) => {
        return { ...prev!, accessToken };
      });
      return accessToken;
    } catch (error) {
      console.log(error);
    }
  };
  return refresh;
}
