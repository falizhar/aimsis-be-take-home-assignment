const calculateMax = (scores: number[]): number => Math.max(...scores);

const calculateMin = (scores: number[]): number => Math.min(...scores);

const calculateMean = (scores: number[]): number =>
  scores.reduce((acc, score) => acc + score, 0) / scores.length;

const calculateMedian = (scores: number[]): number => {
  const sortedScores = scores.slice().sort((a, b) => a - b);
  const mid = Math.floor(sortedScores.length / 2);
  return sortedScores.length % 2 !== 0
    ? sortedScores[mid]
    : (sortedScores[mid - 1] + sortedScores[mid]) / 2;
};

export {
  calculateMax,
  calculateMin,
  calculateMean,
  calculateMedian,
}
