export type DiffPart = {
  text: string;
  type: "equal" | "added" | "removed";
};

function tokenizeByWords(input: string): string[] {
  const tokens = input.match(/\w+|[^\w\s]+|\s+/g);
  return tokens ?? [];
}

export function computeWordDiff(left: string, right: string): DiffPart[] {
  const a = tokenizeByWords(left);
  const b = tokenizeByWords(right);

  const n = a.length;
  const m = b.length;

  const dp: number[][] = Array.from({ length: n + 1 }, () =>
    Array(m + 1).fill(0)
  );

  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      if (a[i] === b[j]) {
        dp[i][j] = dp[i + 1][j + 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }

  const parts: DiffPart[] = [];
  let i = 0,
    j = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) {
      parts.push({ text: a[i], type: "equal" });
      i++;
      j++;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      parts.push({ text: a[i], type: "removed" });
      i++;
    } else {
      parts.push({ text: b[j], type: "added" });
      j++;
    }
  }
  while (i < n) {
    parts.push({ text: a[i++], type: "removed" });
  }
  while (j < m) {
    parts.push({ text: b[j++], type: "added" });
  }

  return parts;
}
