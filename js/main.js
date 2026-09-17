/**
 * Main Application Script for Janani Priya B's Portfolio
 * Features: Dynamic typing, project filtering, modal viewer, email copy, navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Typing Effect in Hero
  initTypingEffect();

  // 2. Project Data & Interactive Modal
  initProjectModals();

  // 3. Project Category Filter
  initProjectFilter();

  // 4. Mobile Menu Navigation
  initMobileNav();

  // 5. Active Navigation ScrollSpy & Header Shadow
  initScrollEffects();

  // 6. Contact Form & Copy Email
  initContactFeatures();
});

/* --------------------------------------------------------------------------
   1. DYNAMIC TYPING EFFECT
   -------------------------------------------------------------------------- */
function initTypingEffect() {
  const typedSpan = document.getElementById('typed-title');
  if (!typedSpan) return;

  const roles = [
    'B.Tech CSE Student',
    'Python Developer',
    'AI & Machine Learning Enthusiast',
    'IoT & Systems Builder',
    'Aspiring Software Engineer'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typedSpan.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      typedSpan.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at full string
      typingSpeed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 450;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* --------------------------------------------------------------------------
   2. PROJECT DATA & MODAL SYSTEM
   -------------------------------------------------------------------------- */
const projectDetailsData = {
  'ai-chatbot': {
    title: 'AI Chatbot',
    category: 'Artificial Intelligence / Python',
    tagline: 'Intelligent Conversational Agent with Intent Recognition',
    description: 'An AI-driven conversational agent engineered in Python that interprets user input, parses natural language intents, and generates coherent context-aware responses. Designed with modular architecture allowing seamless integration with custom domain knowledge bases.',
    technologies: ['Python', 'NLP', 'NLTK', 'Regex Pattern Matching', 'JSON Knowledge Base'],
    features: [
      'Natural Language Processing pipeline for tokenization, lemmatization, and stop-word filtering',
      'Intent classification with fallback handling for unknown queries',
      'Contextual conversation memory tracking state across multi-turn interactions',
      'Extensible API architecture for easy deployment into web or messaging services'
    ],
    github: 'https://github.com/Jan61234',
    demo: '#'
  },
  'tictactoe-ai': {
    title: 'Tic-Tac-Toe AI',
    category: 'Game Theory / Artificial Intelligence',
    tagline: 'Unbeatable Adversarial Game Engine Powered by Minimax',
    description: 'A strategic adversarial AI game implementation utilizing the Minimax game-theoretic decision rule combined with Alpha-Beta pruning. The AI calculates optimal trajectories across every game state, rendering it virtually unbeatable against human opponents.',
    technologies: ['Python', 'Minimax Algorithm', 'Alpha-Beta Pruning', 'Game State Trees', 'CLI/GUI'],
    features: [
      'Recursive state-space tree traversal evaluating future board configurations',
      'Alpha-beta pruning optimization reducing branching exploration time by >60%',
      'Support for multiple difficulty levels (Random, Strategic, Unbeatable)',
      'Clean modular game logic cleanly decoupled from presentation layer'
    ],
    github: 'https://github.com/Jan61234',
    demo: '#'
  },
  'recommendation-system': {
    title: 'Recommendation System',
    category: 'Machine Learning / Data Science',
    tagline: 'Intelligent Item Recommendation Engine',
    description: 'A comprehensive Machine Learning recommendation system built using Python, Pandas, and NumPy. Implements both Content-Based Filtering (calculating cosine similarity vectors over item features) and Collaborative Filtering to deliver personalized recommendations.',
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Cosine Similarity', 'Matrix Factorization'],
    features: [
      'Vectorization of metadata features with TF-IDF / Bag-of-Words embeddings',
      'Cosine similarity matrices computing mathematical proximity between user preferences and item catalogs',
      'Data preprocessing pipeline cleaning missing values, normalising matrices, and filtering noise',
      'Evaluation metrics measuring precision, recall, and recommendation ranking quality'
    ],
    github: 'https://github.com/Jan61234',
    demo: '#'
  },
  'smart-watering': {
    title: 'Smart Self-Watering Plant Pot',
    category: 'IoT / Embedded Systems',
    tagline: 'Automated Soil Hydration & Cloud Telemetry System',
    description: 'An autonomous Internet of Things (IoT) hardware-software solution built on the ESP32 microcontroller. The system continuously polls capacitive soil moisture and ambient temperature sensors, autonomously triggers micro-submersible water pumps when moisture drops below thresholds, and streams telemetry to the Blynk Cloud platform.',
    technologies: ['ESP32', 'C/C++ (Arduino Framework)', 'IoT', 'Blynk Cloud IoT', 'Sensors (Capacitive Moisture, DHT11)', 'Relay Actuator'],
    features: [
      'Real-time telemetry streaming over Wi-Fi to a responsive mobile/web dashboard via Blynk IoT',
      'Closed-loop automated threshold trigger ensuring plants receive exact hydration without water wastage',
      'Emergency cutoff and dry-run pump protection logic preventing hardware overheating',
      'Push notification alerts sent to user mobile device when reservoir water level is low'
    ],
    github: 'https://github.com/Jan61234',
    demo: '#'
  },
  'virtuline': {
    title: 'VirtuLine – Virtual Queue Manager',
    category: 'Full-Stack Software / Database Management',
    tagline: 'Digital Queue Management & Wait-Time Optimization Platform',
    description: 'A modern digital queue management system designed to eliminate crowded physical waiting lines in student administrative centers, campus clinics, and service desks. Provides digital token allocation, real-time wait-time estimation, and a SQLite-backed administrative console.',
    technologies: ['Python', 'HTML5', 'CSS3', 'JavaScript', 'SQLite3', 'DBMS Architecture'],
    features: [
      'Digital token distribution with automated estimated wait time computation',
      'Relational SQLite database schema enforcing ACID compliance and transaction logging',
      'Live administrative dashboard to call tokens, mark completions, and re-order queues',
      'Public display board view allowing visitors to track current serving status in real-time'
    ],
    github: 'https://github.com/Jan61234',
    demo: '#'
  }
};

function initProjectModals() {
  const modalOverlay = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-description');
  const modalTechList = document.getElementById('modal-tech-list');
  const modalFeatures = document.getElementById('modal-features');
  const modalGithubLink = document.getElementById('modal-github-link');
  const modalDemoLink = document.getElementById('modal-demo-link');

  if (!modalOverlay) return;

  function openModal(projectId) {
    const data = projectDetailsData[projectId];
    if (!data) return;

    modalCategory.textContent = data.category;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.description;
    
    // Render tech tags
    modalTechList.innerHTML = '';
    data.technologies.forEach(tech => {
      const span = document.createElement('span');
      span.className = 'tech-tag';
      span.textContent = tech;
      modalTechList.appendChild(span);
    });

    // Render feature bullet points
    modalFeatures.innerHTML = '';
    data.features.forEach(feat => {
      const li = document.createElement('li');
      li.textContent = feat;
      modalFeatures.appendChild(li);
    });

    modalGithubLink.href = data.github;
    if (data.demo && data.demo !== '#') {
      modalDemoLink.href = data.demo;
      modalDemoLink.style.display = 'inline-flex';
    } else {
      modalDemoLink.style.display = 'none';
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Attach click to all detail buttons
  document.querySelectorAll('.open-project-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      openModal(projectId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   3. PROJECT FILTER TABS
   -------------------------------------------------------------------------- */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   4. MOBILE NAVIGATION
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close nav on clicking any link
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

/* --------------------------------------------------------------------------
   5. SCROLL EFFECTS & SCROLLSPY
   -------------------------------------------------------------------------- */
function initScrollEffects() {
  const header = document.querySelector('.site-header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    // Header border glow on scroll
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // ScrollSpy active link tracking
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   6. CONTACT FEATURES: COPY EMAIL & FORM SUBMISSION
   -------------------------------------------------------------------------- */
function initContactFeatures() {
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast-notice');
  const toastText = document.getElementById('toast-text');

  function showToast(message) {
    if (!toast) return;
    toastText.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = copyBtn.getAttribute('data-email') || 'jananipriyab@example.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('✓ Email copied to clipboard!');
      }).catch(() => {
        showToast('✓ Email: ' + email);
      });
    });
  }

  // Contact form submission handling
  const contactForm = document.getElementById('portfolio-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('sender-name').value.trim();
      const email = document.getElementById('sender-email').value.trim();
      const message = document.getElementById('sender-message').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all required fields.');
        return;
      }

      // Simulate successful client-side send
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Transmitting...</span>';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = '<span>✓ Message Sent!</span>';
        showToast(`Thank you, ${name}! Your message has been received.`);
        contactForm.reset();
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 2500);
      }, 1000);
    });
  }
}
