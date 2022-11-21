import styles from "./styles.module.css";
export const Input = ({ title, value, handleChange }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          placeholder={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
