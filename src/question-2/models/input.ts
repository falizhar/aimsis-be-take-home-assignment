export interface CourseScores {
  /**
   * Name of the course.
   */
  courseName: string;

  /**
   * List of assignments in the course, with scores of every students for each assignment.
   */
  assignmentScores: AssignmentScores[];
}

export interface AssignmentScores {
  /**
   * Name of the assignment.
   */
  assignmentName: string;

  /**
   * Maximum possible score for the assignment.
   */
  maxPossibleScore: number;

  /**
   * Weightage of the assignment scores out of the entire course.
   * All of the weights of every assignment should add up to 100 for the entire course.
   * Valid range: 0 - 100.
   */
  weightInPercent: number;

  /**
   * List of students and their scores for the assignment.
   */
  studentScores: StudentScore[];
}

export interface StudentScore {
  /**
   * Name of the student.
   */
  studentName: string;

  /**
   * Score that the student has achieved for the assignment.
   */
  score: number;
}
