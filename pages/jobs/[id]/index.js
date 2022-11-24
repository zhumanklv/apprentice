import Image from "next/image";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import googleIcon from "~assets/google-icon.png";
import pinMap from "~assets/icon-map-pin.svg";
import styles from "./styles.module.css";
const JobDescription = () => {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.firstRow}>
          <div className={styles.iconContainer}>
            <Image src={googleIcon} alt="google-icon" width="38" height="38" />
          </div>
          <div className={styles.position}>
            <div style={{ fontSize: "16px" }}>
              <span style={{ color: "#445194" }}>{"Golang engineer"}</span>
              <span style={{ color: "#999999" }}>{" (Remote)"}</span>
            </div>
            <div style={{ color: "#999999", fontSize: "14px" }}>{"Google"}</div>
          </div>
          {/* <div className={styles.salary}>{elem.salary + "$/month"}</div> */}
        </div>
        <div className={styles.secondRow}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <Image src={pinMap} alt="pin-map" />
            </div>
            <div className={styles.location}>{"London, UK"}</div>
          </div>
          <div style={{ color: "#999999" }}>1 day ago</div>
        </div>
        <div className={styles.aboutCompany}>
          <div className={styles.companyTitle}>Company</div>
          <div className={styles.companyDescription}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </div>
          <span style={{ color: "#3835B7" }}>Read more...</span>
        </div>
        <div className={styles.aboutCompany}>
          <div className={styles.companyTitle}>Job description</div>
          <div className={styles.companyDescription}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </div>
        </div>
      </div>
      <div className={styles.fixedButtons} style={{ zIndex: "100" }}>
        <div className={styles.fixedButtonsInner}>
          <button className={styles.applyButton}>Apply</button>
          <button
            className={styles.closeButton}
            onClick={() => {
              router.back();
            }}
          >
            Close
          </button>
          <button className={styles.saveButton}>Save</button>
        </div>
      </div>
    </>
  );
};

export default JobDescription;
