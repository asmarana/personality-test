'use client';

import { motion } from 'framer-motion';
import { FeatureCardProps } from '@/types';

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  features,
  gradient,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: gradient.direction === 'left' ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: gradient.delay }}
      className="group relative"
    >
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r from-${gradient.from} to-${gradient.to} rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-200`}
      />
      <div className="relative frost-card p-8 hover:bg-secondary-night/80 transition-colors overflow-hidden">
        <div
          className={`absolute right-4 top-4 w-20 h-20 bg-${gradient.from} rounded-full mix-blend-multiply filter blur-[32px] opacity-40`}
        />
        <h3 className="text-2xl font-bold mb-6 frost-text relative z-10">
          {title}
        </h3>
        <div className="space-y-4 relative z-10">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{ x: 4 }}
              className="p-4 rounded-lg bg-[#ffffff08] hover:bg-[#ffffff12] transition-all border border-[#ffffff1a] hover:border-primary-blue/40 relative overflow-hidden group/card"
            >
              <h4 className="text-white font-semibold mb-1 flex items-center gap-2">
                {feature.title}
              </h4>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
