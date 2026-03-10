/* ===================================================================
   PCCoE Coding Club — Main Application
   =================================================================== */

import './style.css';
import { TEAM_DATA } from './teamData.js';

// ========================= DATA =========================

const CLUB_DATA = {
  stats: {
    members: TEAM_DATA.length,
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
    { badge: '🏅 Finalist', title: 'Fujitsu Quantum Challenge 2026', desc: 'Reached the final round of this prestigious global quantum computing competition. One of the few teams from India to advance to the final stage.', prize: 'Ongoing', category: 'coding' },
    { badge: '📡 ISRO RESPOND 2025', title: 'RES-SAC-2025-028 Proposal', desc: 'Title: "SDN-Based Network with Post-Quantum Cryptography for Secure and Optimized Traffic Management". <a href="https://www.sac.gov.in/respond/" target="_blank">View SAC RESPOND Portal</a>.', prize: 'Proposal Phase', category: 'research' },
    { badge: '🔬 Research Portfolio', title: 'ISRO RESPOND References', desc: 'Managing several research proposals including RES-VSSC-2025-027, RES-SAC-2025-014, and RES-NRSC-2025-002. <a href="https://www.isro.gov.in/media_isro/pdf/Respond_Basket_2025.pdf" target="_blank">Download RESPOND Basket 2025</a>.', prize: 'Ongoing', category: 'research' },
    { badge: '🏅 Rank 52 — Kanpur Regionals', title: 'ICPC Kanpur Regional 2025', desc: 'Team PurpleSector3 (Anish Patade, Siddhesh Patil, Nishad Gangal) qualified for the regional round with Institute Rank 1 and All India Rank 142 in the Prelims. Represented PCCOE at IIT Kanpur (22–23 Dec 2025), solving 5 problems to finish Rank 52 nationally.', prize: null, category: 'coding' },
    { badge: '🚀 Top 10 — Mumbai Hacks', title: 'Mumbai Hacks 2025', desc: 'Secured a spot in the Top 10 teams. Successfully tested PQC (Post-Quantum Cryptography) algorithms on the Airawat Supercomputer at C-DAC.', prize: 'C-DAC Recognition', category: 'hackathon' },
    { badge: '🥉 3rd Place', title: 'AMD AI Sprint — AI Premier League', desc: 'Team (Tushar Badlani, Yash Varma, Soham Mhatre) secured 3rd in Track 1 using Qwen-3:4B, Llama-3.2:3B, LoRA, and dynamic K-shot prompting on AMD MI300x with 192GB VRAM.', prize: '₹50,000', category: 'hackathon', image: './images/amd-ai-sprint.jpg' },
    { badge: '🏆 3rd Winner', title: 'Analytics Vidhya ML Challenge', desc: 'Secured 3rd place in the Machine Learning Prediction Challenge among thousands of participants.', prize: '₹90,000', category: 'coding' },
    { badge: '🚀 SIH 2025 Selection', title: 'Smart India Hackathon (SIH)', desc: 'Facilitated 24 teams for SIH 2025 internal selection. Club mentors directly guided 15 teams on solution architecture and documentation for national submissions.', prize: null, category: 'hackathon' },
    { badge: '🚀 Hackathon Selection', title: 'Indradhanu IGC Hackathon', desc: '4 teams successfully selected for round two after rigorous preliminary evaluations.', prize: null, category: 'hackathon' },
    { badge: '💼 Placements', title: 'Industry Placements & Internships', desc: 'Members secured roles and SaaS internships at Google, CrowdStrike, ConnectWise, Quick Heal, PTC, Addepar, EQ Technologic, and Josh Software.', prize: null, category: 'opensource' },
    { badge: '🔐 Security Champions', title: 'CTF Competitions', desc: 'Strong performance across national CTF events, with team members excelling in web exploitation and cryptography challenges.', prize: null, category: 'ctf' },
    { badge: '🌟 Open Source', title: 'GSoC & Open Source Selections', desc: 'Members selected for Google Summer of Code and contributed to major open-source projects including frameworks and developer tools.', prize: null, category: 'opensource' }
  ],

  events: [
    { date: 'Oct 2026', title: 'IEEE Xtreme 20.0', desc: 'The 20th edition of the global 24-hour programming competition. A flagship event for IEEE members and Coding Club members alike.', tag: 'Contest', upcoming: true },
    { date: 'Sep–Oct 2026', title: 'Flipkart GRID 8.0', desc: 'National-level engineering challenge with tracks in SDE, Robotics, and InfoSec. A major gateway for tier-1 tech roles.', tag: 'Hiring', upcoming: true },
    { date: 'Aug–Sep 2026', title: 'ICPC 2026 Prelims Cycle', desc: 'The starting point for the world\'s most prestigious competitive programming journey. Internal mock rounds and team formation will begin in early August.', tag: 'Contest', upcoming: true },
    { date: 'Jul–Aug 2026', title: 'SIH 2026 Internal Hackathon', desc: 'Internal shortlisting for Smart India Hackathon 2026. Pitch your hardware/software solutions for national problem statements.', tag: 'Hackathon', upcoming: true },
    { date: 'May–Jun 2026', title: 'Google Hash Code & Kick Start', desc: 'Global coding contests focusing on optimization and algorithmic problem solving. Stay tuned for the PCCoE Hub registrations.', tag: 'Contest', upcoming: true },
    { date: 'March–April 2026', title: 'IIT Research Internships', desc: 'Application window for research internships and competitions at major IITs.', tag: 'Resource', upcoming: true },
    { date: '2026', title: 'Microsoft Tech Events', desc: 'Keep track of upcoming Microsoft technology waves and learning paths. <a href="https://www.microsoft.com/en-us/events" target="_blank">View Events</a>.', tag: 'Resource', upcoming: true },
    { date: 'Feb–Mar 2026', title: 'Meta Hacker Cup 2026', desc: 'Facebook\'s annual open world programming competition. Practice rounds and team discussions in the lab.', tag: 'Contest', upcoming: true },
    { date: 'Dec 2025', title: 'Innovision (NIT Rourkela)', desc: 'One of Eastern India\'s largest technical festivals. Participate in diverse coding and robotics challenges.', tag: 'Tech-Fest', upcoming: false },
    { date: 'Dec 2025', title: 'Cognitia (NIT Durgapur)', desc: 'Annual technical festival featuring innovation showcases and competitive events.', tag: 'Tech-Fest', upcoming: false },
    { date: 'Dec 2025', title: 'Aparoksha (NIT Allahabad)', desc: 'Flagship technical festival of IIIT-A, known for high-quality hackathons and coding contests.', tag: 'Tech-Fest', upcoming: false },
    { date: 'Dec 2025', title: 'IEEE ComputingEdge Hub', desc: 'Accessing the latest trends in computing via the IEEE Computer Society digital library. <a href="https://www.computer.org/publications/computing-edge/current-issue" target="_blank">Explore ComputingEdge</a>.', tag: 'Resource', upcoming: false },
    { date: 'Nov 2025', title: 'DST INSPIRE Scholarship Exam', desc: 'National-level scholarship application for science and technology students.', tag: 'Exam', upcoming: false },
    { date: '8 Nov 2025', title: 'ICPC Online Preliminary Round', desc: 'Organized at PCCOE Computer Labs (1:00 PM–7:00 PM). 105 students (35 teams) competed. International programming competition.', tag: 'Contest', upcoming: false },
    { date: 'Sep 2025', title: 'SIH 2025 Internal Selection', desc: 'Mentored 24 student teams for internal selection. Provided guidance on problem statements, documentation, and technical feasibility.', tag: 'Hackathon', upcoming: true },
    { date: 'Sep 2025', title: 'Web3 & Blockchain Workshop', desc: 'Two-day hands-on workshop on smart contracts, Solidity, and decentralized app development.', tag: 'Workshop', upcoming: true },
    { date: 'Sep 2025', title: 'CTF Bootcamp — CyberSec Week', desc: 'Intensive cybersecurity bootcamp with live CTF challenges, covering forensics, web exploitation, and crypto.', tag: 'Bootcamp', upcoming: true },
    { date: 'Aug 2025', title: 'Algo Arena — DSA Contest', desc: 'Internal coding competition covering advanced DSA topics. Timed rounds with increasing difficulty.', tag: 'Contest', upcoming: true },
    { date: 'Jul 2025', title: 'DSA & Placement Guidance Session', desc: 'Expert session by Vivek Gupta (AlgoZenith Founder, Ex-Google, ICPC World Finalist) on placement preparation and structured learning across DSA, CP, and Web Dev. Held at MECH Seminar Hall.', tag: 'Speaker', upcoming: false, image: './images/dsa-session.jpg' },
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
    {
      id: 'coding-agent-cli',
      title: 'Project Spotlight: Coding Agent CLI',
      meta: { author: 'Abhishek Raut', date: 'March 2026', readTime: '10 min' },
      desc: 'Developing an offline-first, air-gapped GenAI security scanning and remediation tool for industrial-grade code correction.',
      category: 'technical',
      gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      content: `
        <h2>The Vision</h2>
        <p>Coding Agent CLI is designed for secure, mission-critical environments where cloud-based AI is restricted. It orchestrates security scanners, normalizes findings (SARIF/CWE), and uses a local LLM to propose high-fidelity fixes.</p>
        <h2>Key Features</h2>
        <ul style="margin-left: 20px; line-height: 1.6; color: var(--text-secondary);">
          <li><strong>Air-Gapped Security:</strong> Operates entirely without internet connectivity.</li>
          <li><strong>Policy-as-Code:</strong> Enforces organization-specific coding standards during remediation.</li>
          <li><strong>SARIF Integration:</strong> Unified reporting across multiple static analysis tools.</li>
        </ul>
      `
    },
    {
      id: 'samanvay-7-bff',
      title: 'SAMANVAY-7: The Mental Health AI Pod',
      meta: { author: 'Innovation Team', date: 'Feb 2026', readTime: '8 min' },
      desc: 'A privacy-first offline AI therapy system using local LLMs and multimodal interaction for sensitive mental health support.',
      category: 'technical',
      gradient: 'linear-gradient(135deg, #10b981, #3b82f6)',
      content: `
        <h2>Offline Privacy</h2>
        <p>In mental health, privacy is non-negotiable. SAMANVAY-7 (BFF) runs a customized Llama 3.2 model locally to ensure that user sessions never leave the device.</p>
        <h2>Multimodal Interaction</h2>
        <p>Beyond text, the system features voice interaction and avatar-based companionship, providing a more human-like presence for users in need.</p>
        <h2>Crisis Management</h2>
        <p>The system includes built-in crisis protocols that can escalate to human intervention through predefined emergency channels when required.</p>
      `
    },
    {
      id: 'competition-roadmap-2026',
      title: '2026 Competition Roadmap: From India-First to Global Stages',
      meta: { author: 'PCCoE Coding Club', date: 'March 2026', readTime: '15 min' },
      desc: 'Our master guide for the 2026 competition cycle — major hackathons, algorithmic contests, and hiring-focused challenges.',
      category: 'announcement',
      gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
      content: `
        <h2>Preparation Strategy</h2>
        <p>Success in elite competitions requires consistent effort. We recommend a 70-30 split: 70% of your time should be spent on core technical skills (DSA, AI/ML, System Design) and 30% on competition-specific patterns.</p>
        
        <h2>Global Flagships (Tier 1)</h2>
        <ul style="margin-left: 20px; line-height: 1.6; color: var(--text-secondary); margin-bottom: 2rem;">
          <li><strong>ICPC:</strong> The Olympics of Programming. Target the North America or Asia regionals for maximum impact.</li>
          <li><strong>IEEE Xtreme:</strong> A rigorous 24-hour algorithmic battle.</li>
          <li><strong>Meta Hacker Cup:</strong> Great for algorithmic complexity mastery.</li>
        </ul>

        <h2>India-First & Hiring Contests</h2>
        <ul style="margin-left: 20px; line-height: 1.6; color: var(--text-secondary); margin-bottom: 2rem;">
          <li><strong>Smart India Hackathon (SIH):</strong> Focus on solving hardware/software problems for government ministries.</li>
          <li><strong>Flipkart GRID:</strong> High-stakes engineering challenge with direct PPO opportunities.</li>
          <li><strong>TCS CodeVita:</strong> One of India's largest hiring competitions.</li>
        </ol>

        <h2>How to Stay Updated</h2>
        <p>Regularly check platforms like Unstop, Codeforces, and HackerEarth. Join the club's WhatsApp #opportunities channel for live updates and team formation links.</p>

        <h2>Competition Platforms Table</h2>
        <div class="glass-card" style="padding: 1rem; overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; color: var(--text-secondary); font-size: 0.9rem;">
            <thead>
              <tr style="border-bottom: 1px solid var(--border-color); text-align: left;">
                <th style="padding: 0.8rem;">#</th>
                <th style="padding: 0.8rem;">Platform</th>
                <th style="padding: 0.8rem;">Specialty</th>
                <th style="padding: 0.8rem;">Link</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 0.8rem;">1</td>
                <td style="padding: 0.8rem;">Unstop</td>
                <td style="padding: 0.8rem;">National Hackathons</td>
                <td style="padding: 0.8rem;"><a href="https://unstop.com/" target="_blank">Visit</a></td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 0.8rem;">2</td>
                <td style="padding: 0.8rem;">HackerEarth</td>
                <td style="padding: 0.8rem;">Corporate Challenges</td>
                <td style="padding: 0.8rem;"><a href="https://hackerearth.com/" target="_blank">Visit</a></td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 0.8rem;">3</td>
                <td style="padding: 0.8rem;">MachineHack</td>
                <td style="padding: 0.8rem;">AI/ML Hackathons</td>
                <td style="padding: 0.8rem;"><a href="https://machinehack.com/" target="_blank">Visit</a></td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 0.8rem;">4</td>
                <td style="padding: 0.8rem;">GeeksforGeeks</td>
                <td style="padding: 0.8rem;">Coding Contests</td>
                <td style="padding: 0.8rem;"><a href="https://practice.geeksforgeeks.org/" target="_blank">Visit</a></td>
              </tr>
              <tr>
                <td style="padding: 0.8rem;">5</td>
                <td style="padding: 0.8rem;">NPTEL</td>
                <td style="padding: 0.8rem;">Academic Competitions</td>
                <td style="padding: 0.8rem;"><a href="https://nptel.ac.in/" target="_blank">Visit</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: 'super-ide-orchestrator',
      title: 'The Super-IDE Orchestrator: Our Operating Framework',
      meta: { author: 'Super-IDE Orchestrator', date: 'March 2026', readTime: '12 min' },
      desc: 'Documentation of the CI/CD-style control loop for high-impact software and knowledge work practiced at PCCoE Coding Club.',
      category: 'technical',
      gradient: 'linear-gradient(135deg, #4f46e5, #9333ea)',
      content: `
        <h2>The Core Loop</h2>
        <p>Our Orchestrator framework turns high-level ideas into shipped, verified changes using a continuous loop:</p>
        <ul style="margin-left: 20px; line-height: 1.6; color: var(--text-secondary); margin-bottom: 2rem;">
          <li><strong>Goal Framing:</strong> Turn requests into concrete contracts with invariants and acceptance criteria.</li>
          <li><strong>Decomposition:</strong> Break work into small, dependency-aware chunks (Task DAGs).</li>
          <li><strong>Action:</strong> Apply precise edits and execute tools in bounded environments.</li>
          <li><strong>Verification:</strong> Run tests, linters, and checks until "Green" is achieved.</li>
          <li><strong>Reflection:</strong> Record artifacts and repair failures through systematic learning.</li>
        </ul>

        <h2>Non-Negotiable Principles</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
          <div class="glass-card" style="padding: 1.5rem;">
            <h3 style="margin-bottom: 0.5rem; color: var(--accent-1);">🔍 Verification-First</h3>
            <p style="font-size: 0.9rem;">Green is a hard gate. Every change must be validated via automated checks before progress.</p>
          </div>
          <div class="glass-card" style="padding: 1.5rem;">
            <h3 style="margin-bottom: 0.5rem; color: var(--accent-1);">🔁 ReAct Loops</h3>
            <p style="font-size: 0.9rem;">Interleave planning with tool execution. Plan a small step, act, observe, and update.</p>
          </div>
          <div class="glass-card" style="padding: 1.5rem;">
            <h3 style="margin-bottom: 0.5rem; color: var(--accent-1);">🛠️ ADaPT & Reflexion</h3>
            <p style="font-size: 0.9rem;">Recursively decompose failures and use reflective repair to avoid repeating mistakes.</p>
          </div>
          <div class="glass-card" style="padding: 1.5rem;">
            <h3 style="margin-bottom: 0.5rem; color: var(--accent-1);">🛡️ Safety First</h3>
            <p style="font-size: 0.9rem;">Treat all data as untrusted, keep strict boundaries, and require human approval for risky ops.</p>
          </div>
        </div>

        <h2>Goal Framing (The Contract)</h2>
        <p>Every project starts with a Goal Contract covering User Outcomes, Acceptance Checks, Operational Constraints, and a Rollback Plan. This ensures traceability and evidence-based progress throughout the lifecycle.</p>
      `
    },
    {
      id: 'ai-engineering',
      title: 'The AI Engineering Handbook',
      meta: { author: 'Mihir Pande', date: 'Feb 2026', readTime: '15 min' },
      desc: 'How to start a career and excel as an AI Engineer — comprehensive guide covering technical skills and industry expectations.',
      category: 'technical',
      gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
      content: `
        <h2>Transitioning to AI</h2>
        <p>AI Engineering is more than just running models. It's about data pipelines, model evaluation, and building scalable systems.</p>
        <h2>Key Resources</h2>
        <p>Refer to the <a href="https://www.freecodecamp.org/news/the-ai-engineering-handbook-how-to-start-a-career-and-excel-as-an-ai-engineer/" target="_blank">freeCodeCamp AI Engineering Handbook</a> for a deep dive.</p>
      `
    },
    {
      id: 'claude-code',
      title: 'Agentic Coding with Claude Code',
      meta: { author: 'Ashish Suryawanshi', date: 'Feb 2026', readTime: '8 min' },
      desc: 'Exploring developer tooling and AI coding assistants for faster, smarter development workflows.',
      category: 'technical',
      gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
      content: `
        <h2>What is Claude Code?</h2>
        <p>Claude Code is an agentic coding tool that reads codebases, edits files, and runs commands, integrating deeply with development workflows.</p>
        <p>Learn more at the <a href="https://code.claude.com/docs/en/overview" target="_blank">Claude Code Docs</a>.</p>
      `
    },
    {
      id: 'semester-plans',
      title: 'Club Announcements: Semester Plans 2026',
      meta: { author: 'Mihir Pande', date: 'Feb 2026', readTime: '4 min' },
      desc: 'Upcoming workshops, contests, bootcamps, and speaker sessions planned for the current semester. Mark your calendars!',
      category: 'announcement',
      gradient: 'linear-gradient(135deg, #f59e0b, #22c55e)',
      content: `
        <h2>Welcome Back!</h2>
        <p>This semester is packed with high-impact events. Our primary focus will be on competitive programming training and preparing teams for SIH 2026.</p>
        <h2>Key Dates</h2>
        <ul style="margin-left: 20px; line-height: 1.6; color: var(--text-secondary);">
          <li><strong>March 15:</strong> Algo Arena DSA Contest</li>
          <li><strong>March 28-29:</strong> Web3 & Blockchain Workshop</li>
          <li><strong>April 10-15:</strong> CyberSec Week & CTF Bootcamp</li>
        </ul>
        <p>Register for these events via the links shared in the official WhatsApp groups. Let's make this semester our best one yet!</p>
      `
    },
    {
      id: 'research-framework',
      title: 'A Framework for Comprehensive Research',
      meta: { author: 'Mr. Abhishek S. Raut', date: 'Jan 2026', readTime: '20 min' },
      desc: 'Master methodology for technical writing, literature reviews, and building self-correcting research pipelines.',
      category: 'technical',
      gradient: 'linear-gradient(135deg, #10b981, #059669)',
      content: `
        <h2>Research Paper Development</h2>
        <p>A structured approach to academic research design, architecture design, and publication workflows is essential for high-impact results.</p>
        <h2>Research Agent Pipeline</h2>
        <p>We implement a phase-locked execution model with research ledgers and evaluation framing to ensure technical rigor in all our club projects.</p>
      `
    },
    {
      id: 'react-node-mastery',
      title: 'Modern Web Stack: React & Node.js',
      meta: { author: 'Siddhesh Patil', date: 'Jan 2026', readTime: '10 min' },
      desc: 'Essential resources for mastering frontend and backend development with React and Node.js.',
      category: 'technical',
      gradient: 'linear-gradient(135deg, #61dafb, #68a063)',
      content: `
        <h2>React & Node.js</h2>
        <p>Mastering the MERN stack requires a solid understanding of component lifecycle and asynchronous event loops.</p>
        <h2>Official Documentation</h2>
        <ul>
          <li><a href="https://react.dev/" target="_blank">React.dev</a></li>
          <li><a href="https://nodejs.org/en/docs" target="_blank">Node.js Docs</a></li>
        </ul>
        <h2>Tutorial Highlights</h2>
        <p>Check out "Every React Concept Explained in 12 Minutes" and "Node.js Ultimate Beginner’s Guide" on YouTube for rapid learning.</p>
      `
    },
    {
      id: 'amd-ai-sprint',
      title: 'AMD AI Sprint: Behind the Scenes',
      meta: { author: 'AI Team', date: 'Jul 2025', readTime: '6 min' },
      desc: 'Building an AI solution under the pressure of a timed sprint — our architecture decisions, model training, and deployment strategy.',
      category: 'event-recap',
      gradient: 'linear-gradient(135deg, #7c3aed, #ec4899)',
      content: `
        <h2>The Rig</h2>
        <p>We were given access to AMD MI300x GPUs with an insane 192GB VRAM. This hardware completely changed our approach, allowing us to experiment with local LLMs that we previously couldn't load.</p>
        <h2>The Architecture</h2>
        <p>We built two distinct AI agents: a Question Agent (using Qwen-3:4B) for MCQ generation, and an Answer Agent (Llama-3.2:3B) for solving. The interplay between these agents required dynamic K-shot prompting and multi-pass retrying loops.</p>
        <h2>The Result</h2>
        <p>Securing 3rd place and a ₹50,000 prize validated our architecture. The biggest takeaway was learning how to optimize LoRA and QLoRA pipelines on enterprise-grade AMD silicon.</p>
      `
    },
    {
      id: 'ctf-101',
      title: 'Cybersecurity 101: Getting Started with CTFs',
      meta: { author: 'Kartik Totlani', date: 'Jan 2025', readTime: '7 min' },
      desc: 'Cracking your first CTF challenge — tools, platforms, and methodologies covered in our cybersecurity bootcamp series.',
      category: 'technical',
      gradient: 'linear-gradient(135deg, #ef4444, #f97316)',
      content: `
        <h2>What is a CTF?</h2>
        <p>Capture The Flag (CTF) competitions are educational exercises where participants learn to exploit vulnerabilities, reverse engineer code, and decrypt ciphers to find a hidden string (the "flag").</p>
        <h2>Essential Tools</h2>
        <p>For web exploitation, you must learn Burp Suite. For forensics, become comfortable with Autopsy and binwalk. For cryptography, CyberChef is your best friend.</p>
        <h2>Getting Started</h2>
        <p>Start playing on picoCTF. It's the most beginner-friendly platform. Once you are comfortable there, transition to HackTheBox modules.</p>
      `
    },
    {
      id: 'gsoc-story',
      title: 'From Zero to GSoC: A Member\'s Story',
      meta: { author: 'Pawan Patil', date: 'Dec 2024', readTime: '10 min' },
      desc: 'How one of our members went from a first-year beginner to a GSoC contributor — the exact steps, resources, and community support.',
      category: 'member-story',
      gradient: 'linear-gradient(135deg, #f472b6, #7c3aed)',
      content: `
        <h2>The Beginning</h2>
        <p>I started my college journey barely knowing what Git was. I attended the Open Source Sprint conducted by the Coding Club, where I made my first PR fixing a typo in a README file.</p>
        <h2>The Grind</h2>
        <p>I spent my second year learning React and Node.js. I started scanning GSoC organizations early in January. I found an organization that aligned with my tech stack and started contributing small bug fixes.</p>
        <h2>The Proposal</h2>
        <p>Writing the proposal took three weeks. I sought feedback from the seniors in the club who had previously cleared GSoC. Their guidance on architecture diagrams and timeline planning was invaluable. In May, I received the acceptance email!</p>
      `
    },
    {
      id: 'cp-guide',
      title: 'A Beginner\'s Guide to Competitive Programming',
      meta: { author: 'Anish Patade', date: 'Nov 2024', readTime: '12 min' },
      desc: 'Start your CP journey with the right mindset, platform choices, topic roadmap, and practice strategies used by our top-rated members.',
      category: 'technical',
      gradient: 'linear-gradient(135deg, #22c55e, #0ea5e9)',
      content: `
        <h2>Why CP?</h2>
        <p>Competitive Programming isn't just about getting placed at FAANG; it's about training your brain to break down complex problems efficiently under time pressure.</p>
        <h2>The Roadmap</h2>
        <ol style="margin-left: 20px; line-height: 1.6; color: var(--text-secondary);">
          <li><strong>Language Basics:</strong> Master C++ or Java. Understand array manipulation, strings, and standard libraries (STL in C++).</li>
          <li><strong>Data Structures:</strong> Linked lists, Stacks, Queues, Trees, and Graphs.</li>
          <li><strong>Algorithms:</strong> Sorting, Searching, Dynamic Programming, and Graph Traversal (BFS/DFS).</li>
        </ol>
        <h2>Where to Practice</h2>
        <p>Start with Codeforces Div 3 and Div 4. Don't worry about your rating for the first 6 months. Just focus on upsolving the problem you couldn't solve during the contest.</p>
      `
    },
    {
      id: 'sih-2024-win',
      title: 'How We Won SIH 2024 at IIT Gandhinagar',
      meta: { author: 'Mihir Pande', date: 'Oct 2024', readTime: '8 min' },
      desc: 'Our journey from ideation to winning 1st place at Smart India Hackathon — team strategy, late-night debugging, and the final pitch.',
      category: 'event-recap',
      gradient: 'linear-gradient(135deg, #0ea5e9, #7c3aed)',
      content: `
        <h2>The Challenge</h2>
        <p>Smart India Hackathon (SIH) is one of the most prestigious hackathons in the world. Our problem statement revolved around building a scalable, AI-driven educational tool for rural students.</p>
        <h2>The Execution</h2>
        <p>The 36-hour hackathon was an absolute grind. We split our team into three specialized groups: Frontend, AI integration, and Backend Architecture. After 24 hours, our backend crashed, forcing us to rebuild the API pipeline from scratch using Node.js instead of our initial Python setup.</p>
        <h2>The Pitch</h2>
        <p>Our final pitch at the IIT Gandhinagar nodal center focused on feasibility and scalability. The judges were particularly impressed with our offline-sync capability, which secured us the 1st place and ₹1,00,000 prize.</p>
      `
    }
  ],

  team: {
    faculty: [
      { name: 'Mr. Abhishek S. Raut', role: 'Faculty In-Charge / Club Secretary', initials: 'AR', bio: 'Guiding the club\'s vision and connecting students with industry and academic opportunities.' }
    ],
    core: [
      { name: 'Mihir Pande', role: 'Club President', initials: 'MP', bio: 'Leading club strategy, events, and community growth.' },
      { name: 'Siddhesh Patil', role: 'Vice President', initials: 'SP', bio: 'Co-leading operations and inter-club coordination.' },
      { name: 'Ashish Suryawanshi', role: 'Treasurer', initials: 'AS', bio: 'Managing club finances, sponsorships, and event budgets.' },
      { name: 'Soham Mhatre', role: 'Student Secretary', initials: 'SM', bio: 'Overseeing club documentation, scheduling, and official communications.' }
    ],
    leads: [
      { name: 'Anish Patade', role: 'Competitive Coding', initials: 'AP', bio: 'Driving DSA practice, contests, and ICPC regional preparation.' },
      { name: 'Kartik Totlani', role: 'Cybersecurity & CTF', initials: 'KT', bio: 'Leading CTF training and cybersecurity bootcamps.' },
      { name: 'Pawan Patil', role: 'Open Source Development', initials: 'PP', bio: 'Managing open-source projects, and GSoC mentorship.' },
      { name: 'Tushar Badlani', role: 'Hackathons & IEEE Xtreme', initials: 'TB', bio: 'Steering team formations for 24-hour coding competitions and hackathons.' }
    ]
  },

  faqs: [
    { q: 'Who can join the Coding Club?', a: 'Any student of PCCoE, regardless of branch or year, can join! Whether you\'re a complete beginner or an experienced coder, we have opportunities for everyone to learn and grow.' },
    { q: 'I am a Non-CS / Non-IT student. Is this club for me?', a: 'Yes! Programming is essential across all engineering disciplines today (Mechanical, EnTC, Civil, etc.). We start from the basics, so you won\'t feel left behind. Our current roster includes members from Mechanical and EnTC departments!' },
    { q: 'What if I don\'t know any programming languages yet?', a: 'That is the perfect time to join. We conduct beginner-friendly bootcamps specifically designed to take you from writing your first line of code (usually in C++ or Python) to building decent projects.' },
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
  const app = document.getElementById('app');

  let render;
  let params = null;

  if (path.startsWith('/blog/')) {
    render = renderBlogPostPage;
    params = path.split('/')[2];
  } else {
    render = routes[path] || routes['/'];
  }

  // Page transition
  app.style.opacity = '0';
  app.style.transform = 'translateY(10px)';

  setTimeout(() => {
    render(app, params);
    app.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    app.style.opacity = '1';
    app.style.transform = 'translateY(0)';

    // Update active nav (handle nested routes like /blog/id)
    const baseNavPath = path.startsWith('/blog/') ? '/blogs' : path;
    updateActiveNav(baseNavPath);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Setup scroll reveals
    setTimeout(setupScrollReveal, 100);

    // Setup interactive elements
    setTimeout(setupInteractions, 200);

    // Setup 3D tilt on cards
    setTimeout(setupTiltCards, 300);
  }, 200);
  // Setup theme
  initTheme();

  // ========================= THEME SYSTEM =========================

  function initTheme() {
    const savedTheme = localStorage.getItem('pccoe-theme') || 'glass';
    setTheme(savedTheme);

    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const theme = btn.dataset.themeSet;
        setTheme(theme);
      });
    });
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('pccoe-theme', theme);

    // Update button active states
    document.querySelectorAll('.theme-btn').forEach(btn => {
      if (btn.dataset.themeSet === theme) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Special handling for particles based on theme
    if (typeof updateParticles === 'function') {
      updateParticles(theme);
    } else {
      const canvas = document.getElementById('particles-canvas');
      if (canvas) {
        if (theme === 'light') {
          canvas.style.opacity = '0.05';
        } else {
          canvas.style.opacity = '1';
        }
      }
    }
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
  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    // Close on link click
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

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
      
      <div class="hero-content" style="display: flex; gap: 4rem; align-items: center; justify-content: space-between; height: 100%; position: relative; z-index: 10;">
        
        <div class="hero-text-side" style="flex: 1; max-width: 600px;">
          <div class="hero-badge reveal">
            <span class="dot"></span>
            Open for Registrations — 2025-26
          </div>
          
          <h1 class="hero-title reveal delay-1">
            <span class="line">PCCOE</span>
            <span class="line gradient-text">CODING CLUB</span>
          </h1>
          
          <div class="hero-tagline reveal delay-2">
            <span class="typed-text">Code. Compete. Create.</span>
          </div>
          
          <p class="hero-description reveal delay-3">
            A student-driven community focused on competitive programming, hackathons, 
            cybersecurity, open-source development, and research.
          </p>
          
          <div class="hero-buttons reveal delay-4">
            <a href="#/join" class="btn btn-primary">Join the Club →</a>
            <a href="#/about" class="btn btn-outline">Learn More</a>
          </div>
          
          <div class="hero-stats reveal delay-5" style="margin-top: 3rem;">
            <div class="hero-stat">
              <div class="stat-number" data-count="${stats.members}" data-suffix="+">0</div>
              <div class="stat-label" style="font-size: 0.8rem;">Members</div>
            </div>
            <div class="hero-stat">
              <div class="stat-number" data-count="${stats.events}" data-suffix="+">0</div>
              <div class="stat-label" style="font-size: 0.8rem;">Events</div>
            </div>
            <div class="hero-stat">
              <div class="stat-number" data-count="${stats.wins}" data-suffix="+">0</div>
              <div class="stat-label" style="font-size: 0.8rem;">Wins</div>
            </div>
            <div class="hero-stat">
              <div class="stat-number" data-count="${stats.projects}" data-suffix="+">0</div>
              <div class="stat-label" style="font-size: 0.8rem;">Projects</div>
            </div>
          </div>
        </div>

        <div class="hero-image-side reveal delay-3" style="flex: 1; display: flex; justify-content: center; align-items: center;">
          <img src="./images/ai-hero.png" alt="Futuristic Coding Workstation" style="width: 100%; max-width: 600px; border-radius: 20px; box-shadow: 0 0 40px rgba(0, 212, 255, 0.15), 0 0 80px rgba(124, 58, 237, 0.1); border: 1px solid rgba(255, 255, 255, 0.05); animation: float 6s ease-in-out infinite;" />
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
        <div class="about-hero reveal" style="display: flex; gap: 4rem; align-items: center; margin-bottom: 4rem;">
          <div style="flex: 1.2;">
            <div class="section-badge">Our Story</div>
            <h2 class="section-title">A Technical <span class="gradient-text">Ecosystem</span></h2>
            <p style="color: var(--text-secondary); font-size: 1.1rem; line-height: 1.8;">
              The <strong style="color: var(--text-primary);">PCCoE Coding Club</strong> is a dynamic student-driven community focused on 
              <strong style="color: var(--accent-1);">competitive programming, hackathons, cybersecurity, open-source development, research projects, and industry-ready problem solving</strong>. 
            </p>
            <p style="color: var(--text-secondary); font-size: 1.1rem; line-height: 1.8; margin-top: 1.25rem;">
              We actively prepare students for national and international opportunities such as 
              <strong style="color: var(--text-primary);">ICPC, GSoC, CTFs, IEEE Xtreme, and challenge-based hiring competitions</strong>.
            </p>
          </div>
          <div style="flex: 1; display: flex; justify-content: center;">
            <img src="./images/about-illustration.png" alt="Collaborative Hacker Community" style="width: 100%; max-width: 500px; border-radius: 20px; box-shadow: 0 0 50px rgba(124, 58, 237, 0.15); animation: float 6s ease-in-out infinite;" />
          </div>
        </div>

        <div class="glass-card reveal" style="padding: 3rem; margin-bottom: 3rem; text-align: center;">
          <h2 style="margin-bottom: 2rem; font-size: 1.5rem;">🚀 Technology Landscape</h2>
          <img src="./images/tech-wordcloud.png" alt="Technology Word Cloud" style="width: 100%; max-width: 800px; border-radius: 12px;" loading="lazy" />
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
            <img src="./images/poster.png" alt="PCCoE Coding Club Poster" class="poster-display" loading="lazy" />
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
    <div class="page-header" style="position: relative; overflow: hidden; padding: 6rem 0;">
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: url('./images/blog-header.png') center/cover no-repeat; opacity: 0.15; z-index: -1;"></div>
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
            <a href="#/blog/${b.id}" style="text-decoration: none; color: inherit; display: block;">
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
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderBlogPostPage(app, id) {
  const blog = CLUB_DATA.blogs.find(b => b.id === id);

  if (!blog) {
    app.innerHTML = `
      <div class="page-header" style="text-align: center; padding: 10rem 0;">
        <h1 class="section-title">404 - Blog Post Not Found</h1>
        <a href="#/blogs" class="btn btn-primary" style="margin-top: 2rem;">Return to Blogs</a>
      </div>
    `;
    return;
  }

  app.innerHTML = `
    <!-- Blog Hero -->
    <div style="background: ${blog.gradient}; height: 350px; position: relative; margin-top: 60px;">
      <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, transparent, var(--bg-primary) 95%);"></div>
      <div class="container" style="position: absolute; bottom: 0; left: 0; right: 0; padding-bottom: 2rem; z-index: 2;">
        <a href="#/blogs" style="color: var(--accent-1); text-decoration: none; font-weight: 500; font-size: 0.9rem; display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem;">← Back to Blogs</a>
        <h1 style="font-size: clamp(2rem, 5vw, 3.5rem); font-family: var(--font-heading); font-weight: 800; line-height: 1.1; margin-bottom: 1.5rem;">${blog.title}</h1>
        <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; color: var(--text-secondary); font-size: 0.95rem;">
          <span style="display: flex; align-items: center; gap: 0.4rem;">✍️ ${blog.meta.author}</span>
          <span style="display: flex; align-items: center; gap: 0.4rem;">📅 ${blog.meta.date}</span>
          <span style="display: flex; align-items: center; gap: 0.4rem;">📖 ${blog.meta.readTime}</span>
        </div>
      </div>
    </div>

    <!-- Blog Content -->
    <section class="section" style="padding-top: 1rem;">
      <div class="container">
        <div class="glass-card reveal" style="max-width: 800px; margin: 0 auto; padding: clamp(1.5rem, 5vw, 4rem);">
          <!-- We style the raw HTML content dynamically -->
          <div class="blog-post-content" style="line-height: 1.8; font-size: 1.05rem; color: var(--text-primary);">
            <p style="font-size: 1.2rem; color: var(--text-secondary); margin-bottom: 2.5rem; border-left: 4px solid var(--accent-1); padding-left: 1.5rem;">
              <em>${blog.desc}</em>
            </p>
            ${blog.content}
          </div>
          
          <div style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--glass-border); text-align: center;">
            <p style="margin-bottom: 1rem; color: var(--text-secondary);">Enjoyed this post? Share it with your peers!</p>
            <div style="display: flex; gap: 1rem; justify-content: center;">
              <button class="btn btn-secondary" onclick="navigator.clipboard.writeText(window.location.href); alert('Link copied to clipboard!')">🔗 Copy Link</button>
            </div>
          </div>
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

    <!-- Interactive Student Team Section -->
    <section class="section" style="background: var(--bg-secondary); border-top: 1px solid var(--glass-border);">
      <div class="container">
        <div class="section-header reveal" style="text-align: center; margin-bottom: 3rem;">
          <h2 class="section-title">Student <span class="gradient-text">Structure</span></h2>
          <p style="color: var(--text-secondary);">Filter by role or search for a specific member.</p>
        </div>

        <!-- Search & Filter Bar -->
        <div class="team-controls reveal" style="margin-bottom: 3rem; display: flex; flex-wrap: wrap; gap: 1.5rem; justify-content: center; align-items: center;">
          <div class="search-box" style="position: relative; flex: 1; min-width: 300px; max-width: 500px;">
            <input type="text" id="team-search" placeholder="Search by name, role, or department..." 
              style="width: 100%; padding: 12px 20px 12px 45px; border-radius: 12px; border: 1px solid var(--glass-border); background: var(--glass-bg); color: var(--text-primary); font-family: var(--font-main);">
            <span style="position: absolute; left: 15px; top: 50%; transform: translateY(-50%); opacity: 0.5;">🔍</span>
          </div>
          <div class="filter-chips" style="display: flex; gap: 0.8rem; flex-wrap: wrap;">
            <button class="chip active" data-filter="all">All</button>
            <button class="chip" data-filter="core">Core</button>
            <button class="chip" data-filter="leads">Leads</button>
            <button class="chip" data-filter="associate">Associate</button>
            <button class="chip" data-filter="member">Members</button>
          </div>
        </div>
        
        <div id="team-container" class="team-grid">
          <!-- Dynamically populated -->
          ${renderTeamCards(TEAM_DATA)}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="cta-banner reveal">
          <h2>Want to Be <span class="gradient-text">Part of the Team?</span></h2>
          <p>Core team applications open at the start of each academic year.</p>
          <a href="#/join" class="btn btn-primary" style="text-decoration: none;">Join the Club →</a>
        </div>
      </div>
    </section>
  `;

  // Attach dynamic logic
  setupTeamInteractions();
}

function renderTeamCards(data) {
  if (data.length === 0) {
    return `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-secondary);">No members found matching your criteria.</div>`;
  }

  return data.map((m, i) => `
    <div class="glass-card team-card reveal" data-category="${m.category}" style="animation-delay: ${Math.min(i * 0.05, 1)}s">
      <div class="avatar" style="background: var(--accent-gradient); color: white;">${m.name.split(' ').map(n => n[0]).join('')}</div>
      <h3 style="margin-top: 1rem; font-size: 1.1rem;">${m.name}</h3>
      <div class="role" style="color: var(--accent-1); font-weight: 600; font-size: 0.85rem; margin-bottom: 0.5rem;">${m.role}</div>
      <div class="dept" style="font-size: 0.8rem; opacity: 0.8;">${m.dept} • ${m.class}</div>
      <div class="team-footer" style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--glass-border); display: flex; gap: 1rem; justify-content: center;">
         <a href="mailto:${m.email}" title="${m.email}" style="font-size: 1.1rem; text-decoration: none;">📧</a>
         ${m.mobile ? `<a href="tel:${m.mobile}" title="${m.mobile}" style="font-size: 1.1rem; text-decoration: none;">📱</a>` : ''}
      </div>
    </div>
  `).join('');
}

