/* ─── DYNAMIC FOOTER YEAR ─── */
document.getElementById("year").textContent = new Date().getFullYear();

/* ─── MOBILE NAV TOGGLE ─── */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("open");
  document.getElementById("hamburger").classList.toggle("open");
}

// Close menu when a nav link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("open");
    document.getElementById("hamburger").classList.remove("open");
  });
});

/* ─── CONTACT FORM SUBMIT FEEDBACK ─── */
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = "Sent! ✓";
  btn.style.background = "#4ade80";
  setTimeout(() => {
    btn.textContent = "Send Message ✦";
    btn.style.background = "";
  }, 3000);
}
