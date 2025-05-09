"use client";
import useAuth from "@/hooks/useAuth";
import { redirect } from "next/navigation";
import React from "react";

export default function RequireAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const { auth } = useAuth();
 

  if (!auth?.accessToken) {
    redirect('login')
  }
  return <>{children}</>;
}

