import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Dumbbell, Users, Trophy, Clock } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import { fadeInUp, staggerContainer } from '../utils/motion';

const Home = () => {
  const features = [
    { icon: Dumbbell, title: 'Modern Equipment', desc: 'State-of-the-art fitness equipment' },
    { icon: Users, title: 'Expert Trainers', desc: 'Certified personal trainers' },
    { icon: Trophy, title: 'Proven Results', desc: 'Track record of success' },
    { icon: Clock, title: '24/7 Access', desc: 'Train anytime that suits you' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.div 
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 font-heading"
            variants={fadeInUp}
          >
            Transform Your
            <span className="block text-secondary">Body & Mind</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 font-body opacity-90"
            variants={fadeInUp}
          >
            Join FitZone and discover your strongest self with our world-class facilities and expert guidance.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              View Membership Plans
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
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
              Why Choose FitZone?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 font-body"
              variants={fadeInUp}
            >
              Experience the difference with our premium facilities and services
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center p-8 h-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 font-heading">{feature.title}</h3>
                  <p className="text-gray-600 font-body">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 font-heading"
              variants={fadeInUp}
            >
              Ready to Start Your Fitness Journey?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 opacity-90 font-body"
              variants={fadeInUp}
            >
              Join thousands of members who have transformed their lives at FitZone
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;