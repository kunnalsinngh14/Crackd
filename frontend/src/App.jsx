import { useState } from 'react';
import Hyperspeed from './Hyperspeed';
import GlassIcons from './GlassIcons';
import { 
  Database, 
  Cpu, 
  Binary, 
  Network, 
  BrainCircuit, 
  ArrowRight,
  ArrowLeft,
  Info,
  Github,
  Moon,
  Sun
} from 'lucide-react';
import './App.css';

const TOPIC_ITEMS = [
  { icon: <Binary  size={28} />, color: 'blue',   label: 'Data Structures', desc: 'Arrays, Lists, Trees, Graphs & Tables' },
  { icon: <Cpu     size={28} />, color: 'purple',  label: 'Algorithms',      desc: 'Sorting, DP, Greedy & Recursion' },
  { icon: <Network size={28} />, color: 'indigo',  label: 'System Design',   desc: 'Scalability, Caching & Databases' },
  { icon: <Database size={28}/>, color: 'green',   label: 'SQL',             desc: 'JOINs, CTEs & Query Optimization' },
  { icon: <BrainCircuit size={28}/>, color: 'orange', label: 'Machine Learning', desc: 'Models, Features & ML Systems' },
];

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={`app-container ${!isDark ? 'light-theme' : ''}`}>
      {/* Full-screen Hyperspeed background */}
      <div className="hero-bg-wrapper">
        <Hyperspeed effectOptions={{
          distortion: 'turbulentDistortion',
          length: 400,
          roadWidth: 10,
          islandWidth: 2,
          lanesPerRoad: 4,
          fov: 90,
          fovSpeedUp: 150,
          speedUp: 2,
          carLightsFade: 0.4,
          totalSideLightSticks: 20,
          lightPairsPerRoadWay: 40,
          shoulderLinesWidthPercentage: 0.05,
          brokenLinesWidthPercentage: 0.1,
          brokenLinesLengthPercentage: 0.5,
          lightStickWidth: [0.12, 0.5],
          lightStickHeight: [1.3, 1.7],
          movingAwaySpeed: [60, 80],
          movingCloserSpeed: [-120, -160],
          carLightsLength: [400 * 0.03, 400 * 0.2],
          carLightsRadius: [0.05, 0.14],
          carWidthPercentage: [0.3, 0.5],
          carShiftX: [-0.8, 0.8],
          carFloorSeparation: [0, 5],
          colors: isDark ? {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xffffff,
            brokenLines: 0xffffff,
            leftCars:  [0xd856bf, 0x6750a2, 0xc247ac],
            rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
            sticks: 0x03b3c3
          } : {
            roadColor: 0xe2e8f0,         // light grey road
            islandColor: 0xcbd5e1,       // slightly darker grey island
            background: 0xf8fafc,       // match body light background
            shoulderLines: 0x0f172a,     // black/dark lines
            brokenLines: 0x0f172a,       // black/dark lines
            leftCars:  [0xdc2626, 0xb91c1c, 0xef4444], // Red lights
            rightCars: [0x1e3a8a, 0x1d4ed8, 0x3b82f6], // Dark Blue lights
            sticks: 0x1e3a8a             // Dark Blue sticks
          },
          bloomThreshold: isDark ? 0.2 : 0.95
        }} />
      </div>

      {/* Page Content */}
      <div className="page-content">

        {/* Floating Glassmorphism Navbar */}
        <nav className="navbar">
          <div className="nav-left">
            <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }}>
              <Info size={16} />
              <span>About</span>
            </a>
            <a href="#what-we-cover" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('cover'); }}>
              <span>What We Cover</span>
            </a>
          </div>

          <div className="nav-center">
            <a href="/" className="nav-logo" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>Crackd</a>
          </div>

          <div className="nav-right">
            <a href="https://github.com/kunnalsinngh14/Crackd" target="_blank" rel="noopener noreferrer" className="nav-icon-btn" aria-label="GitHub">
              <Github size={20} />
            </a>
            <button className="nav-icon-btn" aria-label="Toggle Theme" onClick={() => setIsDark(!isDark)}>
              {isDark ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button className="nav-cta-btn" onClick={() => { setCurrentPage('home'); setTimeout(() => { document.querySelector('.topics-container')?.scrollIntoView({ behavior: 'smooth' }); }, 50); }}>
              Get Started
            </button>
          </div>
        </nav>

        {currentPage === 'home' && (
          <>
            {/* Hero */}
            <header className="hero-section">
              <div className="hero-content">
                <p className="hero-eyebrow">Everything you need to</p>

                <h1 className="hero-title">
                  Ace your next <span className="highlight-gradient">interview</span>
                </h1>

                <p className="hero-subtitle">
                  Level up your career and land your next role with structured courses and mock interviews.
                </p>

                <div className="hero-cta-wrapper">
                  <h2 className="get-started-title">
                    Prepare smarter. Interview better. <ArrowRight size={22} className="get-started-arrow" />
                  </h2>
                </div>
              </div>
            </header>

            {/* Glass Icon Topic Picker */}
            <main className="topics-container">
              <GlassIcons
                items={TOPIC_ITEMS}
                className="topics-glass-grid"
                selected={selectedTopic}
                onSelect={setSelectedTopic}
              />

              {selectedTopic && (
                <div className="topic-toast">
                  <p>You selected <strong>{selectedTopic}</strong>. Ready to prepare?</p>
                </div>
              )}
            </main>
          </>
        )}

        {currentPage === 'about' && (
          /* About Page */
          <main className="about-container">
            <h2 className="about-title">About Crackd</h2>
            
            <p className="about-pitch">
              Crackd is a free, AI-powered interview preparation platform built specifically for college students preparing for technical placements and internships.
            </p>
            
            <p className="about-lead">
              Crackd gives you a <strong>clear, structured path to prepare</strong>.
            </p>
            
            <p className="about-text">
              Learn the concepts first, understand how they work, and then put your knowledge into practice. Topics are organized into focused sections — from <strong>Arrays, Linked Lists, Stacks, and Queues to Trees, Algorithms, SQL, System Design, and Machine Learning</strong> — with structured notes, explanations, examples, and practice questions for each topic.
            </p>
            
            <h3 className="about-subheading">AI Interview Simulator</h3>
            <p className="about-text">
              Giving you a realistic environment to practice technical interviews and check your understanding. Enter interview mode, explain your approach to an AI interviewer, answer follow-up questions, and practice handling the kind of questions you'd face in an actual technical interview.
            </p>
            
            <div className="about-quote-box">
              <p className="about-quote-lead">Crackd is built around one simple idea:</p>
              <blockquote className="about-blockquote">
                "Don't just prepare to solve problems. Prepare to crack the interview."
              </blockquote>
            </div>
            
            <p className="about-footer-text">
              And the best part? <strong>It's completely free and made for students.</strong>
            </p>
            
            <button className="back-home-btn" onClick={() => setCurrentPage('home')}>
              <ArrowLeft size={16} />
              <span>Back to Courses</span>
            </button>
          </main>
        )}

        {currentPage === 'cover' && (
          /* What We Cover Page */
          <main className="cover-container">
            <h2 className="cover-title">What Crackd Covers</h2>
            
            <p className="cover-intro">
              Crackd covers the most important technical topics required for <strong>college placements, internships, and entry-level software engineering interviews</strong>. Each topic is broken down into focused sections, helping you learn concepts in a structured order before practicing interview questions.
            </p>

            <div className="cover-grid">
              
              {/* Data Structures */}
              <div className="cover-card">
                <h3 className="cover-card-header">📚 Data Structures</h3>
                <p className="cover-card-desc">Learn the fundamental data structures commonly tested in technical interviews.</p>
                <ul className="cover-list">
                  <li>Arrays</li>
                  <li>Linked Lists</li>
                  <li>Stacks</li>
                  <li>Queues</li>
                  <li>Trees</li>
                  <li>Graphs</li>
                  <li>Hash Tables</li>
                </ul>
              </div>

              {/* Algorithms */}
              <div className="cover-card">
                <h3 className="cover-card-header">⚡ Algorithms</h3>
                <p className="cover-card-desc">Build problem-solving skills through the most important algorithmic techniques.</p>
                <ul className="cover-list">
                  <li>Sorting</li>
                  <li>Searching</li>
                  <li>Recursion</li>
                  <li>Backtracking</li>
                  <li>Dynamic Programming (DP)</li>
                  <li>Greedy Algorithms</li>
                  <li>Graph Algorithms</li>
                </ul>
              </div>

              {/* System Design */}
              <div className="cover-card">
                <h3 className="cover-card-header">🏗️ System Design</h3>
                <p className="cover-card-desc">Understand the fundamentals of designing scalable and reliable software systems.</p>
                <ul className="cover-list">
                  <li>Scalability</li>
                  <li>Load Balancing</li>
                  <li>Databases & Normalization</li>
                  <li>Caching</li>
                  <li>Message Queues & Async Processing</li>
                  <li>Distributed Systems</li>
                  <li>System Design Case Studies
                    <ul className="cover-nested-list">
                      <li>URL Shortener</li>
                      <li>Chat System</li>
                      <li>And more</li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* SQL & Databases */}
              <div className="cover-card">
                <h3 className="cover-card-header">🗄️ SQL & Databases</h3>
                <p className="cover-card-desc">Master SQL queries and database fundamentals frequently asked in interviews.</p>
                <ul className="cover-list">
                  <li>SELECT & Basic Queries</li>
                  <li>JOINs</li>
                  <li>Aggregations & GROUP BY</li>
                  <li>Subqueries</li>
                  <li>CTEs</li>
                  <li>Indexes</li>
                  <li>Query Optimization</li>
                  <li>Transactions & ACID Properties</li>
                </ul>
              </div>

              {/* Machine Learning */}
              <div className="cover-card">
                <h3 className="cover-card-header">🤖 Machine Learning</h3>
                <p className="cover-card-desc">Cover the core Machine Learning concepts relevant to ML-focused developer roles.</p>
                <ul className="cover-list">
                  <li>Supervised Learning</li>
                  <li>Unsupervised Learning</li>
                  <li>Model Selection & Evaluation</li>
                  <li>Feature Engineering</li>
                  <li>ML System Design</li>
                  <li>Common ML Interview Questions</li>
                </ul>
              </div>

              {/* AI Interview Practice */}
              <div className="cover-card">
                <h3 className="cover-card-header">🎤 AI Interview Practice</h3>
                <p className="cover-card-desc">After learning the concepts, put your knowledge to the test with our simulator.</p>
                <ul className="cover-list">
                  <li>Topic-specific interview questions</li>
                  <li>Explain your approach to the AI</li>
                  <li>AI-generated follow-up questions</li>
                  <li>Time & space complexity discussions</li>
                  <li>Edge-case & optimization questions</li>
                  <li>Feedback on performance</li>
                </ul>
              </div>

            </div>

            <div className="cover-summary-box">
              Learn the concepts. Practice the problems. Explain your thinking. Crack the interview.
            </div>

            <button className="back-home-btn" onClick={() => setCurrentPage('home')}>
              <ArrowLeft size={16} />
              <span>Back to Courses</span>
            </button>
          </main>
        )}

      </div>
    </div>
  );
}

export default App;
