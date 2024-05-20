function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }else{
      entry.target.classList.remove("show");
    }
  });
});
const section_hidden = document.querySelectorAll(".hidden");
section_hidden.forEach(el => observer.observe(el));