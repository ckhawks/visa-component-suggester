import Image from "next/image";
import styles from "./page.module.scss";
import { Button, InputContainer, Label, ScreenReader, Textarea, Typography, Utility } from "@visa/nova-react";
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
