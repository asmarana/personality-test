import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const NoAnswerComponent = () => {
  const router = useRouter();
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
            No Answers Found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-300"
          >
            It seems you haven&apos;t completed the test. Please try again.
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center"
        >
          <button onClick={() => router.push('/')} className="frost-button">
            Take Test Again
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NoAnswerComponent;
