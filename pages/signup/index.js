import styles from "./styles.module.css";
import { LoginHeader } from "~components/LoginHeader";
import { Input } from "~components/Input";
import { useCallback, useState, useMemo } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import show from "~assets/show.png";
import hide from "~assets/hide.png";
import axios from "axios";
import { BASE_URL, emailRegex } from "~assets/basic";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [wrongPasswordFormat, setWrongPassword] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmpasswordShown, setConfirmpasswordShown] = useState(false);
  const [notMatchingPasswords, setNotMatching] = useState(false);
  const [name, setName] = useState("");
  const [emptyName, setEmptyName] = useState(false);
  const [surname, setSurname] = useState("");
  const [emptySurname, setEmptySurname] = useState(false);
  const [isEmployer, setIsEmployer] = useState(true);
  const [success, setSuccess] = useState(false);
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  const handleName = useCallback(
    (e) => {
      if (emptyName) {
        setEmptyName(false);
      }
      setName(e.target.value);
    },
    [emptyName]
  );

  const handleSurname = useCallback(
    (e) => {
      if (emptySurname) {
        setEmptySurname(false);
      }
      setSurname(e.target.value);
    },
    [emptySurname]
  );
  const handleEmail = useCallback(
    (e) => {
      if (emptyEmail) {
        setEmptyEmail(false);
      }
      setEmail(e.target.value);
    },
    [emptyEmail]
  );

  const handlePassword = useCallback(
    (e) => {
      if (wrongPasswordFormat) {
        setWrongPassword(false);
      }
      if (notMatchingPasswords) {
        setNotMatching(false);
      }
      setPassword(e.target.value);
    },
    [wrongPasswordFormat, notMatchingPasswords]
  );

  const handleConfirmPassword = useCallback(
    (e) => {
      if (notMatchingPasswords) {
        setNotMatching(false);
      }
      setConfirmPassword(e.target.value);
    },
    [notMatchingPasswords]
  );

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    let regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-])[A-Za-z\d@$!%*?&-]{8,40}$/;
    if (name === "") {
      setEmptyName(true);
      return;
    } else if (surname === "") {
      setEmptySurname(true);
      return;
    } else if (!email.match(emailRegex)) {
      setEmptyEmail(true);
      return;
    } else if (!password.match(regex)) {
      setWrongPassword(true);
      return;
    }

    if (password !== confirmPassword) {
      setNotMatching(true);
      return;
    }
    console.log("submitted");
    setClicked(true);
    try {
      const response = await axios.post(
        BASE_URL + "/api/v1/auth/user/register",
        JSON.stringify({
          email,
          name,
          surname,
          password,
          user_type: isEmployer ? 1 : 2,
        }),
        {
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            withCredentials: true,
          },
        }
      );
      console.log(response);
      if (response.data.statusCode === 201) {
        setSuccess(true);
        setName("");
        setEmail("");
        setSurname("");
        setPassword("");
        setConfirmPassword("");
        setTimeout(() => {
          router.push("/login");
        }, 1500);
      }
    } catch (e) {
      setClicked(false);
      console.error("Something went wrong!!!, NETWORK ERROR");
    }
  });

  const containerStyle = useMemo(() => {
    return confirmPassword !== "" && password !== confirmPassword
      ? { border: "1px solid red" }
      : {};
  }, [confirmPassword]);
  return (
    <div className={styles.container}>
      <LoginHeader />
      {success ? (
        <div className={styles.signUpContainer}>
          <div className={styles.signUpThanks}>Thanks for signing up.</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "30px",
              width: "100%",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                margin: "0 auto",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <span style={{ marginTop: "0" }}>
                Redirecting you to login page now
              </span>
              <span className={styles.spinner}></span>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.loginText}>Create an account</div>
          <form onSubmit={handleSubmit}>
            <Input
              title="First name"
              placeholder="First name"
              handleChange={handleName}
            />
            {emptyName && (
              <span style={{ color: "red" }}>Name cannot be empty</span>
            )}
            <Input
              title="Last name"
              placeholder="Last name"
              handleChange={handleSurname}
            />
            {emptySurname && (
              <span style={{ color: "red" }}>Last name cannot be empty</span>
            )}
            <Input
              title="Email"
              placeholder="example@gmail.com"
              handleChange={handleEmail}
            />
            {emptyEmail && (
              <span style={{ color: "red" }}>Please insert a valid email</span>
            )}
            <div className={styles.inputOutercontainer}>
              <div className={styles.title}>{"Password"}</div>
              <div
                className={styles.inputContainer}
                style={wrongPasswordFormat ? { border: "1px solid red" } : {}}
              >
                <input
                  type={passwordShown ? "text" : "password"}
                  className={styles.input}
                  placeholder={"password"}
                  onChange={handlePassword}
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
              </div>
            </div>
            {wrongPasswordFormat && (
              <span style={{ color: "red" }}>
                password should contain at least 8 characters, 1 uppercase
                letter, 1 lowercase letter, 1 special character
              </span>
            )}
            <div className={styles.inputOutercontainer}>
              <div className={styles.title}>{"Confirm password"}</div>
              <div className={styles.inputContainer} style={containerStyle}>
                <input
                  type={confirmpasswordShown ? "text" : "password"}
                  className={styles.input}
                  placeholder={"confirm password"}
                  onChange={handleConfirmPassword}
                  autoComplete="on"
                />
                <span
                  onClick={() => setConfirmpasswordShown(!confirmpasswordShown)}
                >
                  <Image
                    src={confirmpasswordShown ? show : hide} //TODO add strikethrough with css rather than downloading 2 images
                    alt="showPassword"
                    width="30"
                    height="30"
                  />
                </span>
              </div>
            </div>
            {notMatchingPasswords && (
              <span style={{ color: "red" }}>passwords do not match</span>
            )}
            <div className={styles.selectContainer}>
              <div>I&apos;m</div>
              <select
                className={styles.select}
                onChange={() => {
                  setIsEmployer(!isEmployer);
                }}
              >
                <option>Hiring</option>
                <option>Looking for jobs and/or internships</option>
              </select>
            </div>
            <button className={styles.loginButton} disabled={clicked}>
              Sign Up
            </button>
          </form>
          <div className={styles.signupLink}>
            Already have an account?{" "}
            <span
              style={{ textDecoration: "underline" }}
              onClick={() => router.push("/login")}
            >
              Login
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Signup;
