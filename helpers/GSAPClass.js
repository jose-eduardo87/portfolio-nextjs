import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

class GSAP {
  constructor() {}

  register() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }

  getSections(DOMNodeList) {
    return gsap.utils.toArray(DOMNodeList);
  }

  from(DOMElement, options, position) {
    gsap.from(DOMElement, options, position);
  }

  to(DOMElement, options, position) {
    gsap.to(DOMElement, options, position);
  }

  fromTo(DOMElement, optionsFrom, optionsTo) {
    gsap.fromTo(DOMElement, optionsFrom, optionsTo);
  }

  timeline(options) {
    return gsap.timeline(options);
  }
}

export default GSAP;
