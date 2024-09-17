"use client";
import React, { useState } from "react";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-[100vh] w-full fixed">
      {/* <div className="flex-1 p-5 bg-yellow-700 h-[100vh]">  */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* </div> */}
      <div className="p-0 md:p-5 flex-[4] bg-white">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

        {children}
      </div>
    </div>
  );
};

export default Layout;
