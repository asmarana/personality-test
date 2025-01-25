import { NextResponse } from 'next/server';

export async function GET() {
  const questions = [
    {
      id: 1,
      question:
        'How do you usually feel after attending a large social gathering?',
      options: [
        { text: 'Completely exhausted', value: 1 },
        { text: 'Energized and excited', value: 5 },
        { text: 'Somewhat tired but good', value: 3 },
      ],
    },
    {
      id: 2,
      question: 'When solving problems, do you prefer to:',
      options: [
        { text: 'Discuss with others', value: 5 },
        { text: 'Think it through alone', value: 1 },
        { text: 'Mix of both', value: 3 },
      ],
    },
    {
      id: 3,
      question: 'How do you prefer to spend your free time?',
      options: [
        { text: 'With friends or family', value: 1 },
        { text: 'Alone with your hobbies', value: 5 },
        { text: 'A balance of both', value: 3 },
      ],
    },
  ];

  return NextResponse.json(questions);
}
