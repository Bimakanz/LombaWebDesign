// main.js - Logic for Landing Page

document.addEventListener('DOMContentLoaded', () => {
  // Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  // Close mobile menu when a link is clicked
  const mobileLinks = document.querySelectorAll('.mobile-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        // Account for fixed navbar height
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Simple Intersection Observer for Animations (Fade in on scroll)
  const animateElements = document.querySelectorAll('.feature-card, .step-card, .about-text, .about-visual');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animateElements.forEach(el => {
    // Initial state before animation
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });

  // Contact Modal Logic
  const contactBtn = document.getElementById('nav-contact-btn');
  const contactModal = document.getElementById('contact-modal');
  const modalClose = document.getElementById('modal-close');
  const modalTabs = document.querySelectorAll('.modal-tab');
  const tabPanes = document.querySelectorAll('.tab-pane');

  if (contactBtn && contactModal) {
    contactBtn.addEventListener('click', (e) => {
      e.preventDefault();
      contactModal.classList.add('active');
    });

    modalClose.addEventListener('click', () => {
      contactModal.classList.remove('active');
    });

    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) {
        contactModal.classList.remove('active');
      }
    });

    modalTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        modalTabs.forEach(t => t.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        const targetPane = document.getElementById('tab-' + tab.getAttribute('data-tab'));
        if (targetPane) {
          targetPane.classList.add('active');
        }
      });
    });
  }

  // Login Modal Logic
  const loginBtns = document.querySelectorAll('.btn-login');
  const loginModal = document.getElementById('login-modal');
  const loginCloseBtn = document.getElementById('login-close');
  const loginSubmit = document.getElementById('login-submit');
  const nisInput = document.getElementById('nis-input');
  const passwordInput = document.getElementById('password-input');
  const loginError = document.getElementById('login-error');

  if (loginModal) {
    loginBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.classList.add('active');
        nisInput.focus();
      });
    });

    loginCloseBtn.addEventListener('click', () => {
      loginModal.classList.remove('active');
      loginError.style.display = 'none';
      nisInput.value = '';
      if (passwordInput) passwordInput.value = '';
    });

    loginModal.addEventListener('click', (e) => {
      if (e.target === loginModal) {
        loginModal.classList.remove('active');
        loginError.style.display = 'none';
        nisInput.value = '';
        if (passwordInput) passwordInput.value = '';
      }
    });

    const handleLogin = () => {
      const nis = nisInput.value.trim();
      const pwd = passwordInput ? passwordInput.value.trim() : '';
      const validUsers = {
        "242510010": "password123",
        "242510023": "password132"
      };

      if (validUsers[nis] && validUsers[nis] === pwd) {
        localStorage.setItem('cognitia_nis', nis);
        localStorage.setItem('cognitia_loading', 'true');
        window.location.href = 'dashboard.html';
      } else {
        loginError.style.display = 'block';
      }
    };

    loginSubmit.addEventListener('click', handleLogin);
    nisInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        passwordInput ? passwordInput.focus() : handleLogin();
      }
    });
    if (passwordInput) {
      passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLogin();
      });
    }
  }
});
