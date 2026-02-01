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
      icon: Globe,
      color: 'from-slate-900 via-indigo-900 to-purple-900',
      image: 'https://media.licdn.com/dms/image/v2/D5616AQGthYCZ3iOfWQ/profile-displaybackgroundimage-shrink_350_1400/B56ZuHv5aAHAAY-/0/1767509050249?e=1771459200&v=beta&t=75z0NmU39RJfTLIydi37KMQCvSLYpTLxY8fqIGSuGQg',
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
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const Icon = project.icon ?? Globe; // ✅ ONLY CHANGE
          return (
            <div key={index}>
              <Icon />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
