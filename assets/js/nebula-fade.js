const nebula = document.getElementById("background-canvas");

if (nebula) {
  const viewport = document.documentElement;
  const fadeDistance = Number.parseFloat(
    getComputedStyle(nebula).getPropertyValue("--nebula-fade-distance")
  );
  let framePending = false;

  function updateNebulaFade() {
    framePending = false;
    const scrollRange = viewport.scrollHeight - viewport.clientHeight;
    const distance = Math.max(1, Math.min(fadeDistance, scrollRange));
    const progress = Math.min(1, Math.max(0, window.scrollY / distance));
    nebula.style.setProperty("--nebula-scroll-progress", progress);
  }

  function requestNebulaFade() {
    if (framePending) return;
    framePending = true;
    window.requestAnimationFrame(updateNebulaFade);
  }

  window.addEventListener("scroll", requestNebulaFade, { passive: true });
  window.addEventListener("resize", requestNebulaFade);
  window.addEventListener("pageshow", requestNebulaFade);
  updateNebulaFade();
}
