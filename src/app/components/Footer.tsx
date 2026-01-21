import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="text-white" size={24} />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/30">
                P
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Pavithra Weerakoon
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Frontend Developer & UI/UX Designer passionate about creating beautiful, 
              user-friendly digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/paviweediyabandaraweerakoon"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 border border-slate-700 rounded-lg hover:border-blue-500 hover:bg-blue-600/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="text-gray-300 hover:text-blue-400 transition-colors" size={20} />
              </a>
              <a
                href="https://linkedin.com/in/pavithraweerakoon"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 border border-slate-700 rounded-lg hover:border-blue-500 hover:bg-blue-600/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-gray-300 hover:text-blue-400 transition-colors" size={20} />
              </a>
              <a
                href="mailto:maduweediyabandaraweerakoon@gmail.com"
                className="p-3 bg-slate-800 border border-slate-700 rounded-lg hover:border-blue-500 hover:bg-blue-600/10 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="text-gray-300 hover:text-blue-400 transition-colors" size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              maduweediyabandaraweerakoon@gmail.com
            </p>
            <p className="text-gray-400 text-sm">
              +94 70 234 1369
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Pavithra Madhuwanthi Weediya Bandara. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <Heart className="text-red-500 fill-current" size={16} /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
