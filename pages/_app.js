import { useState } from "react";
import AuthContext from "~context/AuthContext";
import "../styles/globals.css";
export default function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState({ accessToken: "", email: "" });
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
