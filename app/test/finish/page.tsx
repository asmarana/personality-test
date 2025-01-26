'use client';

import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import NoAnswerComponent from '@/components/NoAnswerComponent';

function FinishPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const answersParam = searchParams.get('answers') || '';

  const answers = (answersParam && answersParam?.split(',').map(Number)) || [];

  if (answers.length === 0) {
    return <NoAnswerComponent />;
  }

  const totalScore = answers.reduce((acc, curr) => acc + curr, 0);
  const maxScore = answers.length * 2;
  const isExtrovert = totalScore > maxScore / 2;

  const personalityType = isExtrovert ? 'Extrovert' : 'Introvert';
  const description = isExtrovert
    ? "You thrive in social situations and gain energy from being around others. You're outgoing, expressive, and enjoy being the center of attention."
    : "You prefer meaningful one-on-one conversations and need time alone to recharge. You're thoughtful, observant, and value deep connections.";

  const shareResult = () => {
    const text = `I just discovered I'm a ${
      personalityType === 'Extrovert' ? 'Extrovert' : 'Introvert'
    } in the personality test! 🌟`;

    if (navigator.share) {
      navigator.share({
        title: 'My Personality',
        text: text,
        url: window.location.href,
      }).catch((error) => {
        if (error.name === 'AbortError') {
          return;
        }
        console.error('Error sharing:', error);
      });
    } else {
      navigator.clipboard.writeText(text)
        .then(() => {
          alert('Result copied to clipboard!');
        })
        .catch((error) => {
          console.error('Failed to copy:', error);
          alert('Failed to copy result to clipboard');
        });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="frost-card p-10 max-w-2xl w-full space-y-8"
      >
        <div className="text-center space-y-6">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl font-bold frost-text"
          >
            Analysis Complete
          </motion.h1>

          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl font-extrabold my-6 frost-text"
          >
            {personalityType}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-300"
          >
            {description}
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          <button onClick={() => router.push('/')} className="frost-button">
            Take Test Again
          </button>
          <button
            onClick={shareResult}
            className="px-6 py-3 border border-[var(--ice-highlight)] rounded-lg 
          hover:bg-[var(--card-bg)] transition-colors"
          >
            Share Result
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
export default function FinishPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FinishPageContent />
    </Suspense>
  );
}
