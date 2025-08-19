import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Crown, Zap } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { fadeIn, staggerContainer } from '../utils/motion';

const Membership = () => {
  const plans = [
    {
      name: 'Basic',
      price: 29,
      icon: <Star className="h-8 w-8" />,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      features: [
        'Access to gym equipment',
        'Locker room access',
        'Basic fitness assessment',
        'Mobile app access',
        '24/7 gym access'
      ]
    },
    {
      name: 'Premium',
      price: 59,
      icon: <Crown className="h-8 w-8" />,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      popular: true,
      features: [
        'Everything in Basic',
        'Group fitness classes',
        'Personal trainer consultation',
        'Nutrition guidance',
        'Priority booking',
        'Guest passes (2/month)'
      ]
    },
    {
      name: 'Elite',
      price: 99,
      icon: <Zap className="h-8 w-8" />,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      features: [
        'Everything in Premium',
        'Unlimited personal training',
        'Massage therapy sessions',
        'VIP locker room',
        'Unlimited guest passes',
        'Meal planning service',
        'Recovery suite access'
      ]
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
            Choose Your <span className="text-orange-500">Membership</span>
          </motion.h1>
          <motion.p
            variants={fadeIn('up', 0.1)}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Select the perfect plan that fits your fitness goals and lifestyle. All memberships include access to our state-of-the-art facilities.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.2, 0.3)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={fadeIn('up', index * 0.1)}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <Card className={`h-full ${plan.popular ? 'border-2 border-orange-500 shadow-xl' : ''}`}>
                <div className={`${plan.bgColor} ${plan.borderColor} border rounded-lg p-4 mb-6`}>
                  <div className={`${plan.color} mb-2`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? 'primary' : 'outline'} 
                  className="w-full"
                  size="lg"
                >
                  Choose {plan.name}
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          animate="show"
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose FitZone?
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of satisfied members who have transformed their lives with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Trainers</h3>
              <p className="text-gray-600">Certified professionals to guide your fitness journey</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Crown className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Equipment</h3>
              <p className="text-gray-600">State-of-the-art machines and facilities</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Hours</h3>
              <p className="text-gray-600">24/7 access to fit your busy schedule</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Membership;