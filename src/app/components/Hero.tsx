import React, { useState, useEffect } from 'react';
import { Sparkles, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  
  const words = ['Creative', 'Innovative', 'Modern', 'Responsive'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Animated gradient orbs */}
      <div 
        className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"
        style={{
          top: '20%',
          left: '10%',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      ></div>
      <div 
        className="absolute w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse"
        style={{
          bottom: '20%',
          right: '10%',
          animationDelay: '1s',
          transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`
        }}
      ></div>
      <div 
        className="absolute w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl animate-pulse"
        style={{
          top: '50%',
          left: '50%',
          animationDelay: '2s',
          transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
        }}
      ></div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/40 rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        ></div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Removed floating icons for professional look */}

        {/* Glowing badge */}
        <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full border-2 border-blue-400/40 backdrop-blur-sm shadow-lg shadow-blue-500/30 animate-pulse">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-blue-200 text-sm font-semibold tracking-wide">AVAILABLE FOR PROJECTS</span>
          </div>
        </div>

        {/* Main heading with gradient and animation */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4">
            <span className="block bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent animate-pulse">
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-400 bg-clip-text text-transparent">
                  Pavithra
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-400 rounded-full"></span>
              </span>
            </span>
          </h1>
          
          {/* Animated rotating words */}
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black h-16 sm:h-20 md:h-24 flex items-center justify-center">
            <span className="text-gray-400 mr-4">I Build</span>
            <span 
              key={currentWord}
              className="bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-400 bg-clip-text text-transparent animate-pulse inline-block"
              style={{
                animation: 'fadeInUp 0.5s ease-in-out'
              }}
            >
              {words[currentWord]}
            </span>
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Digital Experiences
          </h2>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
          <span className="text-blue-400 font-semibold">Frontend Developer</span>
          {' '}&{' '}
          <span className="text-cyan-400 font-semibold">UI/UX Designer</span>
          <br />
          <span className="text-gray-400 text-lg">
            Transforming ideas into stunning, user-friendly interfaces with pixel-perfect precision
          </span>
        </p>

        {/* Quick Contact Info */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-gray-400">
          <a href="https://github.com/paviweediyabandaraweerakoon" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Github size={16} />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/pavithraweerakoon" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:maduweediyabandaraweerakoon@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Mail size={16} />
            <span>Email</span>
          </a>
          <span className="flex items-center gap-2">
            <Phone size={16} />
            <span>+94 70 234 1369</span>
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-bold text-lg overflow-hidden transform hover:scale-110 transition-all duration-300 shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles size={20} />
              View My Work
              <Sparkles size={20} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="group relative px-10 py-4 border-3 border-blue-400 rounded-xl font-bold text-lg overflow-hidden transform hover:scale-110 transition-all duration-300 hover:border-cyan-400"
          >
            <span className="relative z-10 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-blue-400 flex items-center gap-2">
              <Sparkles size={20} className="text-blue-400 group-hover:text-cyan-400" />
              Let's Connect
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-blue-400 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
