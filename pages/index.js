import Head from "next/head";
import { Layout } from "@/components/common";

Home.Layout = Layout;

export default function Home() {
  return (
    <>
      <Head>
        <title>Title here</title>
        <meta
          name="description"
          content="Put a description of the page here."
        />
      </Head>
      THIS IS THE MAIN CONTENT
    </>
  );
}
