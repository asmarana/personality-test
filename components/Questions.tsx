'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { QuestionsProps } from '@/types';

const Questions: React.FC<QuestionsProps> = ({
  question,
  questionIndex,
  totalQuestions,
  existingAnswers = '',
}) => {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const handleOptionClick = async (value: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSelectedValue(value);

    const updatedAnswers = existingAnswers
      ? `${existingAnswers},${value}`
      : String(value);

    await new Promise((resolve) => setTimeout(resolve, 600));

    const nextIndex = questionIndex + 1;
    if (nextIndex < totalQuestions) {
      router.push(`/test/${nextIndex}?answers=${updatedAnswers}`);
    } else {
      router.push(`/test/finish?answers=${updatedAnswers}`);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-night to-secondary-night" />
        <div className="absolute inset-0 stripe-pattern" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-blue rounded-full mix-blend-multiply filter blur-[128px] animate-pulse-slow opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-ice rounded-full mix-blend-multiply filter blur-[128px] animate-float opacity-20" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative z-10 frost-card p-8 max-w-2xl w-full"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-secondary-space">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-blue to-primary-ice"
            initial={{ width: '0%' }}
            animate={{
              width: `${((questionIndex + 1) / totalQuestions) * 100}%`,
            }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="space-y-8 pt-4"
        >
          <div className="text-center space-y-4">
            <motion.h2
              className="text-xl text-primary-ice mb-2"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            >
              Question {questionIndex + 1} of {totalQuestions}
            </motion.h2>
            <motion.p
              className="text-2xl font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {question.question}
            </motion.p>
          </div>

          <div className="space-y-4">
            <AnimatePresence mode="wait">
              {question.options.map((option, index) => (
                <motion.button
                  key={option.text}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleOptionClick(option.value)}
                  className={`group relative w-full p-4 rounded-lg border transition-all duration-300
                    ${
                      selectedValue === option.value
                        ? 'border-primary-ice bg-primary-blue/10'
                        : 'border-secondary-space hover:border-primary-blue'
                    }`}
                  disabled={isTransitioning}
                >
                  <div className="absolute inset-0 w-0 bg-gradient-to-r from-primary-blue/10 to-primary-ice/10 group-hover:w-full transition-all duration-300 rounded-lg" />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-white">{option.text}</span>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{
                        scale: selectedValue === option.value ? 1 : 0,
                      }}
                      className="w-2 h-2 rounded-full bg-primary-ice"
                    />
                  </div>

                  {selectedValue === option.value && (
                    <motion.div
                      layoutId="highlight"
                      className="absolute inset-0 border-2 border-primary-ice rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Questions;
