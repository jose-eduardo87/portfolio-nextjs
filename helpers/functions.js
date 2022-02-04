export function setActive(links, index) {
  links.forEach((el) => el.classList.remove("active"));

  links[index].classList.add("active");
}

export function setSection(newSection, currentSection) {
  if (newSection !== currentSection) {
    gsap.to(currentSection, { scale: 0.8, autoAlpha: 0 });
    gsap.to(newSection, { scale: 1, autoAlpha: 1 });
    currentSection = newSection;
  }
}
