import styles from "./styles.module.css";
import { LoginHeader } from "~components/LoginHeader";
import { Input } from "~components/Input";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";
const Login = () => {
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
      <div className={styles.loginText}>Login</div>
      <Input
        title="Email"
        value="example@gmail.com"
        handleChange={handleEmail}
      />
      <Input title="Password" value="password" handleChange={handlePassword} />
      <button className={styles.loginButton}>Login</button>
      <div className={styles.signupLink}>
        Don&apos;t have an account?{" "}
        <span
          style={{ textDecoration: "underline" }}
          onClick={() => router.push("/signup")}
        >
          Sign up
        </span>
      </div>
    </div>
  );
};

export default Login;
