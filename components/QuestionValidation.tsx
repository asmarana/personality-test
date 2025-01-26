import { QuestionsValidationProps } from '@/types';

const QuestionValidation: React.FC<QuestionsValidationProps> = ({
  questionIndex,
  allQuestions,
}) => {
  if (
    isNaN(questionIndex) ||
    questionIndex < 0 ||
    questionIndex >= allQuestions.length
  ) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="frost-card p-8 text-center">
          <h2 className="text-2xl font-bold frost-text mb-4">
            Invalid Question
          </h2>
          <p className="text-gray-300">This question does not exist.</p>
        </div>
      </div>
    );
  }

  return null;
};

export default QuestionValidation;
