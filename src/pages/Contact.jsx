import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { fadeIn, staggerContainer } from '../utils/motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address',
      details: '123 Fitness Street, Downtown, City 12345'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: '(555) 123-4567'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: 'info@fitzone.com'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Hours',
      details: 'Mon-Sun: 24/7 Access'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate="show"
          className="text-center mb-16"
        >
          <motion.h1
            variants={fadeIn('up', 0)}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Get In <span className="text-orange-500">Touch</span>
          </motion.h1>
          <motion.p
            variants={fadeIn('up', 0.1)}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Ready to start your fitness journey? Contact us today and let's discuss how we can help you achieve your goals.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            animate="show"
          >
            <Card className="h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select a subject</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="training">Personal Training</option>
                      <option value="classes">Group Classes</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell us about your fitness goals or ask us any questions..."
                  ></textarea>
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-orange-100 rounded-lg p-3">
                      <div className="text-orange-500">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-gray-600">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Our Gym</h3>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">123 Fitness Street, Downtown</p>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Response</h3>
              <p className="text-gray-600 mb-4">
                We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
                <Button variant="ghost" size="sm">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Us
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;