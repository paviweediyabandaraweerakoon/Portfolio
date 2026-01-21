import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'maduweediyabandaraweerakoon@gmail.com',
      link: 'mailto:maduweediyabandaraweerakoon@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 70 234 1369',
      link: 'tel:+94702341369',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Aluth Walawwa, Dammulla, Beliatta, Sri Lanka',
      link: null,
      color: 'from-teal-500 to-emerald-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      username: 'paviweediyabandaraweerakoon',
      link: 'https://github.com/paviweediyabandaraweerakoon',
      color: 'hover:text-blue-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      username: 'pavithraweerakoon',
      link: 'https://linkedin.com/in/pavithraweerakoon',
      color: 'hover:text-cyan-400'
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Let's discuss your next project or just have a chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-5 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 bg-gradient-to-r ${info.color} bg-opacity-20 rounded-xl`}>
                          <Icon className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                          <p className="text-white font-medium break-all">{info.value}</p>
                        </div>
                      </div>
                    </div>
                  );

                  return info.link ? (
                    <a key={index} href={info.link} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex-1"
                    >
                      <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-5 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                        <Icon className={`text-white mb-2 ${social.color} transition-colors`} size={32} />
                        <p className="text-white font-semibold mb-1">{social.label}</p>
                        <p className="text-sm text-gray-400 break-all">{social.username}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </div>
                <h4 className="text-lg font-bold text-white">Available for Projects</h4>
              </div>
              <p className="text-gray-300 text-sm">
                I'm currently available for freelance projects and full-time opportunities. 
                Feel free to reach out!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-bold text-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={24} />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={24} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {submitted && (
              <div className="mt-4 p-4 bg-emerald-600/20 border border-emerald-500/30 rounded-xl">
                <p className="text-emerald-300 text-sm text-center">
                  Thank you for your message! I'll get back to you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
