import { Header } from "~components/Header";
import { JobsArray } from "~components/Jobs";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import { useCallback } from "react";
import Link from "next/link";
import { useLocale } from "~hooks/useLocale";
export const HomeComponent = () => {
  const router = useRouter();
  const { t } = useLocale();
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
          <div className={styles.firstText}>{t("allForStudents")}</div>
          <div className={styles.secondText}>{t("internshipsAndJobs")}</div>
        </div>
      </div>
      <div className={styles.secondContainer}>
        <div className={styles.thirdText}>{t("weHelpStudentsToDevelop")}</div>
        <div className={styles.rejectsText}>{t("tiredOfRejects")}</div>
        <div className={styles.madeForStudentsText}>{t("madeForStudents")}</div>
        <button className={styles.profile} onClick={signUpClick}>
          {t("createProfile")}
        </button>
        <button className={styles.opportunites}>{t("exploreOpp")}</button>
        <div className={styles.login}>
          {t("haveAccount")}
          <span style={{ textDecoration: "underline" }} onClick={loginClick}>
            {t("login")}
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
