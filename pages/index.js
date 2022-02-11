import Head from "next/head";
import { Layout } from "@/components/common";
import { Container } from "@/components/ui";
import {
  HeroSection,
  AboutSection,
  ContactSection,
  WorkSection,
} from "@/components/sections";

Portfolio.Layout = Layout;

export default function Portfolio({ ip }) {
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
      <Container>
        <AboutSection />
        <WorkSection />
        <ContactSection clientIP={ip} />
      </Container>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const forwarded = req.headers["x-forwarded-for"];

  const ip = forwarded
    ? forwarded.split(/, /)[0]
    : req.connection.remoteAddress;
  return {
    props: {
      ip,
    },
  };
}
