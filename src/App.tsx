import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import LessonPlanForm from './components/LessonPlanForm';
import LessonPlanDisplay from './components/LessonPlanDisplay';
import { LessonPlanData } from './types/LessonPlan';

function App() {
  const [lessonPlanData, setLessonPlanData] = useState<LessonPlanData | null>(null);
  const [showPlan, setShowPlan] = useState(false);

  const handleGeneratePlan = (data: LessonPlanData) => {
    setLessonPlanData(data);
    setShowPlan(true);
  };

  const handleBack = () => {
    setShowPlan(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-slate-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-green-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">5E Lesson Plan Generator</h1>
              <p className="text-sm text-gray-600 mt-1">Create structured 5E model lesson plans</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!showPlan ? (
          <LessonPlanForm onGenerate={handleGeneratePlan} />
        ) : (
          <LessonPlanDisplay data={lessonPlanData!} onBack={handleBack} />
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500">
            Professional Lesson Plan Generator - Designed for Educators
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
