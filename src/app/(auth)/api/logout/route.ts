import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete("refreshToken");

  const refresh = cookieStore.get("refreshToken");
  console.log(refresh);

  return Response.json("Loggout Successful ", {
    status: 200,
  });
}
