// =====================================================
// About Section Component
// Professional summary with highlights
// =====================================================
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Cpu, Award } from 'lucide-react';

export default function About() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch profile data from API
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch('/api/profile');
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        console.error('Error fetching profile:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  // Highlight cards data
  const highlights = [
    {
      icon: Briefcase,
      title: 'Enterprise Systems',
      description: 'SAP S/4HANA consultant with growing expertise in MM, PP, and DMS modules',
    },
    {
      icon: Code,
      title: 'Automation Development',
      description: 'Building intelligent automation solutions with Python, OCR, and web technologies',
    },
    {
      icon: Cpu,
      title: 'Control Systems',
      description: 'MSc in Control Systems with hands-on experience in industrial automation',
    },
    {
      icon: Award,
      title: 'Project Delivery',
      description: 'Successfully delivered automation and data extraction projects across various sectors',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-slate-800/50">
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
            About{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image and About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            {/* Profile Image */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-8">
              {/* Gradient border ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 p-1 shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full rounded-2xl bg-slate-900 p-1">
                  <img 
                    src="/uploads/1758361868672.jfif" 
                    alt="Muhammad Shaoor Nadeem"
                    className="w-full h-full rounded-xl object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {loading ? (
                  <span className="animate-pulse">Loading...</span>
                ) : profile?.about ? (
                  profile.about
                ) : (
                  <>I am a SAP S/4HANA Consultant and Automation Developer with a unique blend of enterprise software knowledge and technical programming skills. With a strong foundation in Electrical Engineering and a Master's degree in Control Systems, I bring a multidisciplinary approach to solving business challenges.</>
                )}
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                My expertise spans across SAP modules including Materials Management (MM), Production Planning (PP), and Document Management System (DMS), combined with modern automation technologies like Python, OCR, and web development. This combination allows me to bridge the gap between enterprise systems and practical automation solutions.
              </p>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 bg-slate-900/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}