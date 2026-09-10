/**
 * TUAN PHILIP - PORTFOLIO INTERACTIVE LOGIC
 * Features: Dark/Light Mode, Typing Effect, Animated Counters, Project Filters, Scrollspy, Toast UI
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavigation();
  initScrollEffects();
  initTypingEffect();
  initCounterAnimation();
  initProjectFilters();
  initClipboardAndContact();
  initFooterTime();
});

/* ==========================================================================
   1. Dark / Light Theme Toggle with LocalStorage
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (!prefersDark) {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    showToast(`Switched to ${newTheme === 'light' ? 'Light' : 'Dark'} mode`);
  });
}

/* ==========================================================================
   2. Navigation, Scrollspy & Mobile Drawer
   ========================================================================== */
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  const navItems = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Mobile menu toggle
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navLinks.classList.contains('open')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Close menu when clicking link
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  // Scrollspy & Sticky Navbar
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar background blur when scrolled
    if (navbar) {
      if (scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Scrollspy active indicator
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   3. Scroll Effects (Progress Bar, Reveal on Scroll, Back To Top)
   ========================================================================== */
function initScrollEffects() {
  const progressBar = document.getElementById('scroll-progress');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Scroll Reveal Animations
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => revealObserver.observe(el));
}

/* ==========================================================================
   4. Dynamic Typing Effect in Hero
   ========================================================================== */
function initTypingEffect() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;

  const roles = [
    'AI Systems & Python Engineering',
    'Hybrid RAG & Multi-Agent Workflows',
    'High-Throughput Scraping & Pipelines',
    'Headless WordPress & Next.js Architecture'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = 1800; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   5. Counter Numbers Animation on Scroll
   ========================================================================== */
function initCounterAnimation() {
  const counterElements = document.querySelectorAll('.stat-number');
  if (counterElements.length === 0) return;

  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counterElements.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
          const suffix = counter.getAttribute('data-suffix') || '';
          let count = 0;
          const duration = 1600;
          const stepTime = 20;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;

          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              counter.textContent = `${target}${suffix}`;
              clearInterval(timer);
            } else {
              counter.textContent = `${Math.floor(count)}${suffix}`;
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.hero-stats-strip');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

/* ==========================================================================
   6. Project Category Filtering
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length === 0 || projectCards.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ==========================================================================
   7. Copy to Clipboard & Contact Form Handling
   ========================================================================== */
function initClipboardAndContact() {
  // 1-Click Copy Buttons
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied to clipboard: ${textToCopy}`);
          const originalIcon = btn.innerHTML;
          btn.innerHTML = '<i class="fa-solid fa-check" style="color: var(--accent-emerald);"></i>';
          setTimeout(() => {
            btn.innerHTML = originalIcon;
          }, 2000);
        }).catch(() => {
          showToast('Failed to auto-copy, please select text manually!');
        });
      }
    });
  });

  // Contact Form Submission Simulation
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Transmitting...';

      setTimeout(() => {
        submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Message Dispatched!';
        submitBtn.style.background = 'var(--gradient-emerald)';
        showToast('Thank you! Your message has been sent successfully.');
        contactForm.reset();

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
        }, 3000);
      }, 1000);
    });
  }
}

/* ==========================================================================
   8. Toast Notification Utility
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-notification';
    toast.innerHTML = `
      <i class="fa-solid fa-circle-check toast-icon"></i>
      <span class="toast-msg"></span>
    `;
    document.body.appendChild(toast);
  }

  const msgEl = toast.querySelector('.toast-msg');
  if (msgEl) msgEl.textContent = message;

  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/* ==========================================================================
   9. Footer Real-Time Clock (UTC+7 / Local Time)
   ========================================================================== */
function initFooterTime() {
  const clockEl = document.getElementById('current-time');
  if (!clockEl) return;

  function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
    clockEl.textContent = `${timeString} (GMT+7)`;
  }

  updateTime();
  setInterval(updateTime, 1000);
}
