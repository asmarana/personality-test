const API_URL =
  typeof window !== 'undefined'
    ? `${process.env.NEXT_PUBLIC_API_URL}/api/questions`
    : 'http://localhost:3000/api/questions';

export { API_URL };
