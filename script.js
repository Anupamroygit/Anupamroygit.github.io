
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

// Mobile navigation
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");

  menuBtn.textContent = nav.classList.contains("open")
    ? "✕"
    : "☰";
});

// Close menu after clicking a link
document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

// Automatic copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Smooth section reveal
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(
  ".section, .publication, .timeline-item"
).forEach(element => {
  observer.observe(element);
});
