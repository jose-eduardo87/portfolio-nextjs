import Head from "next/head";
import { Layout } from "@/components/common";
import { HeroSection } from "@/components/sections";

Home.Layout = Layout;

export default function Home() {
  return (
    <>
      <Head>
        <title>José Eduardo - Portfolio</title>
        <meta
          name="description"
          content="Put a description of the page here."
        />
      </Head>
      <HeroSection />
    </>
  );
}
