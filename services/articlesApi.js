const { NEXT_PUBLIC_API_KEY, NEXT_PUBLIC_API_URL } = process.env;
const headers = {
  "X-Api-Key": NEXT_PUBLIC_API_KEY,
};
export const articlesApi = async (publisher) => {
  const getTypeUrl =
    publisher === "headlines"
      ? `top-headlines?country=us&pageSize=10`
      : `top-headlines?sources=${publisher}&pageSize=10`;
  const response = await fetch(NEXT_PUBLIC_API_URL + getTypeUrl, {
    headers,
  });
  const data = await response.json();
  return data;
};
