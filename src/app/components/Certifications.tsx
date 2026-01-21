import React from 'react';
import { Award, Trophy, BookOpen, Users } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Introduction to Data Science',
      provider: 'SkillUp by Simplilearn',
      icon: '📊'
    },
    {
      title: 'Introduction to Front-End Development',
      provider: 'SkillUp by Simplilearn',
      icon: '💻'
    },
    {
      title: 'ReactJS for Beginners',
      provider: 'Online Course',
      icon: '⚛️'
    },
    {
      title: 'Python for Beginners',
      provider: 'University of Moratuwa',
      icon: '🐍'
    },
    {
      title: 'Introduction to WordPress',
      provider: 'Online Course',
      icon: '📝'
    },
    {
      title: 'Learn WordPress',
      provider: 'Online Course',
      icon: '🌐'
    }
  ];

  const achievements = [
    {
      title: 'HIRS Symposium 2025',
      description: 'Research paper published and presented',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'King of 64 Chess Tournament',
      description: '1st Runners-up',
      icon: Trophy,
      color: 'from-cyan-500 to-teal-500'
    },
    {
      title: 'Horizon Battle of Brains',
      description: '1st Runners-up (2024)',
      icon: Trophy,
      color: 'from-teal-500 to-emerald-500'
    },
    {
      title: 'Eco Pilot',
      description: 'Gold Medalist',
      icon: Award,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const activities = [
    'Treasurer - Horizon Campus Chess Club',
    'Former Creative Designer - Horizon Campus Chess Club',
    'Air Force Cadet Corporal',
    'School Prefect'
  ];

  const experience = [
    {
      role: 'Part-Time IT Instructor',
      description: 'Delivered IT fundamentals and basic computing sessions',
      icon: '👨‍🏫'
    },
    {
      role: 'O/L Mathematics Tutor',
      description: 'Strengthened analytical thinking and problem-solving skills',
      icon: '📐'
    }
  ];

  return (
    <section id="certifications" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications & Achievements
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Award className="text-blue-400" size={32} />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{cert.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-1">{cert.title}</h4>
                      <p className="text-sm text-gray-400">{cert.provider}</p>
                    </div>
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Trophy className="text-cyan-400" size={32} />
              Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-5 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-gradient-to-r ${achievement.color} bg-opacity-20 rounded-xl`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white mb-1">{achievement.title}</h4>
                        <p className="text-sm text-gray-400">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <BookOpen className="text-blue-400" size={32} />
              Experience
            </h3>
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 backdrop-blur-sm border border-blue-500/30 rounded-xl p-5 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{exp.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-2">{exp.role}</h4>
                      <p className="text-gray-300 text-sm">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activities & Leadership */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Users className="text-cyan-400" size={32} />
              Activities & Leadership
            </h3>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-2"></div>
                    <p className="text-gray-300 flex-1">{activity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
