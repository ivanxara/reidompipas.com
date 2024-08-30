export const scrollToRef = (ref) => {
  if (ref?.current) {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const scrollToId = (id, margin = 50) => {
  const element = document.getElementById(id);
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - margin;
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }
};
