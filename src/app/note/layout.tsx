"use client";
import React, { useEffect } from "react";
import NoteList from "@/ui/note/NoteList";
import Nav from "@/ui/note/Nav";
import { useState } from "react";
import cn from "@/utility/cn";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Provider from "@/context/Provider";
import { ThemeProvider } from "next-themes";
import useAuth from "@/hooks/useAuth";
import axios from "axios";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [activeFolderID, setActiveFolderID] = useState<string>("allnotes");
  const [activeLayout, setActiveLayout] = useState<number>(1);
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.post("/api/logout");
      router.replace("/login");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const getUser = async () => {
      try {
        if (auth) {
          const user = await axiosPrivate.get("/auth/me", {
            signal: controller.signal,
          });
          console.log(user);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUser();

    return () => {
      controller.abort();
    };
  }, [axiosPrivate, auth]);

  return (
    <Provider>
      <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
        <div className="flex dark:bg-[#181818]">
          <Nav
            key={1}
            activeFolder={activeFolderID}
            setActiveFolder={setActiveFolderID}
            activeLayout={activeLayout}
            setActiveLayout={setActiveLayout}
          />
          <NoteList
            key={2}
            activeLayout={activeLayout}
            setActiveLayout={setActiveLayout}
            activeFolderID={activeFolderID}
          />
          <section
            className={cn(
              "w-full h-screen flex-col text-white p-8 lg:p-12 hidden md:w-2/3 lg:w-[55%] md:flex md:flex-grow ]",
              { flex: activeLayout !== 1 && activeLayout !== 2 }
            )}
          >
            <p className="lg:hidden" onClick={() => setActiveLayout(2)}>
              <ArrowLeftIcon className="text-black size-5 mr-1 dark:text-white dark:text-opacity-60 cursor-pointer  lg:hidden inline" />
            </p>
            <button onClick={() => logout()}>logout</button>
            {children}
          </section>
        </div>
      </ThemeProvider>
    </Provider>
  );
}
