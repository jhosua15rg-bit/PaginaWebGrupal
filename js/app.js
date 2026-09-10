const menuButton = document.querySelector('[aria-controls="mobile-menu"]');
const mobileMenu = document.getElementById("mobile-menu");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    mobileMenu.classList.toggle("hidden", isOpen);
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Abrir menú" : "Cerrar menú",
    );
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      mobileMenu.classList.add("hidden");
    });
  });
}
