import styles from "./styles.module.css";
import { LoginHeader } from "~components/LoginHeader";
import { Input } from "~components/Input";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handlePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  return (
    <div className={styles.container}>
      <LoginHeader />
      <div className={styles.loginText}>Create an account</div>
      <Input title="First name" value="First name" />
      <Input title="Last name" value="Last name" />
      <Input
        title="Email"
        value="example@gmail.com"
        handleChange={handleEmail}
      />
      <Input title="Password" value="password" handleChange={handlePassword} />
      <div className={styles.selectContainer}>
        <div>I&apos;m looking for</div>
        <select className={styles.select}>
          <option>Jobs</option>
          <option>Internships</option>
          <option>Both</option>
        </select>
      </div>
      <button className={styles.loginButton}>Sign Up</button>
      <div className={styles.signupLink}>
        Already have an account?{" "}
        <span
          style={{ textDecoration: "underline" }}
          onClick={() => router.push("/login")}
        >
          Login
        </span>
      </div>
    </div>
  );
};

export default Signup;
