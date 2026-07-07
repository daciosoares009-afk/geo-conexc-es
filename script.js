// ============================================================================
// Comportamento puramente visual: estado da navbar ao rolar + scroll reveal
// Não altera nenhuma lógica ou conteúdo do site.
// ============================================================================

// Navbar: aplica glassmorphism após rolar além de 40px
const navbar = document.getElementById("navbar");
const onScrollNavbar = () => {
  if (window.scrollY > 40) {
    navbar.classList.add("is-scrolled");
  } else {
    navbar.classList.remove("is-scrolled");
  }
};
window.addEventListener("scroll", onScrollNavbar, { passive: true });
onScrollNavbar();

// Scroll reveal: adiciona .is-visible quando o elemento .reveal entra na tela
const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
);

revealItems.forEach((item) => revealObserver.observe(item));