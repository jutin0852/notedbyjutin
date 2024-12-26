import EditPage from "@/layouts/EditPage";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return <EditPage params={id} />;
}
