import { getCourseScoreMetrics } from '..';
import { CourseScores } from '../models/input';
import { CourseScoreMetrics } from '../models/output';

describe('Question 2', () => {
  it('Should calculate course score metrics from raw course scores', () => {
    const input: CourseScores = {
      courseName: 'Defense Against the Dark Arts',
      assignmentScores: [
        {
          assignmentName: 'Verdimillious Charm',
          maxPossibleScore: 10,
          weightInPercent: 20,
          studentScores: [
            { studentName: 'Harry Potter', score: 9 },
            { studentName: 'Hermione Granger', score: 10 },
            { studentName: 'Ron Weasley', score: 6 },
            { studentName: 'Ginny Weasley', score: 8 },
            { studentName: 'Draco Malfoy', score: 4 },
          ],
        },
        {
          assignmentName: 'Homorphus Charm',
          maxPossibleScore: 10,
          weightInPercent: 30,
          studentScores: [
            { studentName: 'Ginny Weasley', score: 7 },
            { studentName: 'Draco Malfoy', score: 2 },
            { studentName: 'Hermione Granger', score: 9.5 },
            { studentName: 'Ron Weasley', score: 8 },
            { studentName: 'Harry Potter', score: 7 },
          ],
        },
        {
          assignmentName: 'Full Body-Bind Curse',
          maxPossibleScore: 20,
          weightInPercent: 50,
          studentScores: [
            { studentName: 'Ron Weasley', score: 12 },
            { studentName: 'Hermione Granger', score: 19 },
            { studentName: 'Harry Potter', score: 0 },
            { studentName: 'Draco Malfoy', score: 8 },
            { studentName: 'Ginny Weasley', score: 16 },
          ],
        },
      ],
    };

    const expectedOutput: CourseScoreMetrics = {
      courseName: 'Defense Against the Dark Arts',
      assignments: [
        { assignmentName: 'Verdimillious Charm', maxScore: 10, minScore: 4, meanScore: 7.4, medianScore: 8 },
        { assignmentName: 'Homorphus Charm', maxScore: 9.5, minScore: 2, meanScore: 6.7, medianScore: 7 },
        { assignmentName: 'Full Body-Bind Curse', maxScore: 19, minScore: 0, meanScore: 11, medianScore: 12 },
      ],
      sortedStudentScores: [
        { studentName: 'Hermione Granger', totalScore: 38.5, weightedPercentage: 96 },
        { studentName: 'Ginny Weasley', totalScore: 31, weightedPercentage: 77 },
        { studentName: 'Ron Weasley', totalScore: 26, weightedPercentage: 66 },
        { studentName: 'Harry Potter', totalScore: 16, weightedPercentage: 39 },
        { studentName: 'Draco Malfoy', totalScore: 14, weightedPercentage: 34 },
      ],
      maxWeightedPercentage: 96,
      minWeightedPercentage: 34,
      meanWeightedPercentage: 62.4,
      medianWeightedPercentage: 66,
      perAssignmentMedianWeightedPercentage: 67,
    };

    const result = getCourseScoreMetrics(input);

    expect(result).toEqual(expectedOutput);
  });
});
