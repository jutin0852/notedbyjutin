import axiosInstance from "@/api/axios";
import { LoginFields } from "@/types/authtype";
import axios from "axios";

export async function loginUser(data: LoginFields) {
  const response = await axiosInstance.post(
    "/auth/login",
    JSON.stringify(data),
    {
      headers: { "Content-Type": "application/json" },
    }
  );

  const refreshToken = response?.data.refreshToken;

  // create my own api to accept refresh token, doing
  //  this because i cant call the refresh token from the public free api directly since
  await axios.post("/api/login", JSON.stringify(refreshToken), {
    headers: { "Content-Type": "application/json" },
  });

  return response;
}


