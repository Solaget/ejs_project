// aos intializing;
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
      duration: 600, // Animation duration
      offset: 100, // Offset from the top of the screen
      easing: "ease-in-out", // Easing function
      once: true, // Animate only once
    });
  });