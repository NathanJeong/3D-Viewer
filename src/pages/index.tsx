import Head from "next/head";
import { Inter } from "next/font/google";
import MainScreen from "@/pages/screens/MainScreen";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>3D Viewer Test | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainScreen />
    </>
  );
}
