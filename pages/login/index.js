import styles from "./styles.module.css";
import { LoginHeader } from "~components/LoginHeader";
import { Input } from "~components/Input";
import { useCallback, useContext, useState } from "react";
import { useRouter } from "next/router";
import AuthContext from "~context/AuthContext";
import { BASE_URL, emailRegex } from "~assets/basic";
import axios from "axios";
const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(false);
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState(false);
  const [clicked, setClicked] = useState(false);
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
    setClicked(true);
    try {
      const response = await axios.post(
        BASE_URL + "/api/v1/auth/user/login",
        JSON.stringify({
          email,
          password,
        }),
        {
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            withCredentials: true,
          },
        }
      );
      console.log(
        "response.data.data.accessToken",
        response.data.data.accessToken
      );
      if (response.data.data?.accessToken) {
        console.log("sucess   sss");
        const accessToken = response.data.data.accessToken;
        setAuth({ accessToken, email });
        setSuccess(true);
        router.push("/");
      }
    } catch (e) {
      setClicked(false);
      console.log(e);
      setErr(e.message);
    }
  });
  return (
    <div className={styles.container}>
      <LoginHeader />
      {success && <p style={{ background: "green" }}>You are logged in!</p>}
      {err && <p style={{ background: "red" }}>Wrong email or password</p>}
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
        <button className={styles.loginButton} disabled={clicked}>
          Login
        </button>
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
