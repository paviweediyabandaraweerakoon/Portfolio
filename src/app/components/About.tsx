import React from 'react';
import { User, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Info */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 shadow-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-600/20 rounded-xl">
                  <User className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Pavithra Madhuwanthi Weediya Bandara</h3>
                  <p className="text-blue-400 font-semibold">IT Undergraduate & Frontend Developer</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Enthusiastic IT undergraduate with a strong interest in frontend development and user-centered design. 
                Skilled in building responsive web interfaces using React.js, HTML, CSS, and JavaScript, with hands-on 
                experience converting UI designs into clean, reusable components.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 shadow-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-cyan-600/20 rounded-xl">
                  <GraduationCap className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Education</h3>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-blue-500 pl-4">
                  <p className="text-white font-semibold">B.Sc. (Hons) in Information Technology</p>
                  <p className="text-gray-400 text-sm">Horizon Campus • 2022 - Present</p>
                </div>
                <div className="border-l-2 border-cyan-500 pl-4">
                  <p className="text-white font-semibold">Full Stack Developer Programme</p>
                  <p className="text-gray-400 text-sm">University of Moratuwa (Online) • 2025 - Present</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Highlights */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Briefcase className="text-blue-400" size={28} />
                Professional Focus
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <p className="text-gray-300">Frontend Development with React.js, HTML5, CSS3, JavaScript</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <p className="text-gray-300">UI/UX Design using Figma, Uizard, and Canva</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <p className="text-gray-300">Responsive Web Design and Design-to-Code conversion</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <p className="text-gray-300">Data Analysis with Python, Excel, and Power BI</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">Beyond Coding</h3>
              <div className="flex flex-wrap gap-3">
                {['Research', 'Teaching', 'Chess', 'Leadership', 'Design', 'Analytics'].map((item, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border border-blue-500/30 rounded-full text-sm text-blue-200 font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 text-center shadow-xl">
              <p className="text-gray-300 italic">
                "Motivated to continuously learn emerging frontend technologies while contributing to real-world, scalable applications."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
