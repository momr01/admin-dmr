"use client";
import React, { useState } from "react";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard />,
  },
  { title: "Mensajes", path: "/dashboard/messages", icon: <MdDashboard /> },

  // {
  //   title: "Pages",
  //   list: [
  //     {
  //       title: "Dashboard",
  //       path: "/dashboard",
  //       icon: <MdDashboard />,
  //     },
  //     {
  //       title: "Users",
  //       path: "/dashboard/users",
  //       icon: <MdSupervisedUserCircle />,
  //     },
  //     {
  //       title: "Products",
  //       path: "/dashboard/products",
  //       icon: <MdShoppingBag />,
  //     },
  //     {
  //       title: "Transactions",
  //       path: "/dashboard/transactions",
  //       icon: <MdAttachMoney />,
  //     },
  //   ],
  // },
  // {
  //   title: "Analytics",
  //   list: [
  //     {
  //       title: "Revenue",
  //       path: "/dashboard/revenue",
  //       icon: <MdWork />,
  //     },
  //     {
  //       title: "Reports",
  //       path: "/dashboard/reports",
  //       icon: <MdAnalytics />,
  //     },
  //     {
  //       title: "Teams",
  //       path: "/dashboard/teams",
  //       icon: <MdPeople />,
  //     },
  //   ],
  // },
  // {
  //   title: "User",
  //   list: [
  //     {
  //       title: "Settings",
  //       path: "/dashboard/settings",
  //       icon: <MdOutlineSettings />,
  //     },
  //     {
  //       title: "Help",
  //       path: "/dashboard/help",
  //       icon: <MdHelpCenter />,
  //     },
  //   ],
  // },
  // {
  //   title: "User",
  //   list: [
  //     {
  //       title: "Settings",
  //       path: "/dashboard/settings",
  //       icon: <MdOutlineSettings />,
  //     },
  //     {
  //       title: "Help",
  //       path: "/dashboard/help",
  //       icon: <MdHelpCenter />,
  //     },
  //   ],
  // },
  // {
  //   title: "User",
  //   list: [
  //     {
  //       title: "Settings",
  //       path: "/dashboard/settings",
  //       icon: <MdOutlineSettings />,
  //     },
  //     {
  //       title: "Help",
  //       path: "/dashboard/help",
  //       icon: <MdHelpCenter />,
  //     },
  //   ],
  // },
];

const Sidebar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  //const session = await auth();
  // const [isOpen, setIsOpen] = useState(true);

  console.log(isOpen);

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
        <button onClick={() => setIsOpen(!isOpen)}>Abrir</button>
        <div className={styles.user}>
          <div className={styles.userDetail}>
            <span className={styles.username}>{"hola"}</span>
            <span className={styles.userTitle}>Administrator</span>
          </div>
        </div>
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
        <form
        // action={async () => {
        //   "use server";
        //   await signOut();
        // }}
        >
          {/* <button className={styles.logout}>
            <MdLogout />
            Logout
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
