import React from 'react';
import { Code2, Palette, Database, Wrench, MessageSquare, Lightbulb } from 'lucide-react';

const Skills: React.FC = () => {
  const technicalSkills = [
    {
      category: 'Frontend Development',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Design']
    },
    {
      category: 'UI/UX & Design Tools',
      icon: Palette,
      color: 'from-cyan-500 to-teal-500',
      skills: ['Figma', 'Uizard', 'Canva', 'Wireframing', 'Prototyping', 'Design-to-Code']
    },
    {
      category: 'Programming',
      icon: Database,
      color: 'from-blue-600 to-indigo-600',
      skills: ['Python', 'PHP', 'SQL']
    },
    {
      category: 'Data & Visualization',
      icon: Database,
      color: 'from-indigo-500 to-purple-500',
      skills: ['Excel', 'Power BI', 'Data Cleaning', 'Data Analysis']
    },
    {
      category: 'Tools & Platforms',
      icon: Wrench,
      color: 'from-teal-500 to-cyan-500',
      skills: ['Git', 'GitHub', 'VS Code', 'WordPress', 'Jupyter', 'Google Colab']
    }
  ];

  const softSkills = [
    'Communication & Presentation',
    'Team Collaboration',
    'Problem-Solving',
    'Time Management',
    'Adaptability',
    'Leadership',
    'Creativity',
    'Attention to Detail'
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3 justify-center">
            <Code2 className="text-blue-400" size={32} />
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-blue-500/20 hover:transform hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 bg-gradient-to-r ${item.color} bg-opacity-20 rounded-xl`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-white">{item.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-lg text-sm text-gray-300 hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3 justify-center">
            <Lightbulb className="text-cyan-400" size={32} />
            Soft Skills
          </h3>
          <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                  <span className="text-gray-300 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Visual */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-4 p-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl">
            <span className="text-gray-400 font-semibold">Tech Stack:</span>
            {['React', 'JavaScript', 'Python', 'Figma', 'Git', 'Power BI', 'WordPress'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border border-blue-500/30 rounded-full text-sm text-blue-200 font-semibold hover:from-blue-600/50 hover:to-cyan-600/50 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
