import Link from "next/link";
import styles from "./styles.module.css";
export const ProfileModal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Link href="/profile">
          <div>Edit</div>
        </Link>
        <Link href="/login">
          <div>Log out</div>
        </Link>
      </div>
    </div>
  );
};
