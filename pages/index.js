import Head from "next/head";
import { Layout } from "@/components/common";
import { Container } from "@/components/ui";
import {
  HeroSection,
  AboutSection,
  ContactSection,
} from "@/components/sections";
import { useGSAP } from "store/GSAP-context";

Portfolio.Layout = Layout;

export default function Portfolio() {
  const { register } = useGSAP();
  register(); // METHOD RESPONSIBLE FOR REGISTERING ScrollTrigger and ScrollToPlugin

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
        <ContactSection />
      </Container>
    </>
  );
}
