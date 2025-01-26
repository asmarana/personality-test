'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className={'fixed top-0 w-full z-50 transition-all duration-300'}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-4">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center">
            <div className="relative">
              <span className="relative text-2xl font-bold frost-text">
                Personality Test
              </span>
            </div>
          </Link>
          <Link href="/test/0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <span
                className="px-6 py-3 border border-[var(--ice-highlight)] rounded-lg 
          hover:bg-[var(--card-bg)] transition-colors"
              >
                Take Test
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
