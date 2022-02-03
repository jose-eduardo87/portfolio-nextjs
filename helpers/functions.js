export function setActive(links, index) {
  links.forEach((el) => el.classList.remove("active"));

  links[index].classList.add("active");
}
