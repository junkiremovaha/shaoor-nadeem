// =====================================================
// Education & Certifications Component
// Timeline-style display of academic and professional credentials
// =====================================================
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

// Static education data
const EDUCATION_DATA = [
  {
    id: 1,
    year: '2021',
    title: 'MSc Control Systems',
    institution: 'University of Engineering and Technology, Lahore',
    description: 'Advanced studies in control systems engineering, focusing on Industrial Automation, feedback control, and system dynamics.',
  },
  {
    id: 2,
    year: '2015',
    title: 'BSc Electrical Engineering',
    institution: 'University of Engineering and Technology, Taxila',
    description: 'Comprehensive electrical engineering education covering power systems, electronics, and control theory.',
  },
];

// Static certifications data
const CERTIFICATIONS_DATA = [
  {
    id: 1,
    year: '2022',
    title: 'Linux Users and Permissions Certification',
    institution: 'Linux Professional Institute',
    description: 'Professional certification demonstrating proficiency in Linux system administration, user management, and security permissions.',
  },
  {
    id: 2,
    year: '2023',
    title: 'SAP S/4HANA Materials Management (MM)',
    institution: 'SAP SE',
    description: 'Certification validating expertise in SAP S/4HANA Materials Management including procurement, inventory management, and vendor evaluation.',
  },
  {
    id: 3,
    year: '2023',
    title: 'SAP S/4HANA Production Planning (PP)',
    institution: 'SAP SE',
    description: 'Professional certification covering production planning, manufacturing execution, and supply chain processes within SAP S/4HANA.',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-32 bg-slate-900">
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
            Education &{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            A foundation of academic excellence and continuous professional development.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </motion.div>

            <div className="space-y-6">
              {EDUCATION_DATA.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-cyan-500/30"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50" />

                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
                    <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mb-2">
                      <Calendar size={14} />
                      {item.year}
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm mb-2">{item.institution}</p>
                    {item.description && (
                      <p className="text-gray-500 text-sm">{item.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                <Award className="text-purple-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </motion.div>

            <div className="space-y-6">
              {CERTIFICATIONS_DATA.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-purple-500/30"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" />

                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
                    <div className="flex items-center gap-2 text-purple-400 text-sm font-medium mb-2">
                      <Calendar size={14} />
                      {item.year}
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm mb-2">{item.institution}</p>
                    {item.description && (
                      <p className="text-gray-500 text-sm">{item.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
