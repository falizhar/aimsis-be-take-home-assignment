import { CourseScores } from './models/input';
import { CourseScoreMetrics } from './models/output';
import {
  calculateCourseMetrics,
  calculatePerAssignmentMedianWeightedPercentage,
  calculateStudentMetrics,
  processAssignments,
  sortStudentMetrics
} from "./utils/courseMetricsUtils";

export function getCourseScoreMetrics(input: CourseScores): CourseScoreMetrics {
  const { courseName, assignmentScores } = input;

  const assignments = processAssignments(assignmentScores);
  const studentMetricsMap = calculateStudentMetrics(input);
  const sortedStudentScores = sortStudentMetrics(studentMetricsMap);

  const { maxWeightedPercentage, minWeightedPercentage, meanWeightedPercentage, medianWeightedPercentage } = calculateCourseMetrics(sortedStudentScores);
  const perAssignmentMedianWeightedPercentage = calculatePerAssignmentMedianWeightedPercentage(input);

  return {
    courseName,
    assignments,
    sortedStudentScores,
    maxWeightedPercentage,
    minWeightedPercentage,
    meanWeightedPercentage,
    medianWeightedPercentage,
    perAssignmentMedianWeightedPercentage,
  };
}
