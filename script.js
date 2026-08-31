// Theme toggle & interactive features for Provodnik Portal
document.addEventListener('DOMContentLoaded', () => {
  // Theme switcher
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const savedTheme = localStorage.getItem('provodnik_theme');
  
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeToggle) themeToggle.innerHTML = '☀️';
      if (themeToggle) themeToggle.setAttribute('title', 'Включить светлую тему');
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeToggle) themeToggle.innerHTML = '🌙';
      if (themeToggle) themeToggle.setAttribute('title', 'Включить темную тему');
    }
  }
  
  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (prefersDark.matches) {
    applyTheme('dark');
  }
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const newTheme = isDark ? 'light' : 'dark';
      localStorage.setItem('provodnik_theme', newTheme);
      applyTheme(newTheme);
    });
  }

  // Active TOC link highlighting on scroll (for legal document pages)
  const tocLinks = document.querySelectorAll('.toc-link');
  const sections = [];
  
  tocLinks.forEach(link => {
    const targetId = link.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      const el = document.querySelector(targetId);
      if (el) {
        sections.push({ el, link });
      }
    }
  });
  
  if (sections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          tocLinks.forEach(l => l.classList.remove('active'));
          const activeMatch = sections.find(s => s.el === entry.target);
          if (activeMatch) {
            activeMatch.link.classList.add('active');
          }
        }
      });
    }, {
      rootMargin: '-80px 0px -70% 0px'
    });
    
    sections.forEach(s => observer.observe(s.el));
  }
  
  // Print button support
  const printBtn = document.getElementById('print-doc-btn');
  if (printBtn) {
    printBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.print();
    });
  }
});
