interface IFeature {
  title: string;
  description: string;
}

interface GradientProps {
  from: string;
  to: string;
  delay: number;
  direction: 'left' | 'right';
}

interface FeatureCardProps {
  title: string;
  features: IFeature[];
  gradient: GradientProps;
}

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

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ answers: string }>;
}


export type {
  IFeature,
  GradientProps,
  FeatureCardProps,
  Question,
  QuestionOption,
  QuestionsProps,
  PageProps,
};
