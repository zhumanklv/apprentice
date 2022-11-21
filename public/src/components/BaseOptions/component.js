import styles from "./styles.module.css";
import Image from "next/image";
import home from "~assets/icon-home.svg";
import briefcase from "~assets/icon-briefcase.svg";
import inbox from "~assets/icon-inbox.svg";
import bookmark from "~assets/icon-bookmark.svg";
import Link from "next/link";
export const Base = ({ children }) => {
  return (
    <div className={styles.home}>
      <div className={styles.children}>{children}</div>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <Link href="/">
            <span>
              <Image src={home} />
            </span>
          </Link>
          <Link href="/jobs">
            <span>
              <Image src={briefcase} />
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
