export function balanceText(text: string, maxLines: number): string {
  if (!maxLines || maxLines < 2) return text;
  const words = text.split(" ");
  const lines: string[] = Array(maxLines).fill("");
  let lineLengths = Array(maxLines).fill(0);

  // Greedy: 각 줄에 단어를 분배 (최소 길이 줄에 추가)
  for (const word of words) {
    // 가장 짧은 줄 찾기
    let minIdx = 0;
    for (let i = 1; i < maxLines; i++) {
      if (lineLengths[i] < lineLengths[minIdx]) minIdx = i;
    }
    lines[minIdx] += (lines[minIdx] ? " " : "") + word;
    lineLengths[minIdx] += word.length + (lines[minIdx] ? 1 : 0);
  }

  return lines.join("\n");
}
