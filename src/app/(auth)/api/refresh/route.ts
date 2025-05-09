import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refreshToken");

  const res = await fetch("https://dummyjson.com/auth/refresh", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      refreshToken: refreshToken?.value,
      expiresInMins: 30,
    }),
    credentials: "include",
  });
  if (res.ok) {
    const data = await res.json();
    return Response.json(data.accessToken);
  }
  return Response.json("");
}
