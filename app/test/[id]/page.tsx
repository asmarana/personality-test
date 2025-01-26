import { PageProps } from '@/types';
import { API_URL } from '@/constants';
import Questions from '@/components/Questions';
import QuestionValidation from '@/components/QuestionValidation';

const fetchQuestions = async () => {
  try {
    const res = await fetch(API_URL, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch questions');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    return [];
  }
};

export default async function Page({ params, searchParams }: PageProps) {
  const { id } = await params;
  const { answers } = await searchParams;

  const allQuestions = await fetchQuestions();

  if (!allQuestions.length) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <p className="text-lg text-gray-300">
          There was an error loading the questions. Please try again later.
        </p>
      </div>
    );
  }

  const questionIndex = parseInt(id, 10);

  if (
    isNaN(questionIndex) ||
    questionIndex < 0 ||
    questionIndex >= allQuestions.length
  ) {
    return (
      <QuestionValidation
        questionIndex={questionIndex}
        allQuestions={allQuestions}
      />
    );
  }

  const question = allQuestions[questionIndex];
  const existingAnswers = typeof answers === 'string' ? answers : '';

  return (
    <Questions
      question={question}
      questionIndex={questionIndex}
      totalQuestions={allQuestions.length}
      existingAnswers={existingAnswers}
    />
  );
}
