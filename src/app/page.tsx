import ImgSide from "./ui/login/imgSide/imgSide";
import FormSide from "./ui/login/formSide/formSide";
import styles from "./ui/login/login.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <FormSide />
        <ImgSide />
      </div>
    </div>
  );
}
