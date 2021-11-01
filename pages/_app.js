import "../styles/globals.css";
import { Provider } from "next-auth/client";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import dynamic from "next/dynamic";
const Login = dynamic(() => import("./Login"));

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  if (!user) return <Login />;

  return <Component {...pageProps} />;
}

export default MyApp;
