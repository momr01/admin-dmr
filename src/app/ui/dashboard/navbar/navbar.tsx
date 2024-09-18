"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        {/* <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div> */}
        <div className={styles.icons}>
          {/* <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} /> */}
          <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} size={30} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
