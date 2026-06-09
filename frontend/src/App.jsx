import { useState, useEffect } from 'react';
import AboutUs from './components/AboutUs';
import WhatWeDo from './components/WhatWeDo';

function App() {
  const words = ['Inside', 'Within', 'Deeper', 'Godward'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/70 backdrop-blur-md py-3' 
          : 'py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-8">
          {/* Left Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className={`hover:text-cyan-400 transition-colors text-sm font-medium ${isScrolled ? 'text-white' : 'text-gray-900'}`}>Home</a>
            <a href="#initiatives" className={`hover:text-cyan-400 transition-colors text-sm font-medium ${isScrolled ? 'text-white' : 'text-gray-900'}`}>Initiatives</a>
            <a href="#about" className={`hover:text-cyan-400 transition-colors text-sm font-medium ${isScrolled ? 'text-white' : 'text-gray-900'}`}>About</a>
            <a href="#gallery" className={`hover:text-cyan-400 transition-colors text-sm font-medium ${isScrolled ? 'text-white' : 'text-gray-900'}`}>Gallery</a>
          </div>

          {/* Right Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#contact" className={`hover:text-cyan-400 transition-colors text-sm font-medium ${isScrolled ? 'text-white' : 'text-gray-900'}`}>Contact</a>
            <button className="px-6 py-2 cursor-pointer bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all text-sm">
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className={`md:hidden ml-auto ${isScrolled ? 'text-white' : 'text-gray-900'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Logo Positioned Over Sun */}
      <div className={`fixed left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ${
        isScrolled ? 'top-2' : 'top-[18%]'
      }`}>
        <img 
          src="/Logo.png" 
          alt="Kshitij KIIT Spiritual Society" 
          className={`transition-all duration-300 rounded-full drop-shadow-2xl ${
            isScrolled ? 'h-12' : 'h-20'
          }`}
        />
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/backgroun.png')" }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 pt-14">
          <h1 className="text-xl md:text-4xl font-bold mb-6 tracking-wide flex flex-wrap items-center justify-center gap-2" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7), 0 4px 12px rgba(0,0,0,0.5)'}}>
            <span>The Journey</span>
            <span 
              className={`bg-gradient-to-r from-orange-500 via-yellow-500 to-violet-500 px-3 md:px-4 py-1 rounded-lg transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}
            >
              {words[currentWordIndex]}
            </span>
          </h1>
          <p className="text-lg md:text-md relative text-white max-w-3xl mb-6 leading-relaxed font-semibold" style={{textShadow: '0 2px 6px rgba(0,0,0,0.7), 0 3px 10px rgba(0,0,0,0.5)'}}>
            Discover peace, purpose, and timeless wisdom with a community that grows together.
          </p>
          <button className="px-8 p-3 cursor-pointer bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg">
            Join Our Community
          </button>
        </div>
      </div>

      {/* About Us Section with Boat Animation */}
      <AboutUs />
      <WhatWeDo/>
      
    </div>
  );
}

export default App;
