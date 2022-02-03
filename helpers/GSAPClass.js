import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

class GSAP {
  constructor() {}

  register() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }

  getLinks(DOMNodeList) {
    return gsap.utils.toArray(DOMNodeList);
  }

  from(DOMElement, options) {
    gsap.from(DOMElement, options);
  }

  to(DOMElement, options) {
    gsap.to(DOMElement, options);
  }

  fromTo(DOMElement, optionsFrom, optionsTo) {
    gsap.fromTo(DOMElement, optionsFrom, optionsTo);
  }
}

export default GSAP;
