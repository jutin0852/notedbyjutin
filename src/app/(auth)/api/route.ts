import { user } from "@/lib/user";

export async function GET() {
  // const products = await fetch("https://dummyjson.com/products");
  // const data = await products.json();
  return Response.json(user);
}

export async function POST(request: Request) {
  const req = await request.json();
  const newUser = { id: 2, ...req };
  user.push(newUser);
  console.log(user);
  return new Response(JSON.stringify(newUser), {
    headers: { "content-type": "application/json" },
    status: 201,
  });
}
