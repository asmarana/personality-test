import { PageProps } from '@/types';
import { API_URL } from '@/constants';
import Questions from '@/components/Questions';
import QuestionValidation from '@/components/QuestionValidation';

const fetchQuestions = async () => {
  const res = await fetch(API_URL, {
    cache: 'no-store',
  });
  const data = await res.json();
  return data;
};

export default async function Page({ params, searchParams }: PageProps) {
  const { id } = await params;
  const { answers } = await searchParams;
  const allQuestions = await fetchQuestions();

  const questionIndex = parseInt(id, 10);

  const validationError = (
    <QuestionValidation
      questionIndex={questionIndex}
      allQuestions={allQuestions}
    />
  );

  if (validationError) {
    return validationError;
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
