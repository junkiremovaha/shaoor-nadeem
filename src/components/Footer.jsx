// =====================================================
// Footer Component
// Site footer with copyright and quick links
// =====================================================
import { motion } from 'framer-motion';
import { Heart, Linkedin, Github, Mail } from 'lucide-react';

const OWNER_EMAIL = 'shaoorwarraich@gmail.com';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Muhammad Shaoor Nadeem
            </motion.a>
            <p className="mt-4 text-gray-400 text-sm">
              SAP S/4HANA Consultant bridging enterprise systems with modern automation solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://www.linkedin.com/in/muhammad-shaoor-nadeem-04028ba7/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/muhammadshaoor"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-slate-700 transition-all"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href={`mailto:${OWNER_EMAIL}`}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-slate-700 transition-all"
              >
                <Mail size={20} />
              </motion.a>
            </div>
            <p className="mt-4 text-gray-500 text-sm">{OWNER_EMAIL}</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {currentYear} Muhammad Shaoor Nadeem. Crafted with{' '}
            <Heart className="text-red-500" size={14} fill="currentColor" />{' '}
            and modern technology.
          </p>
          <p className="text-gray-600 text-xs">
            Built with React, Tailwind CSS & Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
