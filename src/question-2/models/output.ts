export interface CourseScoreMetrics {
  /**
   * Name of the course.
   */
  courseName: string;

  /**
   * List of assignments in the course, with metrics of students' performances.
   */
  assignments: AssignmentScoreMetrics[];

  /**
   * List of students in the course, with metrics of students' individual performance.
   * Sorted by the students' weightedPercentage, from highest to lowest.
   */
  sortedStudentScores: StudentScoreMetrics[];

  /**
   * Highest weighted percentage achieved by a student for the course.
   * Should be the highest calculated `students.weightedPercentage`.
   */
  maxWeightedPercentage: number;

  /**
   * Lowest weighted percentage achieved by a student for the course.
   * Should be the lowest calculated `students.weightedPercentage`.
   */
  minWeightedPercentage: number;

  /**
   * Mean weighted percentage achieved by a student for the course.
   * Should be the sum of all calculated `students.weightedPercentage` divided by the number of students (i.e. average).
   */
  meanWeightedPercentage: number;

  /**
   * Median weighted percentage achieved by a student for the course.
   * Should be the middle `students.weightedPercentage` when ordered from lowest to highest.
   */
  medianWeightedPercentage: number;

  /**
   * Median per course weighted percentage achieved by any student for the course.
   * Should be the sum of each assignment's ((median score / max possible score) * weight).
   */
  perAssignmentMedianWeightedPercentage: number;
}

export interface AssignmentScoreMetrics {
  /**
   * Name of the assignment.
   */
  assignmentName: string;

  /**
   * Highest score achieved by a student for the assignment.
   */
  maxScore: number;

  /**
   * Lowest score achieved by a student for the assignment.
   */
  minScore: number;

  /**
   * Mean score achieved by a student for the assignment.
   * Should be the sum of all students' assignment scores divided by the number of students (i.e. average).
   */
  meanScore: number;

  /**
   * Median score achieved by a student for the assignment.
   * Should be the middle `score` when ordered from lowest to highest.
   */
  medianScore: number;
}

export interface StudentScoreMetrics {
  /**
   * Name of the student.
   */
  studentName: string;

  /**
   * Total score achieved by the student over all of the assignments.
   */
  totalScore: number;

  /**
   * Weighted percentage achieved by the student for the course.
   * Should be the sum of ((student assignment score / assignment max possible score) * assignment weight).
   */
  weightedPercentage: number;
}
