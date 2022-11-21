import React, { useState } from "react";
import styles from "./styles.module.css";
import iconUser from "~assets/icon-user.svg";
import Image from "next/image";
export const Header = ({ headerHeight }) => {
  const [authorized, setAuthorized] = useState(false);
  return (
    <header ref={headerHeight}>
      <div className={styles.header}>
        <div className={styles.logo}>Apprentice</div>
        <div>
          {authorized ? (
            <img src="/assets/kadirbek-sharau.jpg" className={styles.avatar} />
          ) : (
            <Image src={iconUser} />
          )}
        </div>
      </div>
      <hr></hr>
    </header>
  );
};
