"use client";

import React, { useState } from "react";
import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

      <Sidebar isOpen={isOpen} />

      <div className="px-4 pt-24 sm:ml-64 bg-white h-screen">{children}</div>
    </>
  );
};

export default Layout;
