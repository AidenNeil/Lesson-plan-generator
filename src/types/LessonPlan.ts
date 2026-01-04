export interface LessonPlanData {
  teacher: string;
  numberOfStudents: string;
  date: string;
  subject: string;
  gradeLevel: string;
  materials: string;
  technology: string;
  curriculum: string;
  lessonAims: string;
  lessonObjectives: string;
  differentiation: string;
  engagement: string;
  exploration: string;
  explanation: string;
  elaboration: string;
  evaluation: string;
  reflection: string;
  outputFormat: 'word' | 'pdf';
}
