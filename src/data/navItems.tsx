import { MdDashboard, MdMessage } from "react-icons/md";

const navItems = [
  {
    id: 1,
    label: "Tablero",
    href: "/dashboard",
    icon: <MdDashboard size={20} />,
  },
  {
    id: 2,
    label: "Mensajes",
    href: "/dashboard/messages",
    icon: <MdMessage size={20} />,
  },
];

export { navItems };
