"use client";
import useAuth from "@/hooks/useAuth";
import useRefresh from "@/hooks/useRefresh";
import React, { useEffect, useState } from "react";

export function PersistLogin({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const refresh = useRefresh();
  const { auth } = useAuth();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      
      try {
        await refresh();
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (!auth?.accessToken) {
      verifyRefreshToken();
    } else {
      setLoading(false);
    }
  }, [auth, refresh]);


  return <>{loading ? <p>loading...</p> : <>{children}</>}</>;
}
