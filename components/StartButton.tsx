'use client';

import { useRouter } from 'next/navigation';

export default function StartButton() {
  const router = useRouter();

  const handleStartTest = () => {
    router.push('/test/0');
  };

  return (
    <button
      onClick={handleStartTest}
      className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
    >
      Start the Test
    </button>
  );
}
