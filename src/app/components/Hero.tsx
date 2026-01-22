import React, { useState, useEffect } from 'react';
import { Sparkles, Code, Palette, Zap, Heart, Star } from 'lucide-react';

const Hero = ({ setActiveSection }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  
  const words = ['Creative', 'Innovative', 'Modern', 'Beautiful'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Animated gradient orbs */}
      <div 
        className="absolute w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"
        style={{
          top: '20%',
          left: '10%',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      ></div>
      <div 
        className="absolute w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-pulse"
        style={{
          bottom: '20%',
          right: '10%',
          animationDelay: '1s',
          transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`
        }}
      ></div>
      <div 
        className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"
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
          className="absolute w-2 h-2 bg-purple-400/50 rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        ></div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Floating icons */}
        <div className="absolute -top-20 left-0 animate-bounce" style={{ animationDuration: '3s' }}>
          <Code className="text-purple-400/40" size={40} />
        </div>
        <div className="absolute -top-10 right-10 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
          <Palette className="text-pink-400/40" size={40} />
        </div>
        <div className="absolute top-20 left-20 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
          <Sparkles className="text-blue-400/40" size={32} />
        </div>
        <div className="absolute top-32 right-32 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}>
          <Zap className="text-yellow-400/40" size={32} />
        </div>
        <div className="absolute bottom-40 left-40 animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '0.8s' }}>
          <Heart className="text-red-400/40" size={28} />
        </div>
        <div className="absolute bottom-32 right-20 animate-bounce" style={{ animationDuration: '4.2s', animationDelay: '2s' }}>
          <Star className="text-cyan-400/40" size={28} />
        </div>

        {/* Glowing badge */}
        <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full border-2 border-purple-400/50 backdrop-blur-sm shadow-lg shadow-purple-500/50 animate-pulse">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-purple-200 text-sm font-semibold tracking-wide">AVAILABLE FOR PROJECTS</span>
          </div>
        </div>

        {/* Main heading with gradient and animation */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black mb-4">
            <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-pulse">
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
                  Your Name
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 rounded-full"></span>
              </span>
            </span>
          </h1>
          
          {/* Animated rotating words */}
          <div className="text-4xl sm:text-5xl md:text-7xl font-black h-20 sm:h-24 md:h-32 flex items-center justify-center">
            <span className="text-gray-400 mr-4">I Build</span>
            <span 
              key={currentWord}
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-pulse inline-block"
              style={{
                animation: 'fadeInUp 0.5s ease-in-out'
              }}
            >
              {words[currentWord]}
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
            Digital Experiences
          </h2>
        </div>

        {/* Description with typing effect feel */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
          <span className="text-purple-400 font-semibold">Frontend Developer</span>
          {' '}&{' '}
          <span className="text-pink-400 font-semibold">UI/UX Designer</span>
          <br />
          <span className="text-gray-400 text-lg">
            Transforming ideas into stunning, user-friendly interfaces with pixel-perfect precision
          </span>
        </p>

        {/* CTA Buttons with cool effects */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-lg overflow-hidden transform hover:scale-110 transition-all duration-300 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/80"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles size={20} />
              View My Work
              <Sparkles size={20} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="group relative px-10 py-4 border-3 border-purple-400 rounded-xl font-bold text-lg overflow-hidden transform hover:scale-110 transition-all duration-300 hover:border-pink-400"
          >
            <span className="relative z-10 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:to-purple-400 flex items-center gap-2">
              <Zap size={20} className="text-purple-400 group-hover:text-pink-400" />
              Let's Connect
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-purple-400 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-purple-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
