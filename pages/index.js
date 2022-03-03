import { useEffect } from "react";
import Head from "next/head";
import { Layout } from "@/components/common";
import { Container } from "@/components/ui";
import {
  HeroSection,
  AboutSection,
  ContactSection,
  WorkSection,
} from "@/components/sections";
import { useLanguage } from "store/language-context";

Portfolio.Layout = Layout;

export default function Portfolio({ lat, lon, countryCode }) {
  const { setIsEnglish } = useLanguage();

  // CHECK TO VERIFY IF INITIAL CONTENT SHOULD BE LOADED IN ENGLISH OR PORTUGUESE. BY DEFAULT, IT IS SET TO LOAD IN ENGLISH IN "language-context".
  useEffect(() => {
    if (countryCode === "BR") {
      setIsEnglish(false);
    }
  }, [countryCode, setIsEnglish]);

  return (
    <>
      <Head>
        <title>José Eduardo</title>
        <meta name="description" content="Welcome to my portfolio." />
      </Head>
      <HeroSection />
      <Container>
        <AboutSection />
        <WorkSection />
        <ContactSection coords={{ latitude: lat, longitude: lon }} />
      </Container>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const forwarded = req.headers["x-forwarded-for"];
  const ip = forwarded
    ? forwarded.split(/, /)[0]
    : req.connection.remoteAddress;

  const response = await fetch(`http://ip-api.com/json/${ip}`);
  const { lat, lon, countryCode } = await response.json();

  return {
    props: {
      lat,
      lon,
      countryCode,
    },
  };
}
