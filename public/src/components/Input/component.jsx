import { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import show from "~assets/show.png";
import hide from "~assets/hide.png";
export const Input = ({
  title,
  placeholder,
  handleChange,
  isPassword,
  password,
  confirmPassword,
  wrongPasswordFormat,
}) => {
  const containerStyle = useMemo(() => {
    return wrongPasswordFormat ||
      (confirmPassword !== "" && password !== confirmPassword)
      ? { border: "1px solid red" }
      : {};
  }, [title, confirmPassword, wrongPasswordFormat]);
  const [passwordShown, setPasswordShown] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.inputContainer} style={containerStyle}>
        {isPassword ? (
          <>
            <input
              type={passwordShown ? "text" : "password"}
              className={styles.input}
              placeholder={placeholder}
              onChange={handleChange}
              autoComplete="on"
            />
            <span onClick={() => setPasswordShown(!passwordShown)}>
              <Image
                src={passwordShown ? show : hide} //TODO add strikethrough with css rather than downloading 2 images
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
