"use client";
import dynamic from "next/dynamic";
import Head from "next/head";

const FirebaseAuthUI = dynamic(() => import("@/components/ui/FirebaseAuthUI"), { ssr: false });

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <FirebaseAuthUI />
    </>
  );
}
