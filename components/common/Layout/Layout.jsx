import { Navbar } from "@/components/common";
import { Footer } from "@/components/common";

import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
