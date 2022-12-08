import React, { useCallback, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import iconUser from "~assets/icon-user.svg";
import Image from "next/image";
import { ProfileModal } from "~components/ProfileModal";
import { useRouter } from "next/router";
export const Header = ({ headerHeight }) => {
  const [authorized, setAuthorized] = useState(false);
  const [isModal, setModal] = useState(false);
  const { locale, pathname, push } = useRouter();

  const handleLang = useCallback((e) => {
    const newLocale = e.target.value;
    push(pathname, pathname, { locale: newLocale.toLowerCase() });
  }, []);
  return (
    <>
      <header ref={headerHeight}>
        <div className={styles.header}>
          <Link href="/">
            <div className={styles.logo}>Apprentice</div>
          </Link>
          <div style={{ display: "flex" }}>
            <select
              className={styles.selectLang}
              defaultValue={locale}
              onChange={handleLang}
            >
              <option>EN</option>
              <option>KZ</option>
              <option>RU</option>
            </select>
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
        </div>
        <hr></hr>
      </header>
    </>
  );
};
