// Smooth scroll for navbar links
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    window.scrollTo({
      top: target.offsetTop - 60, // adjust for navbar height
      behavior: "smooth"
    });
  });
});
// Smooth scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Active section highlighting
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll("section");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.8;

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinksContainer = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navLinksContainer.classList.toggle("show");
});

