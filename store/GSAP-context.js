import { createContext, useContext, useState, useCallback } from "react";
import GSAP from "helpers/GSAPClass";

const GSAPInstance = new GSAP();

const GSAPContext = createContext({
  sections: [],
  getSections: (DOMElement) => {},
  register: () => {},
  to: () => {},
  from: (DOMElement, options) => {},
  fromTo: (DOMElement, optionsFrom, optionsTo) => {},
});

export default function GSAPProvider({ children }) {
  const [sections, getSections] = useState([]);

  const GSAP = {
    sections,
    getSections: useCallback(
      (element) => getSections(GSAPInstance.getSections(element)),
      []
    ),
    register: useCallback(() => GSAPInstance.register(), []),
    to: useCallback(
      (DOMElement, options, position = null) =>
        GSAPInstance.to(DOMElement, options, position),
      []
    ),
    from: useCallback(
      (DOMElement, options, position = null) =>
        GSAPInstance.from(DOMElement, options, position),
      []
    ),
    fromTo: useCallback(
      (DOMElement, optionsFrom, optionsTo) =>
        GSAPInstance.fromTo(DOMElement, optionsFrom, optionsTo),
      []
    ),
    timeline: useCallback((options) => GSAPInstance.timeline(options), []),
  };

  return <GSAPContext.Provider value={GSAP}>{children}</GSAPContext.Provider>;
}

export function useGSAP() {
  return useContext(GSAPContext);
}
