import { ConnectWallet } from "@thirdweb-dev/react";
import Image from "next/image";
import { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <ConnectWallet />
    </main>
  );
};

export default Home;
