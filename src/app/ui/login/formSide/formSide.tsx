import { logoCompleteBlack } from "@/assets/img/logo/imgLogo";
import Image from "next/image";
import React from "react";
import SignInForm from "./signInForm/signInForm";
import styles from "./formSide.module.css";

const FormSide = () => {
  return (
    <div id="form" className={styles.container}>
      <div className={styles.contentDiv}>
        <div className={styles.logoContainer}>
          <Image src={logoCompleteBlack} alt="logo" className={styles.logo} />
        </div>

        <h2 className={styles.title}>Iniciar Sesión</h2>
        <SignInForm />
      </div>
    </div>
  );
};

export default FormSide;
