'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import FeatureCard from './FeaturesCard';
import { personalityFeatures } from '@/data';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-night to-[#141829]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(0,212,255,0.03)_1.5px,transparent_1.5px)] bg-[size:60px_60px] [transform:perspective(500px)_rotateX(35deg)]" />
      </div>
      <div className="relative h-full max-w-7xl mx-auto px-4 py-30 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 relative">
            <span className="frost-text relative z-10">
              Discover Your True Self
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Through advanced psychological analysis, understand whether you
            align more with introverted or extroverted personality traits.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <FeatureCard
            title="Introvert"
            features={personalityFeatures.introvert}
            gradient={{
              from: 'primary-blue',
              to: 'primary-ice',
              delay: 0.2,
              direction: 'left',
            }}
          />
          <FeatureCard
            title="Extrovert"
            features={personalityFeatures.extrovert}
            gradient={{
              from: 'primary-blue',
              to: 'primary-ice',
              delay: 0.4,
              direction: 'right',
            }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link href="/test/0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className="absolute -inset-1  rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200" />
              <span className="relative frost-button inline-block">
                Start Personality Test
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
