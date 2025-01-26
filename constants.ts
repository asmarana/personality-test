const API_URL =
  typeof window !== 'undefined'
    ? `${window.location.origin}/api/questions`
    : 'http://localhost:3000/api/questions';

export { API_URL };
