import Head from "next/head";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/Header"));
const Sidebar = dynamic(() => import("../components/Sidebar"));
const Feed = dynamic(() => import("../components/Feed"));
const Widget = dynamic(() => import("../components/Widget"));

import { db } from "../config/firebase";

export default function Home({ posts }) {
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Zong Hong Next Facebook</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex">
        <Sidebar />
        <Feed posts={posts} />
        <Widget />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: {
      posts: docs,
    },
  };
}
