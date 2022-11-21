import { Header } from "~components/Header";
import { JobsArray } from "~components/Jobs";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import { useCallback } from "react";
import Link from "next/link";
export const HomeComponent = () => {
  const router = useRouter();

  const signUpClick = useCallback((e) => {
    e.preventDefault();
    router.push("/signup");
  }, []);

  const loginClick = useCallback((e) => {
    e.preventDefault();
    router.push("/login");
  }, []);
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.firstText}>All for students</div>
          <div className={styles.secondText}>Internships and jobs</div>
        </div>
      </div>
      <div className={styles.secondContainer}>
        <div className={styles.thirdText}>We help students to develop</div>
        <div className={styles.rejectsText}>Tired of receiving rejects?</div>
        <div className={styles.madeForStudentsText}>
          Our jobs and internships are made for students
        </div>
        <button className={styles.profile} onClick={signUpClick}>
          Create your profile
        </button>
        <button className={styles.opportunites}>Explore opportunities</button>
        <div className={styles.login}>
          Already have an account?
          <span style={{ textDecoration: "underline" }} onClick={loginClick}>
            Log in
          </span>
        </div>
      </div>
      <div className={styles.thirdContainer}>
        <div className={styles.jobsText}>Jobs</div>
        <JobsArray length={2} backgroundColor="white" />
        <Link href="/jobs">
          <div className={styles.moreJobsLink}>See more jobs</div>
        </Link>
      </div>
      <div className={styles.fourthContainer}>
        <div className={styles.internshipsText}>Internships</div>
        <JobsArray length={2} backgroundColor="white" />
        <div className={styles.moreJobsLink}>See more internships</div>
      </div>
    </>
  );
};
