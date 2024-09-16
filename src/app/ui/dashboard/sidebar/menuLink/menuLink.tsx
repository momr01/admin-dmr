"use client";

import Link from "next/link";
import React from "react";
import styles from "./menuLink.module.css";
import { usePathname } from "next/navigation";

interface MenuItem {
  path: string;
  icon: React.ReactNode;
  title: string;
}

interface MenuLinkProps {
  item: MenuItem;
  isOpen: boolean;
}

const MenuLink: React.FC<MenuLinkProps> = ({ item, isOpen }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathname === item.path && styles.active
      } ${!isOpen && "justify-center"}`}
    >
      <span> {item.icon}</span>

      <span className={`${isOpen ? "block" : "hidden"}`}> {item.title}</span>
    </Link>
  );
};

export default MenuLink;
