"use client";
import React, { useEffect, useState } from "react";
import styles from "./sidebar.module.css";
import { MdDashboard, MdLogout } from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import { handleSignOut } from "@/lib/actions";
import Swal from "sweetalert2";
import SidebarHeader from "./header/sidebarHeader";
import { useSession } from "next-auth/react";

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard />,
  },
  { title: "Mensajes", path: "/dashboard/messages", icon: <MdDashboard /> },
];

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  // const session = await auth();

  console.log(isOpen);
  // console.log(session);
  const { data, status } = useSession();
  console.log(status)

  const userName = "Daniela Elizabeth Montaña Rojas";
  const firstLetter = userName[0].toUpperCase();

  console.log(firstLetter);

  const signOut = async () => {
    // await signOut();
    Swal.fire({
      icon: "question",
      title: "Cerrar Sesión",
      text: "Desea cerrar sesión?",
      confirmButtonText: "Salir",
      confirmButtonColor: "green",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      cancelButtonColor: "gray",
      allowOutsideClick: false,
    }).then((res) => {
      if (res.isConfirmed) {
        handleSignOut();
      }
    });
    //
  };

  return (
    // <div className={`${isOpen ? "flex-1" : "w-24"} p-5 bg-yellow-700 overflow-y-scroll transition duration-500 ease-in-out`}>
    <div
      className={`${
        isOpen
          ? "px-2 w-[80%] md:w-1/5 md:max-w-full"
          : "px-1 hidden md:block max-w-24"
      } py-5 overflow-y-scroll transition-all duration-900 ease-in-out absolute h-full md:relative`}
      // style={{
      //  maxWidth: isOpen ? "100%" : "6rem", // Equivale a 'w-24'
      // flex: isOpen ? 1 : "initial",
      // }}
    >
      <div className={styles.container}>
        {/* <button onClick={() => setIsOpen(!isOpen)}>Abrir</button> */}
        <div className={`${styles.user} ${!isOpen && styles.userFirstLetter}`}>
          <div className={styles.userDetail}>
            <span
             
              className={styles.username}
            >
              {isOpen ? userName : firstLetter}
            </span>
            {isOpen && <span className={styles.userTitle}>Administrador</span>}
          </div>
        </div>
        {/* <SidebarHeader isOpen={isOpen} /> */}
        <ul className={styles.list}>
          {menuItems.map((cat) => (
            <li key={cat.title}>
              {/* <span className={styles.cat}>{cat.title}</span> */}
              {/* {cat.list.map((item) => (
                <MenuLink item={item} key={item.title} />
              ))} */}
              <MenuLink item={cat} key={cat.title} isOpen={isOpen} />
            </li>
          ))}
        </ul>
        {/* <Logout /> */}
        {/* <form
        action={async () => {
          "use server";
          await signOut();
        }}
        > */}
        <form action={signOut}>
          <button className={styles.logout}>
            <MdLogout />
            <span className={`${isOpen ? "block" : "hidden"}`}>Logout</span>
          </button>
        </form>
        {/* </form> */}
      </div>
    </div>
  );
};

export default Sidebar;
