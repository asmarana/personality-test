const API_URL =
  typeof window !== 'undefined' && window.location.hostname === 'localhost'
    ? 'http://localhost:3000/api/questions'
    : `${process.env.NEXT_PUBLIC_API_URL}/api/questions`;

export { API_URL };
