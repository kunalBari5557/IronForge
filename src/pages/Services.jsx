import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Heart, Users, Zap, Clock, Target } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { fadeInUp, staggerContainer } from '../utils/motion';

const Services = () => {
  const services = [
    {
      icon: Dumbbell,
      title: 'Strength Training',
      desc: 'Build muscle and increase strength with our comprehensive weight training programs.',
      features: ['Free weights', 'Resistance machines', 'Functional training']
    },
    {
      icon: Heart,
      title: 'Cardio Workouts',
      desc: 'Improve cardiovascular health with our variety of cardio equipment and classes.',
      features: ['Treadmills', 'Ellipticals', 'Rowing machines']
    },
    {
      icon: Users,
      title: 'Group Classes',
      desc: 'Join energizing group fitness classes led by certified instructors.',
      features: ['Yoga', 'Pilates', 'Zumba']
    },
    {
      icon: Target,
      title: 'Personal Training',
      desc: 'Get personalized attention with one-on-one training sessions.',
      features: ['Custom programs', 'Nutrition guidance', 'Progress tracking']
    },
    {
      icon: Zap,
      title: 'HIIT Training',
      desc: 'High-intensity interval training for maximum results in minimum time.',
      features: ['Fat burning', 'Metabolic boost', 'Time efficient']
    },
    {
      icon: Clock,
      title: '24/7 Access',
      desc: 'Train on your schedule with round-the-clock gym access.',
      features: ['Flexible hours', 'Keycard access', 'Security monitored']
    }
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
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl opacity-90 font-body"
              variants={fadeInUp}
            >
              Comprehensive fitness solutions tailored to your goals
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-8 h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 font-heading">{service.title}</h3>
                  <p className="text-gray-600 mb-6 font-body">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 font-body">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
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
              Premium Facilities
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 font-body"
              variants={fadeInUp}
            >
              State-of-the-art equipment and amenities for the ultimate workout experience
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-heading">What Makes Us Different</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 font-heading">Latest Equipment</h4>
                    <p className="text-gray-600 font-body">Top-of-the-line fitness equipment from leading manufacturers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 font-heading">Clean Environment</h4>
                    <p className="text-gray-600 font-body">Maintained to the highest hygiene standards</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 font-heading">Expert Support</h4>
                    <p className="text-gray-600 font-body">Certified trainers available to help you reach your goals</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 h-80 flex items-center justify-center"
            >
              <div className="text-center">
                <Dumbbell className="w-24 h-24 text-primary mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 font-heading">Premium Equipment</h4>
                <p className="text-gray-600 font-body">Professional grade fitness equipment</p>
              </div>
            </motion.div>
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
              Ready to Experience Our Services?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 opacity-90 font-body"
              variants={fadeInUp}
            >
              Book a free consultation and discover which services are right for you
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Book Free Consultation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;