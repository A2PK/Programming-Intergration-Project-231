export function parseGoTime(str: Date): string | null {
  const date = new Date(str);

  if (isNaN(date.getTime())) {
    return null;
  }

  return date.toISOString().slice(0, 10);
}

export function checkGoNull(str: Date): boolean {
  const date = new Date(str);

  if (isNaN(date.getTime()) || String(str) == "0001-01-01T00:00:00Z") {
    return true;
  }

  return false;
}
