import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Target, Users } from 'lucide-react';
import Card from '../components/Card';
import { fadeInUp, staggerContainer } from '../utils/motion';

const About = () => {
  const values = [
    { icon: Heart, title: 'Passion', desc: 'We are passionate about helping you achieve your fitness goals' },
    { icon: Target, title: 'Excellence', desc: 'We strive for excellence in everything we do' },
    { icon: Users, title: 'Community', desc: 'Building a supportive fitness community' },
    { icon: Award, title: 'Results', desc: 'Committed to delivering real, measurable results' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 font-heading"
              variants={fadeInUp}
            >
              About FitZone
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl opacity-90 font-body"
              variants={fadeInUp}
            >
              Empowering individuals to reach their fitness potential since 2015
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-heading">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 font-body">
                Founded in 2015, FitZone began with a simple mission: to create a welcoming space where everyone could pursue their fitness goals. What started as a small local gym has grown into a premier fitness destination.
              </p>
              <p className="text-lg text-gray-600 mb-6 font-body">
                We believe fitness is not just about physical transformation, but about building confidence, discipline, and a healthy lifestyle that extends beyond the gym walls.
              </p>
              <p className="text-lg text-gray-600 font-body">
                Today, we're proud to serve over 2,000 members with state-of-the-art equipment, expert trainers, and a supportive community that motivates each other to achieve greatness.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-2">2000+</div>
                  <div className="text-xl text-gray-700 font-body">Happy Members</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-heading"
              variants={fadeInUp}
            >
              Our Values
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 font-body"
              variants={fadeInUp}
            >
              The principles that guide everything we do
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center p-8 h-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 font-heading">{value.title}</h3>
                  <p className="text-gray-600 font-body">{value.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-8 font-heading"
              variants={fadeInUp}
            >
              Our Mission
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed font-body"
              variants={fadeInUp}
            >
              To inspire and empower individuals to live healthier, stronger lives through innovative fitness solutions, expert guidance, and an inclusive community that celebrates every victory, no matter how small.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;