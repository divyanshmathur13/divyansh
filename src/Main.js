import React from 'react';
import { motion } from 'framer-motion';

const Main = () => {
  return (
    <motion.div
      className="bg-blue-500 text-white p-4 rounded-lg shadow-lg"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      Hello, Framer Motion with Tailwind CSS!
    </motion.div>
  );
};

export default Main;
