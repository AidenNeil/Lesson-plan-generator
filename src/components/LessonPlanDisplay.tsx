import { useRef, useState } from 'react';
import { ArrowLeft, Download, Loader2 } from 'lucide-react';
import { LessonPlanData } from '../types/LessonPlan';
import { exportToPDF, exportToWord } from '../utils/exportUtils';

interface LessonPlanDisplayProps {
  data: LessonPlanData;
  onBack: () => void;
}

export default function LessonPlanDisplay({ data, onBack }: LessonPlanDisplayProps) {
  const [isExporting, setIsExporting] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleExport = async () => {
    if (!contentRef.current) return;

    setIsExporting(true);
    try {
      if (data.outputFormat === 'pdf') {
        await exportToPDF(contentRef.current, '5E_Lesson_Plan');
      } else {
        exportToWord(data);
      }
    } catch (error) {
      console.error('Export error:', error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Form
          </button>
          <button
            onClick={handleExport}
            disabled={isExporting}
            className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-300"
          >
            {isExporting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Exporting...
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                Export as {data.outputFormat.toUpperCase()}
              </>
            )}
          </button>
        </div>
      </div>

      <div
        ref={contentRef}
        className="bg-white rounded-lg shadow-lg p-8 lesson-plan-content"
        style={{ fontFamily: 'Arial, sans-serif' }}
      >
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">5E Lesson Plan</h1>
        </div>

        <table className="w-full border-collapse border border-gray-800 mb-6">
          <tbody>
            <tr>
              <td className="border border-gray-800 p-3 font-bold bg-gray-50 w-1/2">
                Teacher: {data.teacher}
              </td>
              <td className="border border-gray-800 p-3 font-bold bg-gray-50 w-1/2">
                Number of Students: {data.numberOfStudents}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-800 p-3 font-bold bg-gray-50">
                Date: {data.date}
              </td>
              <td className="border border-gray-800 p-3 font-bold bg-gray-50">
                Subject: {data.subject}
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-gray-800 p-3 font-bold bg-gray-50">
                Grade level: {data.gradeLevel}
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-gray-800 p-3">
                <span className="font-bold">Materials:</span>
                <div className="mt-1 whitespace-pre-wrap">{data.materials}</div>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-gray-800 p-3">
                <span className="font-bold">Technology:</span>
                <div className="mt-1 whitespace-pre-wrap">{data.technology}</div>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-gray-800 p-3 font-bold bg-gray-50">
                Curriculum: {data.curriculum}
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-gray-800 p-3">
                <span className="font-bold">Lesson Aim(s):</span>
                <div className="mt-1 whitespace-pre-wrap">{data.lessonAims}</div>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-gray-800 p-3">
                <span className="font-bold">Lesson objective(s):</span>
                <div className="mt-1 whitespace-pre-wrap">{data.lessonObjectives}</div>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-gray-800 p-3">
                <span className="font-bold">
                  Differentiation strategies to meet diverse learner needs:
                </span>
                <div className="mt-1 whitespace-pre-wrap">{data.differentiation}</div>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-gray-800 p-3">
                <div className="font-bold mb-2">ENGAGEMENT</div>
                <div className="text-xs text-gray-600 mb-2">
                  Describe how the teacher will capture students' interest.
                  <br />
                  What kind of questions should the students ask themselves after the engagement?
                </div>
                <div className="whitespace-pre-wrap">{data.engagement}</div>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-gray-800 p-3">
                <div className="font-bold mb-2">EXPLORATION</div>
                <div className="text-xs text-gray-600 mb-2">
                  Describe what hands-on/minds-on activities students will be doing.
                  <br />
                  List "big idea" conceptual questions the teacher will use to encourage and/or
                  focus students' exploration
                </div>
                <div className="whitespace-pre-wrap">{data.exploration}</div>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-gray-800 p-3">
                <div className="font-bold mb-2">EXPLANATION</div>
                <div className="text-xs text-gray-600 mb-2">
                  Student explanations should precede introduction of terms or explanations by the
                  teacher. What questions or techniques will the teacher use to help students
                  connect their exploration to the concept under examination?
                  <br />
                  List higher order thinking questions which teachers will use to solicit student
                  explanations and help them to justify their explanations.
                </div>
                <div className="whitespace-pre-wrap">{data.explanation}</div>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-gray-800 p-3">
                <div className="font-bold mb-2">ELABORATION</div>
                <div className="text-xs text-gray-600 mb-2">
                  Describe how students will develop a more sophisticated understanding of the
                  concept.
                  <br />
                  What vocabulary will be introduced and how will it connect to students'
                  observations?
                  <br />
                  How is this knowledge applied in our daily lives?
                </div>
                <div className="whitespace-pre-wrap">{data.elaboration}</div>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-gray-800 p-3">
                <div className="font-bold mb-2">EVALUATION</div>
                <div className="text-xs text-gray-600 mb-2">
                  How will students demonstrate that they have achieved the lesson objective?
                  <br />
                  This should be embedded throughout the lesson as well as at the end of the lesson
                </div>
                <div className="whitespace-pre-wrap">{data.evaluation}</div>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-gray-800 p-3">
                <div className="font-bold mb-2">REFLECTION (Teacher)</div>
                <div className="whitespace-pre-wrap">{data.reflection}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
