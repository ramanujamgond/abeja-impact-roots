// Global state
let isScrolled = false;
let isMobileMenuOpen = false;
let countersStarted = false;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize all functionality
function initializeApp() {
    setupScrollHandler();
    setupIntersectionObserver();
    setupFormValidation();
    
    // Set initial header state
    updateHeaderOnScroll();
}

// Scroll functionality
function setupScrollHandler() {
    window.addEventListener('scroll', updateHeaderOnScroll);
}

function updateHeaderOnScroll() {
    const header = document.getElementById('header');
    const stickyDonate = document.getElementById('sticky-donate');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 10) {
        if (!isScrolled) {
            isScrolled = true;
            header.classList.add('scrolled');
            stickyDonate.classList.remove('hidden');
        }
    } else {
        if (isScrolled) {
            isScrolled = false;
            header.classList.remove('scrolled');
            stickyDonate.classList.add('hidden');
        }
    }
}

// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        closeMobileMenu();
    }
}

// Mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    isMobileMenuOpen = !isMobileMenuOpen;
    
    if (isMobileMenuOpen) {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

function closeMobileMenu() {
    if (isMobileMenuOpen) {
        toggleMobileMenu();
    }
}

// Intersection Observer for animations
function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'impact') {
                    startCounters();
                }
                
                // Add fade-in animation to visible elements
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Counter animation for impact metrics
function startCounters() {
    if (countersStarted) return;
    countersStarted = true;
    
    const counters = document.querySelectorAll('.metric-count');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        
        animateCounter(counter, target, duration);
    });
}

function animateCounter(element, target, duration) {
    let startTime = null;
    
    function animate(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;
        
        if (progress < 1) {
            const current = Math.floor(target * progress);
            element.textContent = current + (target === 85 ? '%' : target > 30 ? '+' : '');
            requestAnimationFrame(animate);
        } else {
            element.textContent = target + (target === 85 ? '%' : target > 30 ? '+' : '');
        }
    }
    
    requestAnimationFrame(animate);
}

// Form handling
function setupFormValidation() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

async function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);

  // Basic Validation
  const name = formData.get('name').trim();
  const email = formData.get('email').trim();
  const message = formData.get('message').trim();
  const interest = formData.get('interest');

  if (!name || !email || !message || !interest) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please fill out all required fields.',
    });
    return;
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    Swal.fire({
      icon: 'error',
      title: 'Invalid Email',
      text: 'Please enter a valid email address.',
    });
    return;
  }

  // Basic Sanitization (remove HTML tags)
  const sanitizedMessage = message.replace(/<[^>]*>?/gm, '');
  formData.set('message', sanitizedMessage);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thank you for contacting us. We will get back to you shortly.',
      });
      form.reset();
    } else {
      const responseData = await response.json();
      const errorMessage =
        responseData.errors?.map((err) => err.message).join(', ') ||
        'An unknown error occurred.';
      Swal.fire({
        icon: 'error',
        title: 'Submission Error',
        text: errorMessage,
      });
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Network Error',
      text: 'Could not send message. Please check your internet connection and try again.',
    });
  }
}

// Donation functionality
function handleDonate(amount) {
    const subject = `Donation of ₹${amount} to Abeja Foundation`;
    const body = `I would like to make a donation of ₹${amount} to support Abeja Foundation's mission of empowering farmers.

Please provide me with the payment details and process.

Thank you.`;
    
    const mailtoLink = `mailto:swosti@mye.farm?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
}

function handleCustomDonate() {
    const customAmount = document.getElementById('custom-amount').value;
    
    if (!customAmount || customAmount <= 0) {
        alert('Please enter a valid donation amount.');
        return;
    }
    
    handleDonate(customAmount);
    
    // Clear the input
    document.getElementById('custom-amount').value = '';
}

// Download functionality
function downloadPitchDeck() {
    const subject = 'Request for CSR Partnership Pitch Deck';
    const body = `I am interested in learning more about CSR partnership opportunities with Abeja Foundation.

Please send me the pitch deck and any additional information about your programs.

Thank you.`;
    
    const mailtoLink = `mailto:swosti@mye.farm?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
}

function downloadBrochure() {
    const subject = 'Request for Organization Brochure';
    const body = `I would like to receive Abeja Foundation's organization brochure to learn more about your work and impact.

Thank you.`;
    
    const mailtoLink = `mailto:swosti@mye.farm?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
}

function downloadImpactReport() {
    const subject = 'Request for Impact Report 2024';
    const body = `I am interested in reviewing Abeja Foundation's Impact Report 2024 to understand your achievements and outcomes.

Please share the report at your earliest convenience.

Thank you.`;
    
    const mailtoLink = `mailto:swosti@mye.farm?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
}

// Investment and partnership functions
function scheduleCall() {
    const subject = 'Request for Introductory Call - Investment Opportunity';
    const body = `I am interested in learning more about investment opportunities with Abeja Foundation.

Please let me know your availability for an introductory call to discuss:
- Investment opportunities
- Impact projections
- Partnership possibilities

My preferred contact method: [Please specify - phone/video call]
My availability: [Please specify your preferred time slots]

Thank you.`;
    
    const mailtoLink = `mailto:swosti@mye.farm?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
}

function scheduleConsultation() {
    const subject = 'Request for CSR Partnership Consultation';
    const body = `I would like to schedule a consultation to discuss potential CSR partnership opportunities with Abeja Foundation.

Our organization is interested in:
- Rural development programs
- Farmer empowerment initiatives
- Sustainable impact projects

Please let me know your availability for a consultation call.

Organization: [Please specify]
Contact Person: [Please specify]
Preferred Meeting Time: [Please specify]

Thank you.`;
    
    const mailtoLink = `mailto:swosti@mye.farm?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization: debounce scroll handler
const debouncedScrollHandler = debounce(updateHeaderOnScroll, 10);
window.addEventListener('scroll', debouncedScrollHandler);

// Lazy loading for images (if needed)
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Accessibility improvements
function setupAccessibility() {
    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isMobileMenuOpen) {
            closeMobileMenu();
        }
    });
    
    // Focus management for mobile menu
    const mobileMenuLinks = document.querySelectorAll('.mobile-nav-link, .mobile-donate-btn');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                link.click();
            }
        });
    });
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', setupAccessibility);

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
    // You could send this to an error reporting service
});

// Performance monitoring
window.addEventListener('load', () => {
    // Log performance metrics
    if ('performance' in window) {
        const perfData = performance.timing;
        const loadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${loadTime}ms`);
    }
});

// Smooth scrolling polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    // Polyfill for smooth scrolling
    function smoothScrollTo(element) {
        const start = window.pageYOffset;
        const target = element.offsetTop - 80; // Account for fixed header
        const distance = target - start;
        const duration = 800;
        let startTime = null;
        
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, start, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }
        
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
        
        requestAnimationFrame(animation);
    }
    
    // Override scrollToSection for browsers without smooth scroll support
    window.scrollToSection = function(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            smoothScrollTo(element);
            closeMobileMenu();
        }
    };
}
