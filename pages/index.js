import Head from "next/head";
import { Layout } from "@/components/common";
import { Container } from "@/components/ui";
import {
  HeroSection,
  AboutSection,
  ContactSection,
  WorkSection,
} from "@/components/sections";
import { useGSAP } from "store/GSAP-context";

Portfolio.Layout = Layout;

export default function Portfolio({ ip }) {
  // const { register } = useGSAP();
  // register(); // METHOD RESPONSIBLE FOR REGISTERING ScrollTrigger and ScrollToPlugin

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
