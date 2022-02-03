import { createContext, useContext, useState, useCallback } from "react";
import GSAP from "helpers/GSAPClass";

const GSAPInstance = new GSAP();

const GSAPContext = createContext({
  links: [],
  getLinks: (DOMElement) => {},
  register: () => {},
  from: (DOMElement, options) => {},
});

export default function GSAPProvider({ children }) {
  const [links, getLinks] = useState([]);

  const GSAP = {
    links,
    getLinks: useCallback(
      (element) => getLinks(GSAPInstance.getLinks(element)),
      []
    ),
    register: useCallback(() => GSAPInstance.register(), []),
    from: useCallback(
      (DOMElement, options) => GSAPInstance.from(DOMElement, options),
      []
    ),
  };

  return <GSAPContext.Provider value={GSAP}>{children}</GSAPContext.Provider>;
}

export function useGSAP() {
  return useContext(GSAPContext);
}
