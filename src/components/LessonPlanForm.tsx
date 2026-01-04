import { useState } from 'react';
import { FileText, Sparkles } from 'lucide-react';
import { LessonPlanData } from '../types/LessonPlan';

interface LessonPlanFormProps {
  onGenerate: (data: LessonPlanData) => void;
}

export default function LessonPlanForm({ onGenerate }: LessonPlanFormProps) {
  const [formData, setFormData] = useState<LessonPlanData>({
    teacher: '',
    numberOfStudents: '',
    date: '',
    subject: '',
    gradeLevel: '',
    materials: '',
    technology: '',
    curriculum: '',
    lessonAims: '',
    lessonObjectives: '',
    differentiation: '',
    engagement: '',
    exploration: '',
    explanation: '',
    elaboration: '',
    evaluation: '',
    reflection: '',
    outputFormat: 'pdf',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <FileText className="w-6 h-6 text-green-600" />
          <h2 className="text-2xl font-bold text-gray-900">5E Lesson Plan</h2>
        </div>
        <p className="text-gray-600">Complete the form below to create your lesson plan</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="teacher" className="block text-sm font-semibold text-gray-700 mb-2">
              Teacher
            </label>
            <input
              type="text"
              id="teacher"
              name="teacher"
              value={formData.teacher}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="numberOfStudents" className="block text-sm font-semibold text-gray-700 mb-2">
              Number of Students
            </label>
            <input
              type="text"
              id="numberOfStudents"
              name="numberOfStudents"
              value={formData.numberOfStudents}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
              Date
            </label>
            <input
              type="text"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              placeholder="e.g., Oct 15, 2024"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="gradeLevel" className="block text-sm font-semibold text-gray-700 mb-2">
              Grade Level
            </label>
            <input
              type="text"
              id="gradeLevel"
              name="gradeLevel"
              value={formData.gradeLevel}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="curriculum" className="block text-sm font-semibold text-gray-700 mb-2">
              Curriculum
            </label>
            <input
              type="text"
              id="curriculum"
              name="curriculum"
              value={formData.curriculum}
              onChange={handleChange}
              placeholder="e.g., CSEC English A"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label htmlFor="materials" className="block text-sm font-semibold text-gray-700 mb-2">
            Materials
          </label>
          <textarea
            id="materials"
            name="materials"
            value={formData.materials}
            onChange={handleChange}
            rows={2}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="technology" className="block text-sm font-semibold text-gray-700 mb-2">
            Technology
          </label>
          <textarea
            id="technology"
            name="technology"
            value={formData.technology}
            onChange={handleChange}
            rows={2}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="lessonAims" className="block text-sm font-semibold text-gray-700 mb-2">
            Lesson Aim(s)
          </label>
          <textarea
            id="lessonAims"
            name="lessonAims"
            value={formData.lessonAims}
            onChange={handleChange}
            rows={2}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="lessonObjectives" className="block text-sm font-semibold text-gray-700 mb-2">
            Lesson Objective(s)
          </label>
          <textarea
            id="lessonObjectives"
            name="lessonObjectives"
            value={formData.lessonObjectives}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="differentiation" className="block text-sm font-semibold text-gray-700 mb-2">
            Differentiation Strategies to Meet Diverse Learner Needs
          </label>
          <textarea
            id="differentiation"
            name="differentiation"
            value={formData.differentiation}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">5E Model</h3>

          <div className="space-y-6">
            <div>
              <label htmlFor="engagement" className="block text-sm font-semibold text-gray-700 mb-2">
                ENGAGEMENT
              </label>
              <p className="text-xs text-gray-600 mb-2">
                Describe how the teacher will capture students' interest. What kind of questions should the students ask themselves after the engagement?
              </p>
              <textarea
                id="engagement"
                name="engagement"
                value={formData.engagement}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="exploration" className="block text-sm font-semibold text-gray-700 mb-2">
                EXPLORATION
              </label>
              <p className="text-xs text-gray-600 mb-2">
                Describe what hands-on/minds-on activities students will be doing. List "big idea" conceptual questions the teacher will use to encourage and/or focus students' exploration.
              </p>
              <textarea
                id="exploration"
                name="exploration"
                value={formData.exploration}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="explanation" className="block text-sm font-semibold text-gray-700 mb-2">
                EXPLANATION
              </label>
              <p className="text-xs text-gray-600 mb-2">
                Student explanations should precede introduction of terms or explanations by the teacher. What questions or techniques will the teacher use to help students connect their exploration to the concept under examination? List higher order thinking questions which teachers will use to solicit student explanations and help them to justify their explanations.
              </p>
              <textarea
                id="explanation"
                name="explanation"
                value={formData.explanation}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="elaboration" className="block text-sm font-semibold text-gray-700 mb-2">
                ELABORATION
              </label>
              <p className="text-xs text-gray-600 mb-2">
                Describe how students will develop a more sophisticated understanding of the concept. What vocabulary will be introduced and how will it connect to students' observations? How is this knowledge applied in our daily lives?
              </p>
              <textarea
                id="elaboration"
                name="elaboration"
                value={formData.elaboration}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="evaluation" className="block text-sm font-semibold text-gray-700 mb-2">
                EVALUATION
              </label>
              <p className="text-xs text-gray-600 mb-2">
                How will students demonstrate that they have achieved the lesson objective? This should be embedded throughout the lesson as well as at the end of the lesson.
              </p>
              <textarea
                id="evaluation"
                name="evaluation"
                value={formData.evaluation}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="reflection" className="block text-sm font-semibold text-gray-700 mb-2">
                REFLECTION (Teacher)
              </label>
              <textarea
                id="reflection"
                name="reflection"
                value={formData.reflection}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="outputFormat" className="block text-sm font-semibold text-gray-700 mb-2">
            Output Format
          </label>
          <select
            id="outputFormat"
            name="outputFormat"
            value={formData.outputFormat}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="pdf">PDF</option>
            <option value="word">Word Document</option>
          </select>
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            <Sparkles className="w-5 h-5" />
            Generate Lesson Plan
          </button>
        </div>
      </form>
    </div>
  );
}
