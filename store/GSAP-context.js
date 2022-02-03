import { createContext, useContext, useState, useCallback } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

const GSAPContext = createContext({
  links: [],
  getLinks: (DOMElement) => {},
  register: () => {},
});

export default function GSAPProvider({ children }) {
  const [links, getLinks] = useState([]);
  const GSAP = {
    links,
    getLinks: useCallback(
      (element) => getLinks(gsap.utils.toArray(element)),
      []
    ),
    register: useCallback(
      () => gsap.registerPlugin(ScrollTrigger, ScrollToPlugin),
      []
    ),
  };

  return <GSAPContext.Provider value={GSAP}>{children}</GSAPContext.Provider>;
}

export function useGSAP() {
  return useContext(GSAPContext);
}
