'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '@/data/portfolio-data';
import Image from 'next/image';
import { FiMapPin, FiMail, FiPhone, FiDownload } from 'react-icons/fi';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="section bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl transform rotate-6 opacity-20"></div>
                
                {/* Image Container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                  <Image
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating Stats */}
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border-2 border-cyan-500"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text"></div>
                    <div className="text-sm text-gray-600 dark:text-gray-400"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  {personalInfo.name}
                </h3>
                <p className="text-xl text-cyan-500 font-semibold mb-6">
                  {personalInfo.title}
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {personalInfo.bio.long}
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                  <FiMapPin className="w-5 h-5 text-cyan-500" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                  <FiMail className="w-5 h-5 text-cyan-500" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-500 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                  <FiPhone className="w-5 h-5 text-cyan-500" />
                  <span>{personalInfo.phone}</span>
                </div>
              </div>

              {/* Download Resume Button */}
              <motion.a
                href={personalInfo.resume}
                download
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.a>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold gradient-text"></div>
                  <div className="text-sm text-gray-600 dark:text-gray-400"></div>
                </div>
                <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold gradient-text"></div>
                  <div className="text-sm text-gray-600 dark:text-gray-400"></div>
                </div>
                <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold gradient-text"></div>
                  <div className="text-sm text-gray-600 dark:text-gray-400"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

