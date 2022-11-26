import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import iconUser from "~assets/icon-user.svg";
import Image from "next/image";
import { ProfileModal } from "~components/ProfileModal";
export const Header = ({ headerHeight }) => {
  const [authorized, setAuthorized] = useState(false);
  const [isModal, setModal] = useState(false);
  return (
    <>
      <header ref={headerHeight}>
        <div className={styles.header}>
          <Link href="/">
            <div className={styles.logo}>Apprentice</div>
          </Link>
          <div
            onClick={() => {
              setModal(!isModal);
            }}
            style={{ position: "relative" }}
          >
            {authorized ? (
              <img
                src="/assets/kadirbek-sharau.jpg"
                className={styles.avatar}
              />
            ) : (
              <Image src={iconUser} />
            )}
            {isModal && (
              <div className={styles.profileModal}>
                <ProfileModal />
              </div>
            )}
          </div>
        </div>
        <hr></hr>
      </header>
    </>
  );
};
