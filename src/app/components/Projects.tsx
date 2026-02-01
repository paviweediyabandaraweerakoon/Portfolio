import React from 'react';
import { ExternalLink, Github, Globe, Brain, Gift, Plane, Droplet, Video, Code } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Smart Tourism Planning Framework for Sri Lanka',
      type: 'Research Project',
      description: 'Published at HIRS Symposium 2025. Conducted a PRISMA-based systematic review analyzing tourism planning factors such as seasonality, budget optimization, crowd management, and technology usage.',
      tech: ['Research', 'Data Analysis', 'PRISMA', 'Tourism Tech'],
      icon: Plane,
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1546661869-cf589fac7085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyaXNtJTIwdHJhdmVsJTIwZGVzdGluYXRpb258ZW58MXx8fHwxNzY4NzU5NjEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      links: []
    },
    {
      title: 'BrightLearn Educational Mobile App',
      type: 'React Native',
      description: 'Designed and developed a multi-interface educational mobile application with a focus on clean UI design and smooth navigation. Implemented reusable frontend components aligned with modern mobile UX principles.',
      tech: ['React Native', 'Mobile UI/UX', 'Component Design'],
      icon: Brain,
      color: 'from-cyan-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1758270704522-f091f8064a81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBsZWFybmluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3Njg3NTk2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      links: []
    },
    {
      title: 'Shenu Gift Hub',
      type: 'Frontend Web Project',
      description: 'Developed a responsive web interface using HTML, CSS, and JavaScript with emphasis on usability and layout consistency. Applied Git-based version control and modern e-commerce design patterns.',
      tech: ['HTML', 'CSS', 'JavaScript', 'E-commerce'],
      icon: Gift,
      color: 'from-teal-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1696746910563-14f461fa5c95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwc2hvcCUyMHByZXNlbnRzfGVufDF8fHx8MTc2ODc1OTYxNHww&ixlib=rb-4.1.0&q=80&w=1080',
      links: [
        { type: 'live', url: 'https://shenu-gift-hub.vercel.app/' },
        { type: 'github', url: 'https://github.com/paviweediyabandaraweerakoon/Shenu-Gift-Hub' }
      ]
    },
    {
      title: 'Blue Ocean Aquarium',
      type: 'Web UI',
      description: 'Designed a responsive aquarium-themed web interface using HTML, CSS, and JavaScript. Focused on clean layout, visual consistency, and user-friendly navigation.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      icon: Droplet,
      color: 'from-blue-600 to-indigo-600',
      image: 'https://images.unsplash.com/photo-1713238134800-6bd51b209e42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGFxdWFyaXVtJTIwZmlzaHxlbnwxfHx8fDE3Njg3NTk2MTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      links: [
        { type: 'live', url: 'https://blue-ocean-aquarium-catj.vercel.app/' },
        { type: 'github', url: 'https://github.com/paviweediyabandaraweerakoon/BlueOceanAquarium' }
      ]
    },

     {
      title: 'MPS AI SOLUTION',
      type: 'Web UI',
      description: 'Built a responsive company website using React, Vite, and TypeScript, emphasizing reusable components, modern UI design, and fast performance with Tailwind CSS.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      icon: Droplet,
      color: 'from-slate-900 via-indigo-900 to-purple-900',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQE5EptkecrLmA/profile-displayphoto-crop_800_800/B56ZuHrPIFKgAI-/0/1767507818104?e=1771459200&v=beta&t=Ei8G3Y0Pdy2wq1anXpnrjpP_RQPh_crDr4uE2xmgZUo',
      links: [
        { type: 'live', url: 'https://mps-ai-solution.vercel.app/' },
        { type: 'github', url: 'https://github.com/paviweediyabandaraweerakoon/MPS-AI-SOLUTION' }
      ]
    },
    
    {
      title: 'Sri Lanka Tourism',
      type: 'Frontend Web Project',
      description: 'Developed a responsive web platform showcasing Sri Lanka\'s key attractions using HTML, CSS, and JavaScript, with improved UI accessibility and visual layout.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Tourism'],
      icon: Plane,
      color: 'from-indigo-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1695748394754-9a8f807f9568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHRlbXBsZXxlbnwxfHx8fDE3Njg2NTM1OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      links: [
        { type: 'live', url: 'https://sri-lanka-tourism-tau.vercel.app/' }
      ]
    },
    {
      title: 'Telegram AI Bot',
      type: 'Python',
      description: 'Built an intelligent Telegram bot using Python with AI capabilities for automated responses and user interaction.',
      tech: ['Python', 'AI', 'Telegram API', 'Bot Development'],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1625314887424-9f190599bd56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3R8ZW58MXx8fHwxNzY4NzA2MTc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      links: [
        { type: 'live', url: 'https://telegram-ai-bot-test.vercel.app/' },
        { type: 'github', url: 'https://github.com/paviweediyabandaraweerakoon/Telegram-AI-bot-test' }
      ]
    },
    {
      title: 'YouTube Video Downloader',
      type: 'Python',
      description: 'Developed a Python-based application for downloading YouTube videos with a user-friendly interface.',
      tech: ['Python', 'API Integration', 'Web Scraping'],
      icon: Video,
      color: 'from-pink-500 to-rose-500',
      image: 'https://images.unsplash.com/photo-1642726197626-f03ef77f13cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGRvd25sb2FkJTIwcGxheWVyfGVufDF8fHx8MTc2ODc1OTYxNnww&ixlib=rb-4.1.0&q=80&w=1080',
      links: [
        { type: 'live', url: 'https://you-tube-video-downloader-jade.vercel.app/' }
      ]
    },
    {
      title: 'Additional Projects',
      type: 'Data Science & ML',
      description: 'Wine Quality Prediction, House Price Prediction API (Flask). Leveraged machine learning algorithms and Flask API for predictive analytics.',
      tech: ['Python', 'Flask', 'Machine Learning', 'Data Science'],
      icon: Code,
      color: 'from-rose-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3Njg2OTkxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      links: []
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my work in frontend development, research, and data science
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-blue-500/20 hover:transform hover:scale-105"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20`}></div>
                </div>

                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 bg-gradient-to-r ${project.color} bg-opacity-20 rounded-xl`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-400">{project.type}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-lg text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.links.length > 0 && (
                    <div className="flex gap-3 pt-4 border-t border-slate-700">
                      {project.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-lg text-sm text-blue-300 hover:bg-blue-600/30 hover:border-blue-500/50 transition-all duration-300"
                        >
                          {link.type === 'live' ? (
                            <>
                              <Globe size={16} />
                              <span>Live Demo</span>
                            </>
                          ) : (
                            <>
                              <Github size={16} />
                              <span>GitHub</span>
                            </>
                          )}
                          <ExternalLink size={14} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Want to see more?</h3>
            <p className="text-gray-300 mb-6">Check out my GitHub for more projects and contributions</p>
            <a
              href="https://github.com/paviweediyabandaraweerakoon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-bold text-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              <Github size={24} />
              <span>Visit My GitHub</span>
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
