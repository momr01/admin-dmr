import { loginCover } from "@/assets/img/projects/imgProjects";
import Image from "next/image";
import React from "react";
import styles from "./imgSide.module.css";

const ImgSide = () => {
  return (
    <div className={styles.container}>
      <Image
        src={loginCover}
        alt="login-cover"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
};

export default ImgSide;
