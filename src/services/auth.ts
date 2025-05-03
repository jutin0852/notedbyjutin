import axiosInstance from "@/api/axios";
import { LoginFields } from "@/types/authtype";

export async function loginUser(data: LoginFields) {
  const response = await axiosInstance.post(
    "/auth/login",
    JSON.stringify(data),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response;
}
