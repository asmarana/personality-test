'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface QuestionOption {
  text: string;
  value: number;
}

interface Question {
  id: number;
  question: string;
  options: QuestionOption[];
}

interface QuestionsProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  existingAnswers?: string;
}

const Questions: React.FC<QuestionsProps> = ({
  question,
  questionIndex,
  totalQuestions,
  existingAnswers = '',
}) => {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedValue === null) {
      alert('Please select an answer!');
      return;
    }

    const updatedAnswers = existingAnswers
      ? `${existingAnswers},${selectedValue}`
      : String(selectedValue);

    const nextIndex = questionIndex + 1;

    if (nextIndex < totalQuestions) {
      router.push(`/test/${nextIndex}?answers=${updatedAnswers}`);
    } else {
      router.push(`/test/finish?answers=${updatedAnswers}`);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 max-w-2xl p-6">
      <h2 className="text-xl font-semibold text-center">
        Question {questionIndex + 1} of {totalQuestions}
      </h2>
      <p className="text-center mb-4">{question.question}</p>
      <div className="flex flex-col gap-3 w-full max-w-md">
        {question.options.map((option) => (
          <button
            key={option.text}
            onClick={() => setSelectedValue(option.value)}
            aria-pressed={selectedValue === option.value}
            className={`rounded-full border border-solid px-4 py-3 text-sm sm:text-base transition-colors ${
              selectedValue === option.value
                ? 'bg-blue-500 text-white border-blue-500'
                : 'border-gray-300 hover:bg-gray-100'
            }`}
          >
            {option.text}
          </button>
        ))}
      </div>
      <button
        onClick={handleNext}
        className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition"
      >
        {questionIndex + 1 < totalQuestions ? 'Next' : 'Finish'}
      </button>
    </div>
  );
};

export default Questions;
