const reflectiveCards = document.querySelectorAll(
  ".home-page .card, .rainbow-composite"
);
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (finePointer.matches && !reducedMotion.matches) {
  reflectiveCards.forEach((card) => {
    let animationFrame;

    const updateCard = (event) => {
      const bounds = card.getBoundingClientRect();
      const pointerX = (event.clientX - bounds.left) / bounds.width;
      const pointerY = (event.clientY - bounds.top) / bounds.height;
      const rotateX = (0.5 - pointerY) * 8;
      const rotateY = (pointerX - 0.5) * 10;

      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        card.style.setProperty("--pointer-x", `${pointerX * 100}%`);
        card.style.setProperty("--pointer-y", `${pointerY * 100}%`);
        card.style.setProperty("--rotate-x", `${rotateX}deg`);
        card.style.setProperty("--rotate-y", `${rotateY}deg`);
      });
    };

    const resetCard = () => {
      cancelAnimationFrame(animationFrame);
      card.style.setProperty("--pointer-x", "50%");
      card.style.setProperty("--pointer-y", "50%");
      card.style.setProperty("--rotate-x", "0deg");
      card.style.setProperty("--rotate-y", "0deg");
    };

    card.addEventListener("pointermove", updateCard);
    card.addEventListener("pointerleave", resetCard);
    card.addEventListener("pointercancel", resetCard);
  });
}
