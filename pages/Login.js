import Logo from "../Images/FacebookLogo.png";
import Image from "next/image";
import Head from "next/head";
import { db, auth, provider } from "../config/firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="grid place-items-center bg-gray-100 h-screen">
      <Head>
        <title>Zong Hong Next Facebook-Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src={Logo} width={400} height={400} objectFit="contain" />
      <h1
        onClick={signIn}
        className="p-3 bg-blue-500 rounded-full text-white text-center cursor-pointer hover:bg-gray-200 hover:text-blue-500 hover:shadow-lg"
      >
        Login With Facebook
      </h1>
    </div>
  );
}

export default Login;
