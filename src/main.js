/* ===================================================================
   PCCoE Coding Club — Main Application
   =================================================================== */

import './style.css';

// ========================= DATA =========================

const CLUB_DATA = {
  stats: {
    members: 105,
    events: 50,
    wins: 25,
    projects: 40
  },

  focusAreas: [
    { icon: '⚡', title: 'Competitive Coding', desc: 'Regular coding rounds, DSA practice, algorithm workshops, and contest preparation for ICPC, Codeforces, LeetCode.' },
    { icon: '🚀', title: 'Hackathons', desc: 'Campus, national, and international hackathons focused on innovation, rapid prototyping, and winning solutions.' },
    { icon: '🏆', title: 'Challenge-to-Hire', desc: 'Training for coding assessments, hiring hackathons, and company-led technical challenges.' },
    { icon: '🛡️', title: 'Cybersecurity & CTFs', desc: 'Hands-on security learning, Capture The Flag competitions, and ethical hacking domains.' },
    { icon: '🌐', title: 'Open Source & Dev', desc: 'GSoC preparation, Git/GitHub workflows, collaborative development, and community contributions.' },
    { icon: '🔬', title: 'Research Projects', desc: 'Technical research, paper publishing, and experimental prototypes in emerging fields.' },
    { icon: '💡', title: 'Innovation & Products', desc: 'Turning ideas into real apps, tools, and scalable technical solutions for industry and society.' }
  ],

  achievements: [
    { badge: '🥇 1st Place', title: 'Smart India Hackathon (SIH)', desc: 'Past winners at IIT Gandhinagar. Facilitated 15 teams for SIH 2025-26, with 7 teams advancing past round one.', prize: '₹1,00,000', category: 'hackathon', image: '/images/sih-2024-win.jpg' },
    { badge: '🥉 3rd Place', title: 'AMD AI Sprint — AI Premier League', desc: 'Team (Tushar Badlani, Yash Varma, Soham Mhatre) secured 3rd in Track 1 using Qwen-3:4B, Llama-3.2:3B, LoRA, and dynamic K-shot prompting on AMD MI300x with 192GB VRAM.', prize: '₹50,000', category: 'hackathon', image: '/images/amd-ai-sprint.jpg' },
    { badge: '🎯 Top Performers', title: 'Competitive Coding Excellence', desc: 'Active participation and top rankings on Codeforces, LeetCode, and CodeChef. Members consistently preparing for ICPC Regionals.', prize: null, category: 'coding' },
    { badge: '🚀 Hackathon Selection', title: 'Indradhanu IGC Hackathon', desc: '4 teams successfully selected for round two after rigorous preliminary evaluations.', prize: null, category: 'hackathon' },
    { badge: '💼 Placements', title: 'Industry Placements & Internships', desc: 'Members secured roles and SaaS internships at Google, CrowdStrike, ConnectWise, Quick Heal, PTC, Addepar, EQ Technologic, and Josh Software.', prize: null, category: 'opensource' },
    { badge: '🔐 Security Champions', title: 'CTF Competitions', desc: 'Strong performance across national CTF events, with team members excelling in web exploitation and cryptography challenges.', prize: null, category: 'ctf' },
    { badge: '🌟 Open Source', title: 'GSoC & Open Source Selections', desc: 'Members selected for Google Summer of Code and contributed to major open-source projects including frameworks and developer tools.', prize: null, category: 'opensource' }
  ],

  events: [
    { date: 'Jul 2025', title: 'DSA & Placement Guidance Session', desc: 'Expert session by Vivek Gupta (AlgoZenith Founder, Ex-Google, ICPC World Finalist) on placement preparation and structured learning across DSA, CP, and Web Dev. Held at MECH Seminar Hall.', tag: 'Speaker', upcoming: false, image: '/images/dsa-session.jpg' },
    { date: 'Aug 2025', title: 'Algo Arena — DSA Contest', desc: 'Internal coding competition covering advanced DSA topics. Timed rounds with increasing difficulty.', tag: 'Contest', upcoming: true },
    { date: 'Sep 2025', title: 'Web3 & Blockchain Workshop', desc: 'Two-day hands-on workshop on smart contracts, Solidity, and decentralized app development.', tag: 'Workshop', upcoming: true },
    { date: 'Sep 2025', title: 'CTF Bootcamp — CyberSec Week', desc: 'Intensive cybersecurity bootcamp with live CTF challenges, covering forensics, web exploitation, and crypto.', tag: 'Bootcamp', upcoming: true },
    { date: 'Jan 2025', title: 'Google Gen AI Exchange Hackathon', desc: 'Participated in Google\'s Gen AI Exchange, building innovative AI-powered applications.', tag: 'Hackathon', upcoming: false },
    { date: 'Dec 2024', title: 'Open Source Sprint', desc: 'Week-long open source contribution drive, with mentorship for beginners on Git workflows and PR processes.', tag: 'Sprint', upcoming: false }
  ],

  roadmap: [
    { phase: 'Q1 2026', title: 'Foundation & Growth', items: ['Weekly DSA practice sessions', 'Onboard 100+ new members', 'Launch club website & blog', 'Internal coding contests'] },
    { phase: 'Q2 2026', title: 'Skill Building', items: ['Cybersecurity CTF bootcamp', 'Web3/Blockchain workshops', 'System design masterclasses', 'Inter-college coding competitions'] },
    { phase: 'Q3 2026', title: 'Competition Season', items: ['ICPC regional preparation', 'SIH 2026 team formation', 'IEEE Xtreme participation', 'Hackathon mentorship program'] },
    { phase: 'Q4 2026', title: 'Innovation & Impact', items: ['Annual tech fest', 'Research paper sprint', 'GSoC preparation workshops', 'Industry collaboration projects'] },
    { phase: '2027+', title: 'Future Vision', items: ['National-level hackathon hosted by PCCoE', 'Alumni mentorship network', 'Startup incubation support', 'International competition wins'] }
  ],

  blogs: [
    { title: 'How We Won SIH 2024 at IIT Gandhinagar', meta: { author: 'Team Innovators', date: 'Oct 2025', readTime: '8 min' }, desc: 'Our journey from ideation to winning 1st place at Smart India Hackathon — team strategy, late-night debugging, and the final pitch.', category: 'event-recap', gradient: 'linear-gradient(135deg, #0ea5e9, #7c3aed)' },
    { title: 'A Beginner\'s Guide to Competitive Programming', meta: { author: 'Coding Club', date: 'Nov 2025', readTime: '12 min' }, desc: 'Start your CP journey with the right mindset, platform choices, topic roadmap, and practice strategies used by our top-rated members.', category: 'technical', gradient: 'linear-gradient(135deg, #22c55e, #0ea5e9)' },
    { title: 'From Zero to GSoC: A Member\'s Story', meta: { author: 'Club Member', date: 'Dec 2025', readTime: '10 min' }, desc: 'How one of our members went from a first-year beginner to a GSoC contributor — the exact steps, resources, and community support.', category: 'member-story', gradient: 'linear-gradient(135deg, #f472b6, #7c3aed)' },
    { title: 'Cybersecurity 101: Getting Started with CTFs', meta: { author: 'Security Team', date: 'Jan 2026', readTime: '7 min' }, desc: 'Cracking your first CTF challenge — tools, platforms, and methodologies covered in our cybersecurity bootcamp series.', category: 'technical', gradient: 'linear-gradient(135deg, #ef4444, #f97316)' },
    { title: 'AMD AI Sprint: Behind the Scenes', meta: { author: 'AI Team', date: 'Sep 2025', readTime: '6 min' }, desc: 'Building an AI solution under the pressure of a timed sprint — our architecture decisions, model training, and deployment strategy.', category: 'event-recap', gradient: 'linear-gradient(135deg, #7c3aed, #ec4899)' },
    { title: 'Club Announcements: Semester Plans 2026', meta: { author: 'Core Team', date: 'Feb 2026', readTime: '4 min' }, desc: 'Upcoming workshops, contests, bootcamps, and speaker sessions planned for the current semester. Mark your calendars!', category: 'announcement', gradient: 'linear-gradient(135deg, #f59e0b, #22c55e)' }
  ],

  team: {
    faculty: [
      { name: 'Mr. Abhishek S. Raut', role: 'Faculty In-Charge / Secretary', initials: 'AR', bio: 'Guiding the club\'s vision and connecting students with industry and academic opportunities.' }
    ],
    core: [
      { name: 'President', role: 'Club President', initials: 'P', bio: 'Leading club strategy, events, and community growth.' },
      { name: 'Vice President', role: 'Vice President', initials: 'VP', bio: 'Co-leading operations and inter-club coordination.' },
      { name: 'Treasurer', role: 'Treasurer', initials: 'TR', bio: 'Managing club finances, sponsorships, and event budgets.' },
      { name: 'Student Secretary', role: 'Student Secretary', initials: 'SS', bio: 'Overseeing club documentation, scheduling, and official communications.' }
    ],
    leads: [
      { name: 'ICPC Lead', role: 'Competitive Coding', initials: 'IL', bio: 'Driving DSA practice, contests, and ICPC regional preparation.' },
      { name: 'CTF Lead', role: 'Cybersecurity & CTF', initials: 'CL', bio: 'Leading CTF training and cybersecurity bootcamps.' },
      { name: 'GSoC Lead', role: 'Open Source Development', initials: 'GL', bio: 'Managing open-source projects, and GSoC mentorship.' },
      { name: 'IEEE Xtreme Lead', role: 'Hackathons & IEEE Xtreme', initials: 'XL', bio: 'Steering team formations for 24-hour coding competitions and hackathons.' }
    ]
  },

  faqs: [
    { q: 'Who can join the Coding Club?', a: 'Any student of PCCoE, regardless of branch or year, can join! Whether you\'re a complete beginner or an experienced coder, we have opportunities for everyone to learn and grow.' },
    { q: 'Are there any membership fees?', a: 'The club operates with minimal enrollment fees to cover event logistics, platform access, and workshop materials. The exact amount is announced at the start of each academic year.' },
    { q: 'How often do you conduct events?', a: 'We host 2-3 events per month on average, including weekly practice sessions, monthly contests, bi-monthly workshops, and special speaker sessions throughout the semester.' },
    { q: 'Can I participate in hackathons as a beginner?', a: 'Absolutely! We actively encourage beginners to join hackathon teams. We provide mentorship, team formation assistance, and pre-hackathon bootcamps to get you ready.' },
    { q: 'How do I become a core team member or domain lead?', a: 'Core team positions are filled through an annual selection process based on participation, contributions, leadership, and technical skills demonstrated throughout the year.' }
  ]
};

