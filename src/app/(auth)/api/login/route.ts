import { cookies } from "next/headers";

export async function POST(request: Request) {
  const refreshToken = await request.json();
  const cookieStore = await cookies();
  cookieStore.set({
    name: "refreshToken",
    value: refreshToken,
    httpOnly: true,
    path: "/",
  });

  return Response.json("Login Successful ", {
    status: 200,
  });
}
