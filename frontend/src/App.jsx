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
  Info,
  Github,
  Moon
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

  return (
    <div className="app-container">
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
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xffffff,
            brokenLines: 0xffffff,
            leftCars:  [0xd856bf, 0x6750a2, 0xc247ac],
            rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
            sticks: 0x03b3c3
          }
        }} />
      </div>

      {/* Page Content */}
      <div className="page-content">

        {/* Floating Glassmorphism Navbar */}
        <nav className="navbar">
          <div className="nav-left">
            <a href="#about" className="nav-link">
              <Info size={16} />
              <span>About</span>
            </a>
            <a href="#what-we-cover" className="nav-link">
              <span>What We Cover</span>
            </a>
          </div>

          <div className="nav-center">
            <a href="/" className="nav-logo">Crackd</a>
          </div>

          <div className="nav-right">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="nav-icon-btn" aria-label="GitHub">
              <Github size={20} />
            </a>
            <button className="nav-icon-btn" aria-label="Toggle Theme">
              <Moon size={20} />
            </button>
            <button className="nav-cta-btn">
              Get Started
            </button>
          </div>
        </nav>

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

      </div>
    </div>
  );
}

export default App;
