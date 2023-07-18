export const metadata = {
  title: "Task Management System",
  description: "Manage your project task with employee",
};

import { Open_Sans } from "next/font/google";
import "./globals.css";

import React from 'react';
import Sidebar from "./components/Sidebar/Sidebar";

// If loading a variable font, you don't need to specify the font weight
const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["cyrillic"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <div className="flex h-screen w-screen overflow-hidden">
          <Sidebar />
          {children}
         
        </div>
      </body>
    </html>
  );
}
