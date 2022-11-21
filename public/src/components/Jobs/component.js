import Image from "next/image";
import styles from "./styles.module.css";
import pinMap from "~assets/icon-map-pin.svg";
import googleIcon from "~assets/google-icon.png";
const arr = [
  {
    name: "Google",
    position: "Golang Engineer",
    isRemote: true,
    salary: 2000,
    postDate: "1 day ago",
    location: "London, UK",
  },
  {
    name: "Google",
    position: "Golang Engineer",
    isRemote: true,
    salary: 2000,
    postDate: "1 day ago",
    location: "London, UK",
  },
  {
    name: "Google",
    position: "Golang Engineer",
    isRemote: true,
    salary: 2000,
    postDate: "1 day ago",
    location: "London, UK",
  },
  {
    name: "Google",
    position: "Golang Engineer",
    isRemote: true,
    salary: 2000,
    postDate: "1 day ago",
    location: "London, UK",
  },
  {
    name: "Google",
    position: "Golang Engineer",
    isRemote: true,
    salary: 2000,
    postDate: "1 day ago",
    location: "London, UK",
  },
  {
    name: "Google",
    position: "Golang Engineer",
    isRemote: true,
    salary: 2000,
    postDate: "1 day ago",
    location: "London, UK",
  },
];

export const JobsArray = ({ length, backgroundColor }) => {
  return (
    <div
      className={styles.jobsBlock}
      style={{ backgroundColor: backgroundColor ? backgroundColor : "#f8f8f8" }}
    >
      {arr.slice(0, length).map((elem, i) => {
        return (
          <div className={styles.outerContainer} key={i}>
            <div className={styles.firstRow}>
              <div className={styles.iconContainer}>
                <Image
                  src={googleIcon}
                  alt="google-icon"
                  width="24"
                  height="24"
                />
              </div>
              <div className={styles.position}>
                <div>
                  <span style={{ color: "#445194" }}>{elem.position}</span>
                  <span style={{ color: "#999999" }}>
                    {elem.isRemote ? " (Remote)" : ""}
                  </span>
                </div>
                <div style={{ color: "#999999", fontSize: "12px" }}>
                  {elem.name}
                </div>
              </div>
              {/* <div className={styles.salary}>{elem.salary + "$/month"}</div> */}
            </div>
            <div className={styles.secondRow}>
              <div>
                <Image src={pinMap} alt="pin-map" />
              </div>
              <div className={styles.location}>{elem.location}</div>
            </div>
            <div className={styles.thirdRow}>
              <div>
                <button className={styles.buttonsSave}>Save</button>
                <button className={styles.buttonsApply}>Apply</button>
              </div>
              <div className={styles.postDate}>{elem.postDate}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
