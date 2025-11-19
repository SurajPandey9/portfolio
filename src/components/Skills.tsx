'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '@/data/portfolio-data';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const getBarVariants = (level: number) => ({
    hidden: { width: 0 },
    visible: {
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      },
    },
  });

  return (
    <section id="skills" className="section bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-8"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="max-w-6xl mx-auto space-y-12">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
              >
                {/* Category Title */}
                <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center">
                  <span className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full mr-4"></span>
                  {category.category}
                </h3>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="space-y-2"
                    >
                      {/* Skill Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-cyan-500 font-bold">{skill.level}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          variants={getBarVariants(skill.level)}
                          initial="hidden"
                          animate={inView ? 'visible' : 'hidden'}
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                          style={{
                            boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Highlights */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid md:grid-cols-4 gap-6"
          >
            <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl p-6 text-white text-center">
              <div className="text-4xl font-bold mb-2"></div>
              <div className="text-sm opacity-90"></div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 text-white text-center">
              <div className="text-4xl font-bold mb-2"></div>
              <div className="text-sm opacity-90"></div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-6 text-white text-center">
              <div className="text-4xl font-bold mb-2"></div>
              <div className="text-sm opacity-90"></div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-xl p-6 text-white text-center">
              <div className="text-4xl font-bold mb-2"></div>
              <div className="text-sm opacity-90"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

