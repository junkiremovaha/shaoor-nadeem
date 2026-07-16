// =====================================================
// Projects Showcase Component
// Grid layout with modal popups for project details
// =====================================================
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Folder, Cpu, Bot, Car, BarChart2, BookOpen } from 'lucide-react';

// Category icons mapping
const categoryIcons = {
  'Automation': Bot,
  'Marketing': BarChart2,
  'Data Extraction': Cpu,
  'SAP Education': BookOpen,
  'Ride-Sharing': Car,
};

// Static projects data
const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Restaurant Order Automation Bot',
    category: 'Automation',
    description: 'Python/WhatsApp Automation bot for seamless order booking and customer interaction management for restaurants.',
    details: 'A fully automated order management system built with Python and WhatsApp API integration. The bot handles customer inquiries, processes orders, sends confirmations, and manages the full order lifecycle — reducing manual workload for restaurant staff and improving customer experience significantly.',
    technologies: ['Python', 'WhatsApp API', 'Twilio', 'Flask'],
    image_url: null,
  },
  {
    id: 2,
    title: 'Luxury Press-On Nails Marketing and SEO',
    category: 'Marketing',
    description: 'Comprehensive Pinterest-based marketing strategy and curated content generation for a commercial nail business.',
    details: 'Developed and executed a full digital marketing strategy for a luxury press-on nails brand. This included Pinterest board optimization, SEO-driven content creation, keyword research, and analytics tracking. The strategy resulted in significant organic traffic growth and increased brand visibility.',
    technologies: ['Pinterest Marketing', 'SEO', 'Content Strategy', 'Analytics'],
    image_url: null,
  },
  {
    id: 3,
    title: 'InDrive Ride-Sharing Automation',
    category: 'Data Extraction',
    description: 'OCR & regex-based implementation for automated data extraction and processing in ride-sharing platforms.',
    details: 'Built an intelligent automation solution for ride-sharing data extraction using OCR technologies and regex pattern matching. The system automatically captures, processes, and structures ride data from screenshots — enabling efficient reporting and data analysis without manual input.',
    technologies: ['Python', 'OCR (Tesseract)', 'Regex', 'NumPy', 'Pandas'],
    image_url: null,
  },
  {
    id: 4,
    title: 'SAP Educational Series and Technical Blogging',
    category: 'SAP Education',
    description: 'Systematic creation of B2B technical posts and infographics focusing on complex SAP S/4HANA processes and modules.',
    details: 'Produced a comprehensive series of technical blog posts, infographics, and educational content covering SAP S/4HANA modules including MM, PP, and DMS. The content targets B2B audiences and SAP practitioners, breaking down complex enterprise workflows into accessible, actionable knowledge.',
    technologies: ['SAP S/4HANA', 'Content Creation', 'Technical Writing', 'Infographics'],
    image_url: null,
  },
  {
    id: 5,
    title: 'Business Data Extraction Tool',
    category: 'Data Extraction',
    description: 'Python programming focused on web scraping and extracting business data for local commercial entities.',
    details: 'Developed a robust web scraping and data extraction tool using Python to collect structured business information for local commercial entities. The tool automates data collection, cleans raw data, and exports it in structured formats — saving hours of manual research work.',
    technologies: ['Python', 'Web Scraping', 'BeautifulSoup', 'Selenium', 'Pandas'],
    image_url: null,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', ...new Set(PROJECTS_DATA.map((p) => p.category))];

  const filteredProjects = filter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === filter);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <section id="projects" className="py-20 lg:py-32 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Major{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Showcasing impactful solutions across enterprise systems, automation, and data extraction.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-slate-900/50 text-gray-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const Icon = categoryIcons[project.category] || Folder;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer bg-slate-900 rounded-xl border border-slate-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <Icon className="text-cyan-500/30" size={64} />
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-slate-800 text-gray-400 text-xs rounded-md">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-slate-800 text-gray-400 text-xs rounded-md">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-slate-800 rounded-full text-gray-400 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Modal Icon Header */}
                <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  {(() => {
                    const Icon = categoryIcons[selectedProject.category] || Folder;
                    return <Icon className="text-cyan-500/40" size={96} />;
                  })()}
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/30 mb-4">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.details}</p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-slate-800 text-cyan-400 text-sm rounded-lg border border-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href="mailto:shaoorwarraich@gmail.com"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all text-center"
                    >
                      Discuss This Project
                    </motion.a>
                    <motion.button
                      onClick={() => setSelectedProject(null)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 border border-slate-600 text-gray-300 font-semibold rounded-lg hover:bg-slate-800 transition-all"
                    >
                      <X size={20} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
