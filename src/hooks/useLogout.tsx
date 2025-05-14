import { useRouter } from "next/navigation";
import useAuth from "./useAuth";
import axios from "axios";

export const useLogout = () => {
  const router = useRouter();
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth(null);

    try {
      await axios.post("/api/logout");
      router.replace("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return logout;
};
