import styles from "./styles.module.css";
import Link from "next/link";
export const LoginHeader = () => {
  return (
    <div className={styles.headerContainer}>
      <Link href="/">
        <div className={styles.apprentice}>Apprentice</div>
      </Link>
      <div className={styles.forStudents}>All for students</div>
      <div className={styles.internshipsAndJobs}>Internships and Jobs</div>
    </div>
  );
};
