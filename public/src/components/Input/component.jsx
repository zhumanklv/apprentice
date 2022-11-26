import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import show from "~assets/show.png";
import hide from "~assets/hide.png";
export const Input = ({ title, placeholder, handleChange, isPassword }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.inputContainer}>
        {isPassword ? (
          <>
            <input
              type={passwordShown ? "text" : "password"}
              className={styles.input}
              placeholder={placeholder}
              onChange={handleChange}
            />
            <span onClick={() => setPasswordShown(!passwordShown)}>
              <Image
                src={passwordShown ? show : hide}
                alt="showPassword"
                width="30"
                height="30"
              />
            </span>
          </>
        ) : (
          <input
            className={styles.input}
            placeholder={placeholder}
            onChange={handleChange}
          />
        )}
      </div>
    </div>
  );
};
