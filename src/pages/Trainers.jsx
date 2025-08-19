import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Users, Star } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { fadeInUp, staggerContainer } from '../utils/motion';

const Trainers = () => {
  const trainers = [
    {
      name: 'Sarah Johnson',
      specialty: 'Strength Training & Nutrition',
      experience: '8 years',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop&crop=face',
      bio: 'Certified strength coach specializing in powerlifting and body composition.',
      certifications: ['NASM-CPT', 'Precision Nutrition']
    },
    {
      name: 'Mike Chen',
      specialty: 'HIIT & Functional Training',
      experience: '6 years',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=face',
      bio: 'Former athlete turned trainer, expert in high-intensity workouts.',
      certifications: ['ACSM-CPT', 'TRX Certified']
    },
    {
      name: 'Emma Rodriguez',
      specialty: 'Yoga & Pilates',
      experience: '10 years',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
      bio: 'Mindful movement specialist focusing on flexibility and core strength.',
      certifications: ['RYT-500', 'Pilates Method Alliance']
    },
    {
      name: 'David Thompson',
      specialty: 'Bodybuilding & Physique',
      experience: '12 years',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Competition prep coach with expertise in muscle building and cutting.',
      certifications: ['IFBB Pro Card', 'NSCA-CSCS']
    },
    {
      name: 'Lisa Park',
      specialty: 'Weight Loss & Cardio',
      experience: '7 years',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Transformation specialist helping clients achieve sustainable weight loss.',
      certifications: ['ACE-CPT', 'Behavioral Change Specialist']
    },
    {
      name: 'Alex Martinez',
      specialty: 'Sports Performance',
      experience: '9 years',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Athletic performance coach working with professional and amateur athletes.',
      certifications: ['CSCS', 'FMS Level 2']
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
              Meet Our Trainers
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl opacity-90 font-body"
              variants={fadeInUp}
            >
              Expert guidance from certified fitness professionals
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {trainers.map((trainer, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                      <img 
                        src={trainer.image} 
                        alt={trainer.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 font-heading">{trainer.name}</h3>
                    <p className="text-primary font-medium mb-2 font-body">{trainer.specialty}</p>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {trainer.experience}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-500" />
                        {trainer.rating}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 font-body">{trainer.bio}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 font-heading">Certifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.certifications.map((cert, idx) => (
                        <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-body">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    Book Session
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
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
              Why Our Trainers Excel
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 font-body"
              variants={fadeInUp}
            >
              Proven track record of helping clients achieve their goals
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="text-center p-8">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-lg text-gray-600 font-body">Certifications</div>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="text-center p-8">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-lg text-gray-600 font-body">Clients Trained</div>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="text-center p-8">
                <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">4.9</div>
                <div className="text-lg text-gray-600 font-body">Average Rating</div>
              </Card>
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
              Ready to Work with a Pro?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 opacity-90 font-body"
              variants={fadeInUp}
            >
              Book your first personal training session and start your transformation
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Schedule Consultation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Trainers;