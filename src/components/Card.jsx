import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  padding = 'p-6',
  shadow = 'shadow-md',
  rounded = 'rounded-lg',
  ...props 
}) => {
  const baseStyles = 'bg-white border border-gray-200 transition-all duration-300';
  const hoverStyles = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';
  
  const cardClasses = `
    ${baseStyles}
    ${shadow}
    ${rounded}
    ${padding}
    ${hoverStyles}
    ${className}
  `.trim();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cardClasses}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;