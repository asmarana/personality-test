import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';
import { ConfettiProps, WindowSize } from '@/types';

const ConfettiComponent: React.FC<ConfettiProps> = ({ showConfetti }) => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!showConfetti) return null;

  return (
    <Confetti
      width={windowSize.width}
      height={windowSize.height}
      recycle={false}
      numberOfPieces={150}
      colors={[
        'var(--lightning-blue)',
        'var(--ice-highlight)',
        'var(--frost-accent)',
      ]}
    />
  );
};

export default ConfettiComponent;
