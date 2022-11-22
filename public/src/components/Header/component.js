import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import iconUser from "~assets/icon-user.svg";
import Image from "next/image";
export const Header = ({ headerHeight }) => {
  const [authorized, setAuthorized] = useState(false);
  return (
    <header ref={headerHeight}>
      <div className={styles.header}>
        <div className={styles.logo}>Apprentice</div>
        <Link href="/profile">
          <div>
            {authorized ? (
              <img
                src="/assets/kadirbek-sharau.jpg"
                className={styles.avatar}
              />
            ) : (
              <Image src={iconUser} />
            )}
          </div>
        </Link>
      </div>
      <hr></hr>
    </header>
  );
};