function setupTeamInteractions() {
  const searchInput = document.getElementById('team-search');
  const chips = document.querySelectorAll('.chip');
  const container = document.getElementById('team-container');

  let currentFilter = 'all';
  let currentSearch = '';

  const updateDisplay = () => {
    const filtered = TEAM_DATA.filter(m => {
      const matchesFilter = currentFilter === 'all' || m.category === currentFilter;
      const matchesSearch = m.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
        m.role.toLowerCase().includes(currentSearch.toLowerCase()) ||
        m.dept.toLowerCase().includes(currentSearch.toLowerCase());
      return matchesFilter && matchesSearch;
    });

    container.innerHTML = renderTeamCards(filtered);
    // Trigger scroll reveal for new elements
    setTimeout(setupScrollReveal, 100);
    setTimeout(setupTiltCards, 200);
  };

  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    updateDisplay();
  });

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentFilter = chip.dataset.filter;
      updateDisplay();
    });
  });
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
        <div style="display: flex; gap: 4rem; align-items: flex-start; flex-wrap: wrap;">
          <div style="flex: 1.5; min-width: 300px;">
            <div class="glass-card reveal" style="padding: 3rem;">
              <h2 style="margin-bottom: 2rem;">Membership <span class="gradient-text">Application</span></h2>
              <form id="join-form">
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
                <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1.5rem;">Scan the QR to join our community group instantly.</p>
              <img src="./images/qr-code.png" alt="Join Community QR" style="width: 150px; height: 150px; border-radius: 12px; margin: 0 auto; display: block;" />
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
    const theme = document.documentElement.getAttribute('data-theme') || 'glass';
    const colors = {
      glass: ['0, 212, 255', '124, 58, 237'],
      light: ['26, 86, 219', '79, 70, 229'],
      hacker: ['255, 0, 0', '139, 0, 0']
    };
    const currentColors = colors[theme] || colors.glass;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: currentColors[Math.floor(Math.random() * currentColors.length)]
      });
    }
  }

  // Exposed globally for theme changes
  window.updateParticles = (newTheme) => {
    canvas.style.opacity = newTheme === 'light' ? '0.15' : '1';
    createParticles();
  };

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
          const theme = document.documentElement.getAttribute('data-theme') || 'glass';
          const strokeColor = theme === 'hacker' ? '255, 0, 0' : (theme === 'light' ? '26, 86, 219' : '0, 212, 255');
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(${strokeColor}, ${0.1 * (1 - d / 120)})`;
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

