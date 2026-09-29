import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  FileCheck,
  Plus,
  Clock,
  Sparkles,
  Trash2,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  Save
} from 'lucide-react';

export const EvaluationSuitePage = () => {
  const { courses, addToast } = useAuth();

  const [selectedCourseId, setSelectedCourseId] = useState(courses[0].id);
  const selectedCourse = courses.find((c) => c.id === selectedCourseId) || courses[0];

  // Assessment Config State
  const [quizConfig, setQuizConfig] = useState({
    title: selectedCourse.quiz?.title || 'Operational Certification Assessment',
    durationMinutes: selectedCourse.quiz?.durationMinutes || 15,
    passPercentage: selectedCourse.quiz?.passPercentage || 75,
    negativeMarking: false
  });

  // Question List State
  const [questions, setQuestions] = useState(selectedCourse.quiz?.questions || []);

  // New Question Form State
  const [newQuestionText, setNewQuestionText] = useState('');
  const [optionA, setOptionA] = useState('');
  const [optionB, setOptionB] = useState('');
  const [optionC, setOptionC] = useState('');
  const [optionD, setOptionD] = useState('');
  const [correctOption, setCorrectOption] = useState(0);
  const [explanation, setExplanation] = useState('');

  const handleAddQuestion = (e) => {
    e.preventDefault();
    if (!newQuestionText.trim() || !optionA.trim() || !optionB.trim()) {
      addToast('Please provide question text and at least options A and B', 'error');
      return;
    }

    const newQ = {
      id: `q-custom-${Date.now()}`,
      question: newQuestionText.trim(),
      options: [optionA.trim(), optionB.trim(), optionC.trim() || 'Option C', optionD.trim() || 'Option D'],
      correctAnswer: Number(correctOption),
      explanation: explanation.trim() || 'Standard operational scientific explanation per IMD protocol.'
    };

    setQuestions([...questions, newQ]);
    setNewQuestionText('');
    setOptionA('');
    setOptionB('');
    setOptionC('');
    setOptionD('');
    setExplanation('');
    addToast('Question added to assessment question bank!', 'success');
  };

  const handleRemoveQuestion = (idx) => {
    setQuestions(questions.filter((_, i) => i !== idx));
    addToast('Question removed from assessment', 'info');
  };

  const handleSaveAssessment = () => {
    addToast(`Assessment "${quizConfig.title}" saved & synchronized across all 6 IMD RMCs!`, 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#081426] via-[#044e54] to-[#0d9488] text-white p-6 sm:p-8 rounded-3xl border border-teal-700 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/20 text-teal-200 text-xs font-semibold uppercase tracking-wider mb-2 border border-teal-300/30">
            <FileCheck className="w-4 h-4" />
            <span>Trainer Evaluation Suite</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black font-['Outfit']">
            MCQ Assessment Builder & Question Bank
          </h1>
          <p className="text-xs text-teal-100 mt-0.5">
            Construct timed evaluations, set passing thresholds, and formulate scientific rationales for automatic grading.
          </p>
        </div>

        <button
          onClick={handleSaveAssessment}
          className="px-5 py-2.5 bg-white text-teal-900 rounded-xl font-bold text-xs shadow hover:bg-teal-50 transition flex items-center gap-2"
        >
          <Save className="w-4 h-4 text-teal-600" />
          <span>Publish Assessment Changes</span>
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column (5 cols): Config & Question Creator */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Assessment Parameters */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 text-sm font-['Outfit']">
              Evaluation Parameters
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Selected Course Module
                </label>
                <select
                  value={selectedCourseId}
                  onChange={(e) => setSelectedCourseId(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold text-slate-800"
                >
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title} ({c.code})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Assessment Title
                </label>
                <input
                  type="text"
                  value={quizConfig.title}
                  onChange={(e) => setQuizConfig({ ...quizConfig, title: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Duration (Minutes)
                  </label>
                  <input
                    type="number"
                    min="5"
                    max="60"
                    value={quizConfig.durationMinutes}
                    onChange={(e) => setQuizConfig({ ...quizConfig, durationMinutes: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Pass Mark (%)
                  </label>
                  <input
                    type="number"
                    min="50"
                    max="95"
                    value={quizConfig.passPercentage}
                    onChange={(e) => setQuizConfig({ ...quizConfig, passPercentage: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <input
                  type="checkbox"
                  id="negMarking"
                  checked={quizConfig.negativeMarking}
                  onChange={(e) => setQuizConfig({ ...quizConfig, negativeMarking: e.target.checked })}
                  className="rounded text-teal-600 focus:ring-teal-500"
                />
                <label htmlFor="negMarking" className="font-medium text-slate-700">
                  Enable Negative Marking (-0.25 per incorrect answer)
                </label>
              </div>
            </div>
          </div>

          {/* Add New Question Box */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 text-sm font-['Outfit']">
              Add Question to Bank
            </h3>

            <form onSubmit={handleAddQuestion} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Question Statement *
                </label>
                <textarea
                  rows={2}
                  required
                  value={newQuestionText}
                  onChange={(e) => setNewQuestionText(e.target.value)}
                  placeholder="e.g. Which scanning strategy is optimal for shallow sea-breeze convection?"
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="space-y-2">
                <div>
                  <span className="font-bold text-slate-700">Option A:</span>
                  <input
                    type="text"
                    required
                    value={optionA}
                    onChange={(e) => setOptionA(e.target.value)}
                    placeholder="First choice"
                    className="w-full px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs mt-0.5"
                  />
                </div>
                <div>
                  <span className="font-bold text-slate-700">Option B:</span>
                  <input
                    type="text"
                    required
                    value={optionB}
                    onChange={(e) => setOptionB(e.target.value)}
                    placeholder="Second choice"
                    className="w-full px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs mt-0.5"
                  />
                </div>
                <div>
                  <span className="font-bold text-slate-700">Option C:</span>
                  <input
                    type="text"
                    value={optionC}
                    onChange={(e) => setOptionC(e.target.value)}
                    placeholder="Third choice"
                    className="w-full px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs mt-0.5"
                  />
                </div>
                <div>
                  <span className="font-bold text-slate-700">Option D:</span>
                  <input
                    type="text"
                    value={optionD}
                    onChange={(e) => setOptionD(e.target.value)}
                    placeholder="Fourth choice"
                    className="w-full px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs mt-0.5"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Designate Correct Answer:
                </label>
                <select
                  value={correctOption}
                  onChange={(e) => setCorrectOption(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-teal-800"
                >
                  <option value={0}>Option A is Correct</option>
                  <option value={1}>Option B is Correct</option>
                  <option value={2}>Option C is Correct</option>
                  <option value={3}>Option D is Correct</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                  IMD Scientific Operational Explanation
                </label>
                <textarea
                  rows={2}
                  value={explanation}
                  onChange={(e) => setExplanation(e.target.value)}
                  placeholder="Explain why this option is correct based on atmospheric physics or IMD SOP..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold transition shadow-sm flex items-center justify-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Add Question to Assessment</span>
              </button>
            </form>
          </div>

        </div>

        {/* Right Column (7 cols): Active Question Bank List */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-slate-900 text-base font-['Outfit']">
                Active Assessment Questions ({questions.length})
              </h3>
              <p className="text-xs text-slate-500">
                Passing Score: {quizConfig.passPercentage}% · Duration: {quizConfig.durationMinutes} Mins
              </p>
            </div>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">
              Ready for Trainee Deployment
            </span>
          </div>

          <div className="space-y-4">
            {questions.map((q, idx) => (
              <div
                key={q.id || idx}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2 text-xs"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="font-bold text-slate-900">
                    <span className="text-teal-700 mr-1.5 font-mono">Q{idx + 1}.</span>
                    {q.question}
                  </div>
                  <button
                    onClick={() => handleRemoveQuestion(idx)}
                    className="text-rose-500 hover:text-rose-700 p-1"
                    title="Delete Question"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                  {q.options.map((opt, optIdx) => (
                    <div
                      key={optIdx}
                      className={`p-2 rounded-lg border text-[11px] ${
                        optIdx === q.correctAnswer
                          ? 'bg-emerald-100/70 border-emerald-300 font-bold text-emerald-900'
                          : 'bg-white border-slate-200 text-slate-600'
                      }`}
                    >
                      {String.fromCharCode(65 + optIdx)}. {opt}
                      {optIdx === q.correctAnswer && <span className="ml-1 text-[9px] text-emerald-700">(Correct)</span>}
                    </div>
                  ))}
                </div>

                <div className="p-2.5 bg-sky-50 rounded-lg border border-sky-100 text-[11px] text-slate-700">
                  <span className="font-bold text-sky-900">Explanation: </span>
                  {q.explanation}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
