export function parseGoTime(str: Date): string | null {
  const date = new Date(str);

  if (isNaN(date.getTime())) {
    console.log("Failed to parse date");
    return null;
  }

  return date.toISOString().slice(0, 10);
}
