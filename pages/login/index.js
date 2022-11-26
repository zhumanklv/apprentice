import styles from "./styles.module.css";
import { LoginHeader } from "~components/LoginHeader";
import { Input } from "~components/Input";
import { useCallback, useContext, useState } from "react";
import { useRouter } from "next/router";
import AuthContext from "~context/AuthContext";
const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(false);
  const router = useRouter();
  const handleEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handlePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    console.log("submitted");
  });
  return (
    <div className={styles.container}>
      <LoginHeader />
      <form onSubmit={handleSubmit}>
        <div className={styles.loginText}>Login</div>
        <Input
          title="Email"
          placeholder="example@gmail.com"
          handleChange={handleEmail}
        />
        <Input
          title="Password"
          placeholder="password"
          handleChange={handlePassword}
          isPassword
        />
        <button className={styles.loginButton}>Login</button>
      </form>
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
