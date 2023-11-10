import { AssignmentScores, CourseScores } from '../models/input';
import { AssignmentScoreMetrics, StudentScoreMetrics } from '../models/output';
import { calculateMax, calculateMean, calculateMedian, calculateMin } from './statistics';

const processAssignments = (assignments: AssignmentScores[]): AssignmentScoreMetrics[] =>
  assignments.map(assignment => {
    const scores = assignment.studentScores.map(s => s.score);
    return {
      assignmentName: assignment.assignmentName,
      maxScore: calculateMax(scores),
      minScore: calculateMin(scores),
      meanScore: calculateMean(scores),
      medianScore: calculateMedian(scores),
    };
  });

const calculateStudentMetrics = (input: CourseScores): Map<string, StudentScoreMetrics> => {
  const studentMetrics = new Map<string, StudentScoreMetrics>();

  input.assignmentScores.forEach(assignment => {
    assignment.studentScores.forEach(studentScore => {
      let studentMetric = studentMetrics.get(studentScore.studentName);
      if (!studentMetric) {
        studentMetric = {
          studentName: studentScore.studentName,
          totalScore: 0,
          weightedPercentage: 0,
        };
        studentMetrics.set(studentScore.studentName, studentMetric);
      }
      studentMetric.totalScore += studentScore.score;
      studentMetric.weightedPercentage += (studentScore.score / assignment.maxPossibleScore) * assignment.weightInPercent;
    });
  });

  return studentMetrics;
};

const sortStudentMetrics = (studentMetrics: Map<string, StudentScoreMetrics>): StudentScoreMetrics[] =>
  Array.from(studentMetrics.values()).sort((a, b) => b.weightedPercentage - a.weightedPercentage);

const calculateCourseMetrics = (studentMetrics: StudentScoreMetrics[]): {
  maxWeightedPercentage: number,
  minWeightedPercentage: number,
  meanWeightedPercentage: number,
  medianWeightedPercentage: number
} => {
  const weightedPercentages = studentMetrics.map(s => s.weightedPercentage);
  return {
    maxWeightedPercentage: calculateMax(weightedPercentages),
    minWeightedPercentage: calculateMin(weightedPercentages),
    meanWeightedPercentage: calculateMean(weightedPercentages),
    medianWeightedPercentage: calculateMedian(weightedPercentages),
  };
};

const calculatePerAssignmentMedianWeightedPercentage = (input: CourseScores): number =>
  input.assignmentScores
    .map(assignment => {
      const scores = assignment.studentScores.map(s => s.score);
      const medianScore = calculateMedian(scores);
      return (medianScore / assignment.maxPossibleScore) * assignment.weightInPercent;
    })
    .reduce((acc, curr) => acc + curr, 0);

export {
  processAssignments,
  calculateStudentMetrics,
  sortStudentMetrics,
  calculateCourseMetrics,
  calculatePerAssignmentMedianWeightedPercentage,
}