// ========================= ROUTER =========================

const routes = {
  '/': renderHomePage,
  '/about': renderAboutPage,
  '/achievements': renderAchievementsPage,
  '/events': renderEventsPage,
  '/plans': renderPlansPage,
  '/blogs': renderBlogsPage,
  '/team': renderTeamPage,
  '/join': renderJoinPage
};

function getRoute() {
  const hash = window.location.hash || '#/';
  return hash.slice(1) || '/';
}

function navigateTo(path) {
  window.location.hash = '#' + path;
}

function router() {
  const path = getRoute();
  const render = routes[path] || routes['/'];
  const app = document.getElementById('app');

  // Page transition
  app.style.opacity = '0';
  app.style.transform = 'translateY(10px)';

  setTimeout(() => {
    render(app);
    app.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    app.style.opacity = '1';
    app.style.transform = 'translateY(0)';

    // Update active nav
    updateActiveNav(path);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Setup scroll reveals
    setTimeout(setupScrollReveal, 100);

    // Setup interactive elements
    setTimeout(setupInteractions, 200);

    // Setup 3D tilt on cards
    setTimeout(setupTiltCards, 300);
  }, 200);
}

function updateActiveNav(path) {
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === '#' + path || (path === '/' && href === '#/')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ========================= SCROLL REVEAL =========================

function setupScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// ========================= INTERACTIONS =========================

function setupInteractions() {
  // Animated counters
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    animateCounter(el, target);
  });

  // FAQ accordions
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isActive = item.classList.contains('active');

      // Close all
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-answer').style.maxHeight = '0';
      });

      // Open clicked if not already active
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      const parent = btn.closest('.section');

      // Update active button
      parent.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards
      const cards = parent.querySelectorAll('[data-category]');
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
          card.style.animation = 'fadeInUp 0.4s ease both';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Form submission
  const form = document.getElementById('join-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.btn-primary');
      btn.textContent = '✓ Registered Successfully!';
      btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
      setTimeout(() => {
        btn.textContent = 'Register Now →';
        btn.style.background = '';
        form.reset();
      }, 3000);
    });
  }
}

