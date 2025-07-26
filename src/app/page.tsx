import styles from "./global.module.scss";
import { Footer } from "./components/Footer";
import { Submission } from "./components/Submission";

export default function MainPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Submission />
        <Footer />
      </main> 
    </div>
  );
}
