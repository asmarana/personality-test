'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function FinishPage() {
  const searchParams = useSearchParams();
  const answersParam = searchParams.get('answers') || '';
  const [personality, setPersonality] = useState<string | null>(null);

  useEffect(() => {
    if (answersParam) {
      const scores = answersParam.split(',').map((x) => parseInt(x, 10));
      const sum = scores.reduce((acc, cur) => acc + cur, 0);
      const result = sum >= 8 ? 'Extrovert' : 'Introvert';
      setPersonality(result);
    }
  }, [answersParam]);

  if (!personality) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <p className="text-lg font-medium">Calculating your results...</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="max-w-lg text-center p-6  rounded shadow">
        <h1 className="text-3xl font-bold mb-4">Your Personality Type</h1>
        <div className="rounded-full border border-solid px-4 py-3 text-sm sm:text-base mb-6">
          <p className="text-xl  text-yellow-400 font-semibold">
            {personality}
          </p>
        </div>
        {personality === 'Extrovert' ? (
          <p>You love being around people and thrive in social settings.</p>
        ) : (
          <p>
            You value your alone time and prefer calmer, quieter environments.
          </p>
        )}
      </div>
    </main>
  );
}