function animateCounter(el, target) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let current = 0;
        const increment = target / 60;
        const suffix = el.dataset.suffix || '';
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = Math.floor(current) + suffix;
        }, 16);
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(el);
}

// ========================= PAGE RENDERERS =========================

function renderHomePage(app) {
  const { stats, focusAreas, achievements, events, blogs } = CLUB_DATA;

  app.innerHTML = `
    <!-- HERO -->
    <section class="hero">
      <div class="hero-float">{ code }</div>
      <div class="hero-float">function()</div>
      <div class="hero-float">// hack</div>
      <div class="hero-float">&lt;div/&gt;</div>
      <div class="hero-float">git push</div>
      
      <div class="hero-content">
        <div class="hero-badge">
          <span class="dot"></span>
          Open for Registrations — 2025-26
        </div>
        
        <h1 class="hero-title">
          <span class="line">PCCoE</span>
          <span class="line gradient-text">Coding Club</span>
        </h1>
        
        <div class="hero-tagline">
          <span class="typed-text">Code. Compete. Create.</span>
        </div>
        
        <p class="hero-description">
          A student-driven community focused on competitive programming, hackathons, 
          cybersecurity, open-source development, and research.
        </p>
        
        <div class="hero-buttons">
          <a href="#/join" class="btn btn-primary">Join the Club →</a>
          <a href="#/about" class="btn btn-outline">Learn More</a>
        </div>
        
        <div class="hero-stats">
          <div class="hero-stat">
            <div class="stat-number" data-count="${stats.members}" data-suffix="+">0</div>
            <div class="stat-label">Members</div>
          </div>
          <div class="hero-stat">
            <div class="stat-number" data-count="${stats.events}" data-suffix="+">0</div>
            <div class="stat-label">Events</div>
          </div>
          <div class="hero-stat">
            <div class="stat-number" data-count="${stats.wins}" data-suffix="+">0</div>
            <div class="stat-label">Wins</div>
          </div>
          <div class="hero-stat">
            <div class="stat-number" data-count="${stats.projects}" data-suffix="+">0</div>
            <div class="stat-label">Projects</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT SNAPSHOT -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-badge">Who We Are</div>
          <h2 class="section-title">Empowering <span class="gradient-text">Future Tech Leaders</span></h2>
          <p class="section-subtitle">We create a strong ecosystem where students build real-world skills and gain exposure to innovation, research, and recruitment pathways.</p>
        </div>
        
        <div class="about-grid">
          <div class="glass-card about-card reveal delay-1">
            <div class="card-number">01</div>
            <h3>Our Vision</h3>
            <p>To build a strong and inclusive technical community that nurtures problem-solving, innovation, and technical excellence at national and international levels.</p>
          </div>
          <div class="glass-card about-card reveal delay-2">
            <div class="card-number">02</div>
            <h3>Our Mission</h3>
            <p>Equipping students with programming, cybersecurity, and development skills through competitions, workshops, mentorship, and collaborative innovation.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FOCUS AREAS -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-badge">What We Do</div>
          <h2 class="section-title">Our <span class="gradient-text">Focus Areas</span></h2>
          <p class="section-subtitle">Seven key verticals driving our community's growth and impact.</p>
        </div>
        
        <div class="focus-grid">
          ${focusAreas.map((area, i) => `
            <div class="glass-card focus-card reveal delay-${i + 1}">
              <div class="card-icon">${area.icon}</div>
              <h3>${area.title}</h3>
              <p>${area.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- STATS BAR -->
    <section class="section stats-section">
      <div class="container">
        <div class="stats-grid reveal">
          <div class="stat-item">
            <div class="stat-number" data-count="${stats.members}" data-suffix="+">0</div>
            <div class="stat-label">Active Members</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-count="${stats.events}" data-suffix="+">0</div>
            <div class="stat-label">Events Organized</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-count="${stats.wins}" data-suffix="+">0</div>
            <div class="stat-label">Competition Wins</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-count="${stats.projects}" data-suffix="+">0</div>
            <div class="stat-label">Projects Built</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ACHIEVEMENTS PREVIEW -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-badge">Track Record</div>
          <h2 class="section-title">Our <span class="gradient-text">Achievements</span></h2>
          <p class="section-subtitle">Highlights from our journey of excellence and innovation.</p>
        </div>
        
        <div class="achievements-grid">
          ${achievements.slice(0, 4).map((a, i) => `
            <div class="glass-card achievement-card reveal delay-${i + 1}" data-category="${a.category}">
              ${a.image ? `<img src="${a.image}" alt="${a.title}" class="card-image" loading="lazy" />` : ''}
              <div class="card-badge">${a.badge}</div>
              <h3>${a.title}</h3>
              <p>${a.desc}</p>
              ${a.prize ? `<div class="prize">🏆 Prize: ${a.prize}</div>` : ''}
            </div>
          `).join('')}
        </div>
        
        <div style="text-align: center; margin-top: 2.5rem;" class="reveal">
          <a href="#/achievements" class="btn btn-outline">View All Achievements →</a>
        </div>
      </div>
    </section>

    <!-- UPCOMING EVENTS -->
    <section class="section" style="background: var(--bg-secondary); border-top: 1px solid var(--glass-border); border-bottom: 1px solid var(--glass-border);">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-badge">What's Next</div>
          <h2 class="section-title">Upcoming <span class="gradient-text">Events</span></h2>
          <p class="section-subtitle">Mark your calendars for these exciting opportunities.</p>
        </div>
        
        <div class="events-grid">
          ${events.filter(e => e.upcoming).map((e, i) => `
            <div class="glass-card event-card reveal delay-${i + 1}">
              ${e.image ? `<img src="${e.image}" alt="${e.title}" class="card-image" loading="lazy" />` : ''}
              <div class="event-date">📅 ${e.date}</div>
              <h3>${e.title}</h3>
              <p>${e.desc}</p>
              <span class="event-tag">${e.tag}</span>
            </div>
          `).join('')}
        </div>
        
        <div style="text-align: center; margin-top: 2.5rem;" class="reveal">
          <a href="#/events" class="btn btn-outline">View All Events →</a>
        </div>
      </div>
    </section>

    <!-- LATEST BLOGS -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-badge">From Our Blog</div>
          <h2 class="section-title">Latest <span class="gradient-text">Articles</span></h2>
          <p class="section-subtitle">Stories, tutorials, and insights from our community.</p>
        </div>
        
        <div class="blog-grid">
          ${blogs.slice(0, 3).map((b, i) => `
            <div class="glass-card blog-card reveal delay-${i + 1}">
              <div class="blog-image" style="background: ${b.gradient};"></div>
              <div class="blog-content">
                <div class="blog-meta">
                  <span>✍️ ${b.meta.author}</span>
                  <span>📖 ${b.meta.readTime}</span>
                </div>
                <h3>${b.title}</h3>
                <p>${b.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
        
        <div style="text-align: center; margin-top: 2.5rem;" class="reveal">
          <a href="#/blogs" class="btn btn-outline">Read All Blogs →</a>
        </div>
      </div>
    </section>

    <!-- CTA BANNER -->
    <section class="section">
      <div class="container">
        <div class="cta-banner reveal">
          <h2>Ready to <span class="gradient-text">Level Up?</span></h2>
          <p>Join 200+ students who are coding, competing, and creating the future.</p>
          <a href="#/join" class="btn btn-primary">Join PCCoE Coding Club →</a>
        </div>
      </div>
    </section>
  `;
}

function renderAboutPage(app) {
  const { focusAreas } = CLUB_DATA;

  app.innerHTML = `
    <div class="page-header">
      <div class="container">
        <div class="section-badge">About Us</div>
        <h1 class="section-title" style="margin-top: 1rem;">About <span class="gradient-text">PCCoE Coding Club</span></h1>
        <p class="section-subtitle" style="margin-top: 1rem;">A vibrant technical community dedicated to excellence and innovation since day one.</p>
      </div>
    </div>

    <!-- Club Overview -->
    <section class="section" style="padding-top: 2rem;">
      <div class="container">
        <div class="glass-card reveal" style="padding: 3rem; margin-bottom: 3rem;">
          <h2 style="margin-bottom: 1.5rem; font-size: 1.5rem;">🎯 Club Overview</h2>
          <img src="/images/tech-wordcloud.png" alt="Technology Word Cloud" class="about-image" loading="lazy" />
          <p style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.8;">
            The <strong style="color: var(--text-primary);">PCCoE Coding Club</strong> is a dynamic student-driven community focused on 
            <strong style="color: var(--accent-1);">competitive programming, hackathons, cybersecurity, open-source development, research projects, and industry-ready problem solving</strong>. 
            The club helps students explore technology beyond the classroom through hands-on learning, mentorship, collaborative projects, and high-impact competitions.
          </p>
          <p style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.8; margin-top: 1rem;">
            We actively prepare students for national and international opportunities such as 
            <strong style="color: var(--text-primary);">ICPC, GSoC, CTFs, IEEE Xtreme, hackathons, coding contests, and challenge-based hiring competitions</strong>. 
            By combining practice, peer learning, expert guidance, and competition exposure, we empower students to grow into confident developers, problem solvers, and future tech leaders.
          </p>
        </div>

        <div class="about-grid" style="margin-bottom: 3rem;">
          <div class="glass-card about-card reveal delay-1">
            <div class="card-number">01</div>
            <h3>🔭 Vision</h3>
            <p>To build a strong and inclusive technical community at PCCoE that nurtures problem-solving, innovation, research, teamwork, and technical excellence — enabling students to excel at both national and international levels. We envision the club as a launchpad where students transform curiosity into capability, skills into achievements, and ideas into impactful solutions.</p>
          </div>
          <div class="glass-card about-card reveal delay-2">
            <div class="card-number">02</div>
            <h3>🎯 Mission</h3>
            <p>To provide students with a platform to strengthen their abilities in programming, cybersecurity, software development, research, and innovation through continuous learning and practical exposure — preparing them for competitive coding, hackathons, hiring challenges, and collaborative innovation.</p>
          </div>
        </div>

        <!-- Objectives -->
        <div class="glass-card reveal" style="padding: 3rem; margin-bottom: 3rem;">
          <h2 style="margin-bottom: 1.5rem; font-size: 1.5rem;">📋 Objectives</h2>
          <ul class="objectives-list">
            <li>Promote competitive coding culture through regular practice sessions, contests, and preparation for ICPC, Codeforces, and IEEE Xtreme</li>
            <li>Encourage participation in national and international hackathons for innovation and recognition</li>
            <li>Prepare students for challenge-based hiring competitions and technical recruitment</li>
            <li>Support research projects, technical paper development, and exploration of emerging fields</li>
            <li>Foster a culture of open-source contribution, collaboration, and community development</li>
            <li>Organize workshops, mentorship programs, speaker sessions, bootcamps, and mock contests</li>
            <li>Help students build leadership, communication, teamwork, and project management skills</li>
            <li>Provide a supportive network for learning from peers, seniors, alumni, and industry experts</li>
            <li>Enhance employability, innovation mindset, and career readiness</li>
          </ul>
        </div>

        <!-- Focus Areas -->
        <div class="section-header reveal">
          <h2 class="section-title">Focus <span class="gradient-text">Domains</span></h2>
        </div>
        
        <div class="focus-grid">
          ${focusAreas.map((area, i) => `
            <div class="glass-card focus-card reveal delay-${(i % 4) + 1}">
              <div class="card-icon">${area.icon}</div>
              <h3>${area.title}</h3>
              <p>${area.desc}</p>
            </div>
          `).join('')}
        </div>

        <!-- Branding -->
        <div class="glass-card reveal" style="padding: 3rem; margin-top: 3rem; text-align: center;">
          <h2 style="margin-bottom: 1rem; font-size: 1.5rem;">🏛️ PCCoE — Our Pillars</h2>
          <p style="color: var(--text-secondary); margin-bottom: 2rem;">The PCCoE acronym represents our five core values:</p>
          <div style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap;">
            ${['Perfection', 'Collaboration', 'Creativity', 'Optimize', 'Empower'].map((v, i) => `
              <div style="text-align: center;" class="reveal delay-${i + 1}">
                <div style="font-size: 2rem; font-weight: 900; font-family: var(--font-heading); background: var(--accent-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${v.charAt(0)}</div>
                <div style="font-size: 0.85rem; color: var(--text-secondary); font-weight: 500;">${v}</div>
              </div>
            `).join('')}
          </div>
          <div style="margin-top: 3rem;" class="reveal">
            <img src="/images/poster.png" alt="PCCoE Coding Club Poster" class="poster-display" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderAchievementsPage(app) {
  const { achievements } = CLUB_DATA;
  const categories = ['all', ...new Set(achievements.map(a => a.category))];

  app.innerHTML = `
    <div class="page-header">
      <div class="container">
        <div class="section-badge">Track Record</div>
        <h1 class="section-title" style="margin-top: 1rem;">Our <span class="gradient-text">Achievements</span></h1>
        <p class="section-subtitle" style="margin-top: 1rem;">Competition wins, open-source selections, and research milestones.</p>
      </div>
    </div>

    <section class="section" style="padding-top: 2rem;">
      <div class="container">
        <div class="filter-bar reveal">
          ${categories.map(c => `
            <button class="filter-btn ${c === 'all' ? 'active' : ''}" data-filter="${c}">
              ${c === 'all' ? 'All' : c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          `).join('')}
        </div>
        
        <div class="achievements-grid">
          ${achievements.map((a, i) => `
            <div class="glass-card achievement-card reveal delay-${(i % 4) + 1}" data-category="${a.category}">
              ${a.image ? `<img src="${a.image}" alt="${a.title}" class="card-image" loading="lazy" />` : ''}
              <div class="card-badge">${a.badge}</div>
              <h3>${a.title}</h3>
              <p>${a.desc}</p>
              ${a.prize ? `<div class="prize">🏆 Prize: ${a.prize}</div>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="cta-banner reveal">
          <h2>Want to Add to Our <span class="gradient-text">Trophy Wall?</span></h2>
          <p>Join us and compete in hackathons, coding contests, and CTFs.</p>
          <a href="#/join" class="btn btn-primary">Join the Club →</a>
        </div>
      </div>
    </section>
  `;
}

function renderEventsPage(app) {
  const { events } = CLUB_DATA;
  const upcoming = events.filter(e => e.upcoming);
  const past = events.filter(e => !e.upcoming);

  app.innerHTML = `
    <div class="page-header">
      <div class="container">
        <div class="section-badge">Stay Updated</div>
        <h1 class="section-title" style="margin-top: 1rem;">Events & <span class="gradient-text">Workshops</span></h1>
        <p class="section-subtitle" style="margin-top: 1rem;">Workshops, contests, hackathons, and speaker sessions throughout the year.</p>
      </div>
    </div>

    <section class="section" style="padding-top: 2rem;">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title" style="font-size: 2rem;">🔜 Upcoming <span class="gradient-text">Events</span></h2>
        </div>
        
        <div class="events-grid">
          ${upcoming.map((e, i) => `
            <div class="glass-card event-card reveal delay-${i + 1}">
              ${e.image ? `<img src="${e.image}" alt="${e.title}" class="card-image" loading="lazy" />` : ''}
              <div class="event-date">📅 ${e.date}</div>
              <h3>${e.title}</h3>
              <p>${e.desc}</p>
              <span class="event-tag">${e.tag}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section" style="background: var(--bg-secondary); border-top: 1px solid var(--glass-border); border-bottom: 1px solid var(--glass-border);">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title" style="font-size: 2rem;">📸 Past <span class="gradient-text">Events</span></h2>
        </div>
        
        <div class="events-grid">
          ${past.map((e, i) => `
            <div class="glass-card event-card reveal delay-${i + 1}">
              ${e.image ? `<img src="${e.image}" alt="${e.title}" class="card-image" loading="lazy" />` : ''}
              <div class="event-date">📅 ${e.date}</div>
              <h3>${e.title}</h3>
              <p>${e.desc}</p>
              <span class="event-tag">${e.tag}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Event Calendar Timeline -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title" style="font-size: 2rem;">📆 Event <span class="gradient-text">Calendar</span></h2>
        </div>
        
        <div class="timeline">
          ${events.map((e, i) => `
            <div class="timeline-item reveal">
              <div class="timeline-content">
                <div class="timeline-date">${e.date}</div>
                <h3>${e.title}</h3>
                <p>${e.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderPlansPage(app) {
  const { roadmap } = CLUB_DATA;

  app.innerHTML = `
    <div class="page-header">
      <div class="container">
        <div class="section-badge">Our Journey</div>
        <h1 class="section-title" style="margin-top: 1rem;">Plans & <span class="gradient-text">Roadmap</span></h1>
        <p class="section-subtitle" style="margin-top: 1rem;">A clear path from where we are to where we're going.</p>
      </div>
    </div>

    <section class="section" style="padding-top: 2rem;">
      <div class="container">
        <div class="timeline">
          ${roadmap.map((phase, i) => `
            <div class="timeline-item reveal delay-${(i % 4) + 1}">
              <div class="timeline-content">
                <div class="timeline-date">${phase.phase}</div>
                <h3>${phase.title}</h3>
                <ul style="list-style: none; margin-top: 0.75rem;">
                  ${phase.items.map(item => `
                    <li style="display: flex; gap: 0.5rem; align-items: flex-start; color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 0.4rem;">
                      <span style="color: var(--accent-1); flex-shrink: 0;">▸</span>
                      ${item}
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="cta-banner reveal">
          <h2>Shape the <span class="gradient-text">Future With Us</span></h2>
          <p>Be part of the journey. Your ideas, code, and passion drive our roadmap.</p>
          <a href="#/join" class="btn btn-primary">Join PCCoE Coding Club →</a>
        </div>
      </div>
    </section>
  `;
}

function renderBlogsPage(app) {
  const { blogs } = CLUB_DATA;
  const categories = ['all', ...new Set(blogs.map(b => b.category))];
  const categoryLabels = {
    'all': 'All',
    'technical': 'Technical',
    'event-recap': 'Event Recaps',
    'member-story': 'Member Stories',
    'announcement': 'Announcements'
  };

  app.innerHTML = `
    <div class="page-header">
      <div class="container">
        <div class="section-badge">Knowledge Hub</div>
        <h1 class="section-title" style="margin-top: 1rem;">Our <span class="gradient-text">Blog</span></h1>
        <p class="section-subtitle" style="margin-top: 1rem;">Technical articles, event recaps, member stories, and announcements.</p>
      </div>
    </div>

    <section class="section" style="padding-top: 2rem;">
      <div class="container">
        <div class="filter-bar reveal">
          ${categories.map(c => `
            <button class="filter-btn ${c === 'all' ? 'active' : ''}" data-filter="${c}">
              ${categoryLabels[c] || c}
            </button>
          `).join('')}
        </div>
        
        <div class="blog-grid">
          ${blogs.map((b, i) => `
            <div class="glass-card blog-card reveal delay-${(i % 3) + 1}" data-category="${b.category}">
              <div class="blog-image" style="background: ${b.gradient};"></div>
              <div class="blog-content">
                <div class="blog-meta">
                  <span>✍️ ${b.meta.author}</span>
                  <span>📅 ${b.meta.date}</span>
                  <span>📖 ${b.meta.readTime}</span>
                </div>
                <h3>${b.title}</h3>
                <p>${b.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderTeamPage(app) {
  const { team } = CLUB_DATA;

  app.innerHTML = `
    <div class="page-header">
      <div class="container">
        <div class="section-badge">Our People</div>
        <h1 class="section-title" style="margin-top: 1rem;">Meet the <span class="gradient-text">Team</span></h1>
        <p class="section-subtitle" style="margin-top: 1rem;">The passionate people powering the PCCoE Coding Club.</p>
      </div>
    </div>

    <!-- Faculty Coordinator -->
    <section class="section" style="padding-top: 2rem;">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title" style="font-size: 2rem;">🎓 Faculty <span class="gradient-text">Advisor</span></h2>
        </div>
        
        <div style="max-width: 400px; margin: 0 auto;">
          ${team.faculty.map(m => `
            <div class="glass-card team-card reveal">
              <div class="avatar">${m.initials}</div>
              <h3>${m.name}</h3>
              <div class="role">${m.role}</div>
              <div class="bio">${m.bio}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Core Team -->
    <section class="section" style="background: var(--bg-secondary); border-top: 1px solid var(--glass-border); border-bottom: 1px solid var(--glass-border);">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title" style="font-size: 2rem;">⚙️ Core <span class="gradient-text">Team</span></h2>
        </div>
        
        <div class="team-grid">
          ${team.core.map((m, i) => `
            <div class="glass-card team-card reveal delay-${i + 1}">
              <div class="avatar">${m.initials}</div>
              <h3>${m.name}</h3>
              <div class="role">${m.role}</div>
              <div class="bio">${m.bio}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Domain Leads -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title" style="font-size: 2rem;">🚀 Domain <span class="gradient-text">Leads</span></h2>
        </div>
        
        <div class="team-grid">
          ${team.leads.map((m, i) => `
            <div class="glass-card team-card reveal delay-${i + 1}">
              <div class="avatar">${m.initials}</div>
              <h3>${m.name}</h3>
              <div class="role">${m.role}</div>
              <div class="bio">${m.bio}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="cta-banner reveal">
          <h2>Want to Be <span class="gradient-text">Part of the Team?</span></h2>
          <p>Core team applications open at the start of each academic year.</p>
          <a href="#/join" class="btn btn-primary">Join the Club →</a>
        </div>
      </div>
    </section>
  `;
}

function renderJoinPage(app) {
  const { faqs } = CLUB_DATA;

  app.innerHTML = `
    <div class="page-header">
      <div class="container">
        <div class="section-badge">Get Involved</div>
        <h1 class="section-title" style="margin-top: 1rem;">Join <span class="gradient-text">PCCoE Coding Club</span></h1>
        <p class="section-subtitle" style="margin-top: 1rem;">Register, connect, and start your journey with us today.</p>
      </div>
    </div>

    <section class="section" style="padding-top: 2rem;">
      <div class="container">
        <div class="join-section">
          <!-- Registration Form -->
          <div class="reveal">
            <div class="glass-card" style="padding: 2.5rem;">
              <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem;">📝 Registration Form</h2>
              <p style="color: var(--text-secondary); margin-bottom: 2rem; font-size: 0.9rem;">Fill in your details and we'll get you started.</p>
              
              <form id="join-form">
                <div class="form-group">
                  <label for="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Your full name" required />
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="your.email@pccoepune.org" required />
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                  <div class="form-group">
                    <label for="year">Year</label>
                    <select id="year" name="year" required>
                      <option value="">Select Year</option>
                      <option value="FE">First Year (FE)</option>
                      <option value="SE">Second Year (SE)</option>
                      <option value="TE">Third Year (TE)</option>
                      <option value="BE">Final Year (BE)</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="branch">Branch</label>
                    <select id="branch" name="branch" required>
                      <option value="">Select Branch</option>
                      <option value="CSE">Computer Science</option>
                      <option value="IT">Information Technology</option>
                      <option value="ENTC">Electronics & Telecom</option>
                      <option value="Mech">Mechanical</option>
                      <option value="Civil">Civil</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label for="interest">Area of Interest</label>
                  <select id="interest" name="interest" required>
                    <option value="">Select Interest</option>
                    <option value="cp">Competitive Programming</option>
                    <option value="hackathon">Hackathons</option>
                    <option value="cybersec">Cybersecurity & CTFs</option>
                    <option value="opensource">Open Source & Development</option>
                    <option value="aiml">AI / Machine Learning</option>
                    <option value="research">Research Projects</option>
                    <option value="all">Everything!</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="message">Why do you want to join? (Optional)</label>
                  <textarea id="message" name="message" placeholder="Tell us about yourself..."></textarea>
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center;">Register Now →</button>
              </form>
            </div>
          </div>

          <!-- Contact Info + FAQ -->
          <div>
            <!-- Contact Info -->
            <div class="glass-card reveal delay-1" style="padding: 2.5rem; margin-bottom: 2rem;">
              <h2 style="font-size: 1.5rem; margin-bottom: 1.5rem;">📬 Contact Us</h2>
              
              <div class="contact-info-card">
                <div class="contact-item">
                  <div class="contact-icon">📧</div>
                  <div>
                    <h4>Email</h4>
                    <p>codingclub@pccoepune.org</p>
                  </div>
                </div>
                <div class="contact-item">
                  <div class="contact-icon">📍</div>
                  <div>
                    <h4>Location</h4>
                    <p>Pimpri Chinchwad College of Engineering, Pune, Maharashtra</p>
                  </div>
                </div>
                <div class="contact-item">
                  <div class="contact-icon">🕒</div>
                  <div>
                    <h4>Sessions</h4>
                    <p>Mon-Fri, 5:00 PM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Quick Registration QR -->
            <div class="glass-card reveal delay-2" style="padding: 2rem; margin-bottom: 2rem;">
              <h2 style="font-size: 1.4rem; text-align: center;">📱 Quick Registration</h2>
              <div class="qr-section">
                <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1rem;">Scan the QR code to register from your mobile device.</p>
                <img src="/images/registration-qr.png" alt="Registration QR Code" loading="lazy" />
              </div>
            </div>

            <!-- FAQs -->
            <div class="glass-card reveal delay-3" style="padding: 2.5rem;">
                  <div class="contact-icon">🕐</div>
                  <div>
                    <h4>Sessions</h4>
                    <p>Mon-Fri, 5:00 PM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              <div style="margin-top: 1.5rem;">
                <h4 style="margin-bottom: 0.75rem; font-size: 0.9rem;">Follow Us</h4>
                <div class="social-links">
                  <a href="https://github.com" class="social-link" target="_blank" rel="noopener" title="GitHub">🐙</a>
                  <a href="https://linkedin.com" class="social-link" target="_blank" rel="noopener" title="LinkedIn">💼</a>
                  <a href="https://instagram.com" class="social-link" target="_blank" rel="noopener" title="Instagram">📸</a>
                  <a href="https://twitter.com" class="social-link" target="_blank" rel="noopener" title="Twitter">🐦</a>
                  <a href="https://discord.com" class="social-link" target="_blank" rel="noopener" title="Discord">💬</a>
                </div>
              </div>
            </div>

            <!-- FAQ -->
            <div class="glass-card reveal delay-2" style="padding: 2.5rem;">
              <h2 style="font-size: 1.5rem; margin-bottom: 1.5rem;">❓ FAQ</h2>
              <div class="faq-list">
                ${faqs.map(f => `
                  <div class="faq-item">
                    <button class="faq-question">
                      ${f.q}
                      <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                      <p>${f.a}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ========================= PARTICLES =========================

function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouse = { x: -1000, y: -1000 };
  let animationId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = [];
    const count = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 80);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? '0, 212, 255' : '124, 58, 237'
      });
    }
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      // Mouse repulsion
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) {
        p.x += dx * 0.01;
        p.y += dy * 0.01;
      }

      // Draw dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
      ctx.fill();

      // Connect nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const ddx = p.x - p2.x;
        const ddy = p.y - p2.y;
        const d = Math.sqrt(ddx * ddx + ddy * ddy);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 212, 255, ${0.06 * (1 - d / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });

    animationId = requestAnimationFrame(drawParticles);
  }

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });

  resize();
  createParticles();
  drawParticles();
}

// ========================= CURSOR GLOW =========================

function initCursorGlow() {
  const glow = document.getElementById('cursor-glow');
  if (!glow) return;

  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;

  window.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    glow.classList.add('visible');
  });

  window.addEventListener('mouseleave', () => {
    glow.classList.remove('visible');
  });

  function animate() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;
    glow.style.left = currentX + 'px';
    glow.style.top = currentY + 'px';
    requestAnimationFrame(animate);
  }

  animate();
}

// ========================= SCROLL TO TOP =========================

function initScrollToTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ========================= TYPING EFFECT =========================

function initTypingEffect() {
  const taglines = [
    'Code. Compete. Create.',
    'From Code to Competition to Career.',
    'Learn, Build, Compete, Innovate.',
    'Empowering Coders & Innovators.'
  ];
  let taglineIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function typeLoop() {
    const el = document.querySelector('.typed-text');
    if (!el) return;

    const current = taglines[taglineIdx];

    if (!isDeleting) {
      el.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        isDeleting = true;
        setTimeout(typeLoop, 2500);
        return;
      }
      setTimeout(typeLoop, 80);
    } else {
      el.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        isDeleting = false;
        taglineIdx = (taglineIdx + 1) % taglines.length;
        setTimeout(typeLoop, 400);
        return;
      }
      setTimeout(typeLoop, 40);
    }
  }

  // Start after hero animation completes
  setTimeout(typeLoop, 1500);
}

// ========================= TILT EFFECT =========================

function setupTiltCards() {
  document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -3;
      const rotateY = ((x - centerX) / centerX) * 3;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ========================= INITIALIZATION =========================

function init() {
  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close mobile nav on link click
  navLinks.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    }
  });

  // Header scroll effect
  window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Route handler
  window.addEventListener('hashchange', router);
  router();

  // Premium features
  initParticles();
  initCursorGlow();
  initScrollToTop();
  initTypingEffect();
}

// Start when DOM is ready
document.addEventListener('DOMContentLoaded', init);

