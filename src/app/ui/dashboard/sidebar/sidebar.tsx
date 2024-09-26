import { navItems } from "@/data/navItems";
import { handleSignOut } from "@/lib/actions";
import Link from "next/link";
import React from "react";
import { MdLogout } from "react-icons/md";
import Swal from "sweetalert2";

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  const signOut = async () => {
    Swal.fire({
      icon: "question",
      title: "Cerrar Sesión",
      text: "¿Desea cerrar sesión?",
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
  };

  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-blueSecondary border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-blueSecondary dark:bg-gray-800">
        <ul className="space-y-5 font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-gray-800"
              >
                {item.icon}
                <span className="ms-3">{item.label}</span>
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={signOut}
              className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-gray-800 w-full"
            >
              <MdLogout size={20} />
              <span className="ms-3">Cerrar Sesión</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
