import { CourseScores } from './models/input';
import { CourseScoreMetrics } from './models/output';

export function getCourseScoreMetrics(input: CourseScores): CourseScoreMetrics {
  // TODO: Implement and replace the return object
  return {
    courseName: 'Foo Course',
    assignments: [
      { assignmentName: 'Assignment 1', maxScore: 0, minScore: 0, meanScore: 0, medianScore: 0 },
      { assignmentName: 'Assignment 2', maxScore: 0, minScore: 0, meanScore: 0, medianScore: 0 },
    ],
    sortedStudentScores: [
      { studentName: 'Student 1', totalScore: 0, weightedPercentage: 0 },
      { studentName: 'Student 2', totalScore: 0, weightedPercentage: 0 },
    ],
    maxWeightedPercentage: 0,
    minWeightedPercentage: 0,
    meanWeightedPercentage: 0,
    medianWeightedPercentage: 0,
    perAssignmentMedianWeightedPercentage: 0,
  };
}
