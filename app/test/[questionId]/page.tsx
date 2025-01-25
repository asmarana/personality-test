import Questions from '@/components/Questions';

export default async function TestPage({
  params,
  searchParams,
}: {
  params: { questionId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const res = await fetch(`http://localhost:3000/api/questions`, {
    cache: 'no-store',
  });
  const allQuestions = await res.json();

  const questionIndex = parseInt(params.questionId, 10);
  if (
    isNaN(questionIndex) ||
    questionIndex < 0 ||
    questionIndex >= allQuestions.length
  ) {
    return (
      <div className="flex items-center justify-center min-h-screen p-8 sm:p-20">
        Invalid question index!
      </div>
    );
  }

  const question = allQuestions[questionIndex];

  const existingAnswers =
    typeof searchParams.answers === 'string' ? searchParams.answers : '';

  return (
    <div className="flex items-center justify-center min-h-screen p-8 sm:p-20">
      <Questions
        question={question}
        questionIndex={questionIndex}
        totalQuestions={allQuestions.length}
        existingAnswers={existingAnswers}
      />
    </div>
  );
}
