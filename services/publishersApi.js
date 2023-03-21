const { NEXT_PUBLIC_API_KEY, NEXT_PUBLIC_API_URL } = process.env;
const headers = {
  "X-Api-Key": NEXT_PUBLIC_API_KEY,
};
export const publishersApi = async () => {
  const response = await fetch(
    `${NEXT_PUBLIC_API_URL}top-headlines/sources?country=us`,
    {
      headers,
    }
  );
  const data = await response.json();
  return data;
};
