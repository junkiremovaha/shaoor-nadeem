// =====================================================
// Skills Matrix Component
// Dynamic skills display with animated progress bars
// =====================================================
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Code, Cpu } from 'lucide-react';

// Category icons and colors configuration
const categoryConfig = {
  Enterprise: {
    icon: Database,
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-500/20',
    iconColor: 'text-cyan-400',
  },
  Technical: {
    icon: Code,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/20',
    iconColor: 'text-purple-400',
  },
  Engineering: {
    icon: Cpu,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/20',
    iconColor: 'text-green-400',
  },
};

// Static skills data
const SKILLS_DATA = [
  // Engineering
  { id: 1, name: 'Electrical Engineering', proficiency: 95, category: 'Engineering' },
  { id: 2, name: 'Control Systems', proficiency: 90, category: 'Engineering' },
  { id: 3, name: 'Project Management', proficiency: 88, category: 'Engineering' },
  { id: 4, name: 'Industrial Automation', proficiency: 85, category: 'Engineering' },
  // Enterprise
  { id: 5, name: 'SAP S/4HANA MM', proficiency: 95, category: 'Enterprise' },
  { id: 6, name: 'SAP Integration', proficiency: 92, category: 'Enterprise' },
  { id: 7, name: 'SAP S/4HANA PP', proficiency: 90, category: 'Enterprise' },
  { id: 8, name: 'SAP DMS', proficiency: 88, category: 'Enterprise' },
  { id: 9, name: 'PLM (Product Lifecycle Management)', proficiency: 85, category: 'Enterprise' },
  // Technical
  { id: 10, name: 'Regex', proficiency: 92, category: 'Technical' },
  { id: 11, name: 'Python', proficiency: 90, category: 'Technical' },
  { id: 12, name: 'API Integration', proficiency: 88, category: 'Technical' },
  { id: 13, name: 'Web Automation', proficiency: 88, category: 'Technical' },
  { id: 14, name: 'OCR Technologies', proficiency: 85, category: 'Technical' },
  { id: 15, name: 'JavaScript', proficiency: 80, category: 'Technical' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Group skills by category
  const groupedSkills = SKILLS_DATA.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categories = ['all', ...Object.keys(groupedSkills)];

  const filteredGroups = activeCategory === 'all'
    ? groupedSkills
    : { [activeCategory]: groupedSkills[activeCategory] || [] };

  return (
    <section id="skills" className="py-20 lg:py-32 bg-slate-900">
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
            Skills{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Matrix
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            A comprehensive overview of my technical expertise across enterprise systems, software development, and engineering domains.
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
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(filteredGroups).map(([category, categorySkills], categoryIndex) => {
            const config = categoryConfig[category] || categoryConfig.Technical;
            const Icon = config.icon;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 hover:border-cyan-500/30 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 ${config.bgColor} rounded-lg flex items-center justify-center`}>
                    <Icon className={config.iconColor} size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                        <span className={`text-sm font-medium ${config.iconColor}`}>{skill.proficiency}%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1, ease: 'easeOut' }}
                          className={`h-full bg-gradient-to-r ${config.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
