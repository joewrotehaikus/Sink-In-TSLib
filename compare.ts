export function compare(correct: string | string[], answer: string): boolean {
  if (Array.isArray(correct)) {
    return correct.includes(answer);
  }
  return correct === answer;
}
