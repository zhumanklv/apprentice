import styles from "./styles.module.css";
import Image from "next/image";
import home from "~assets/icon-home.svg";
import briefcase from "~assets/icon-briefcase.svg";
import inbox from "~assets/icon-inbox.svg";
import bookmark from "~assets/icon-bookmark.svg";
import Link from "next/link";
import { useState } from "react";
export const Base = ({ children }) => {
  const [tab, setTab] = useState("home");
  return (
    <div className={styles.home}>
      <div className={styles.children}>{children}</div>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <Link href="/">
            <span
              onClick={() => {
                setTab("home");
              }}
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill={tab === "home" ? "black" : "none"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.75 21.25L25 12.5L36.25 21.25V35C36.25 35.663 35.9866 36.2989 35.5178 36.7678C35.0489 37.2366 34.413 37.5 33.75 37.5H16.25C15.587 37.5 14.9511 37.2366 14.4822 36.7678C14.0134 36.2989 13.75 35.663 13.75 35V21.25Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.25 37.5V25H28.75V37.5"
                  stroke={tab === "home" ? "white" : "black"}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </Link>
          <Link href="/jobs">
            <span
              onClick={() => {
                setTab("jobs");
              }}
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill={tab === "jobs" ? "black" : "none"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35 18.75H15C13.6193 18.75 12.5 19.8693 12.5 21.25V33.75C12.5 35.1307 13.6193 36.25 15 36.25H35C36.3807 36.25 37.5 35.1307 37.5 33.75V21.25C37.5 19.8693 36.3807 18.75 35 18.75Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M30 36.25V16.25C30 15.587 29.7366 14.9511 29.2678 14.4822C28.7989 14.0134 28.163 13.75 27.5 13.75H22.5C21.837 13.75 21.2011 14.0134 20.7322 14.4822C20.2634 14.9511 20 15.587 20 16.25V36.25"
                  stroke={tab === "jobs" ? "black" : "none"}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </Link>
          <span>
            <Image src={inbox} />
          </span>
          <span>
            <Image src={bookmark} />
          </span>
        </div>
      </div>
    </div>
  );
};
