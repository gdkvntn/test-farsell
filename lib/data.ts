export const getData = async <T>(path: string): Promise<T> => {
  const response = await fetch("https://catfact.ninja" + path);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: T = await response.json();
  return data;
};
