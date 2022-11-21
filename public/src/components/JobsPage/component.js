import React, { useEffect, useRef, useState } from "react";
import { JobsArray } from "~components/Jobs";
import { Header } from "~components/Header";
import classnames from "classnames";
import styles from "./styles.module.css";
export const JobsPage = () => {
  const headerHeight = useRef(null);
  const jobsRef = useRef(null);
  const studentsContainer = useRef(null);
  const [fixJobs, setFixJobs] = useState(false); //TODO(zhumanklv) change the variable name
  const [selectJobs, setSelectJobs] = useState(true);
  useEffect(() => {
    document.getElementById("container").addEventListener("scroll", (e) => {
      console.log(window.scrollY);
      jobsRef.current && console.log("e target", window.scrollY);
      jobsRef.current && console.log(jobsRef.current?.clientHeight);
      if (
        jobsRef.current &&
        window.scrollY >=
          studentsContainer.current.clientHeight +
            headerHeight.current.clientHeight +
            14
      ) {
        setFixJobs(true);
      } else {
        setFixJobs(false);
      }
    });
  });
  return (
    <>
      <Header headerHeight={headerHeight} />
      <div className={styles.container} id="container">
        <div>
          <div className={styles.mainTitle} ref={studentsContainer}>
            All for students
          </div>
          <div
            style={
              fixJobs
                ? {
                    position: "fixed",
                    background: "white",
                    top: "0",
                    left: "0",
                    width: "100%",
                    paddingTop: "12px",
                    zIndex: 2,
                    borderBottom: "1px solid black",
                  }
                : {}
            }
          >
            <div className={styles.sections} ref={jobsRef}>
              <div
                className={selectJobs ? styles.selectedSection : ""}
                onClick={() => {
                  setSelectJobs(true);
                }}
              >
                Jobs
              </div>
              <div
                className={
                  !selectJobs
                    ? classnames(styles.internships, styles.selectedSection)
                    : styles.internships
                }
                onClick={() => {
                  setSelectJobs(false);
                }}
              >
                Internships
              </div>
            </div>
            <div className={styles.searchBar}>
              <input className={styles.input} placeholder="Location: Remote" />
            </div>
          </div>
        </div>
        <JobsArray />
      </div>
    </>
  );
};
