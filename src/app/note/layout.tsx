"use client";
import React from "react";

import Provider from "@/context/Provider";
import { ThemeProvider } from "next-themes";
import NoteLayout from "@/ui/components/layouts/NoteLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
        <NoteLayout>{children}</NoteLayout>
      </ThemeProvider>
    </Provider>
  );
}
