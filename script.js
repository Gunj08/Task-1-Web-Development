// Fade-in on scroll
const fadeElements = document.querySelectorAll('main');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

fadeElements.forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Smooth scrolling for internal anchor links (just in case)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Optional: highlight link on click
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    link.style.backgroundColor = '#ffe6e6';
    setTimeout(() => {
      link.style.backgroundColor = '';
    }, 300);
  });
});
