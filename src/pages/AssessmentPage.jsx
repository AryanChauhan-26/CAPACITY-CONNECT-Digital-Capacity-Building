import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import confetti from 'canvas-confetti';
import {
  Clock,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  Award,
  Sparkles,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';

export const AssessmentPage = () => {
  const { id } = useParams();
  const { courses, currentUser, issueCertificate, addToast } = useAuth();
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === id) || courses[0];
  const quiz = course.quiz || {
    id: 'quiz-default',
    title: 'Standard Competency Assessment',
    durationMinutes: 15,
    passPercentage: 75,
    questions: []
  };

  const totalQuestions = quiz.questions.length;

  // Assessment State
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { 0: 1, 1: 3, ... }
  const [markedForReview, setMarkedForReview] = useState([]);
  const [secondsRemaining, setSecondsRemaining] = useState(quiz.durationMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scoreResult, setScoreResult] = useState(null);
  const [generatedCert, setGeneratedCert] = useState(null);

  // Timer countdown
  useEffect(() => {
    if (isSubmitted) return;

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted]);

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (questionIdx, optionIdx) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [questionIdx]: optionIdx
    }));
  };

  const toggleReview = (idx) => {
    setMarkedForReview((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const handleSubmitQuiz = () => {
    if (isSubmitted) return;

    let correctCount = 0;
    quiz.questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswer) {
        correctCount += 1;
      }
    });

    const scorePct = Math.round((correctCount / totalQuestions) * 100);
    const passed = scorePct >= quiz.passPercentage;

    setScoreResult({
      correctCount,
      totalQuestions,
      scorePct,
      passed
    });
    setIsSubmitted(true);

    if (passed) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      // Automatically issue verifiable digital certificate
      const cert = issueCertificate(course.id, scorePct);
      setGeneratedCert(cert);
    } else {
      addToast(`Scored ${scorePct}%. Minimum passing score is ${quiz.passPercentage}%. You can retake this assessment.`, 'warning');
    }
  };

  const currentQuestion = quiz.questions[currentIdx];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Top Header */}
      <div className="bg-gradient-to-r from-[#081426] via-[#0b1e36] to-[#0d3880] text-white p-6 rounded-2xl border border-slate-700 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sky-300 text-xs font-semibold mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Official IMD Timed Assessment Engine</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black font-['Outfit']">
            {quiz.title}
          </h1>
          <p className="text-xs text-slate-300 mt-0.5">
            Module: {course.title} ({course.code})
          </p>
        </div>

        {/* Live Countdown Timer Badge */}
        {!isSubmitted && (
          <div className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border backdrop-blur-md ${
            secondsRemaining < 120
              ? 'bg-rose-950/80 border-rose-500 text-rose-300 animate-pulse'
              : 'bg-slate-900/80 border-sky-400/40 text-sky-200'
          }`}>
            <Clock className="w-5 h-5" />
            <div>
              <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Time Remaining</div>
              <div className="text-xl font-mono font-bold">{formatTime(secondsRemaining)}</div>
            </div>
          </div>
        )}
      </div>

      {!isSubmitted ? (
        /* Active Quiz Interface */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Question Card (8 cols) */}
          <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between min-h-[460px]">
            <div>
              {/* Question Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-5">
                <span className="text-xs font-bold text-sky-700 uppercase tracking-wider bg-sky-50 px-2.5 py-1 rounded">
                  Question {currentIdx + 1} of {totalQuestions}
                </span>

                <button
                  onClick={() => toggleReview(currentIdx)}
                  className={`text-xs font-semibold px-2.5 py-1 rounded transition flex items-center gap-1 ${
                    markedForReview.includes(currentIdx)
                      ? 'bg-amber-100 text-amber-800 border border-amber-300'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>{markedForReview.includes(currentIdx) ? 'Marked for Review' : 'Mark for Review'}</span>
                </button>
              </div>

              {/* Question Text */}
              <div className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed mb-6">
                {currentQuestion.question}
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((opt, optIdx) => {
                  const isSelected = userAnswers[currentIdx] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(currentIdx, optIdx)}
                      className={`w-full p-4 rounded-xl text-left text-xs sm:text-sm transition-all border flex items-center gap-3.5 ${
                        isSelected
                          ? 'bg-sky-50 border-sky-500 text-sky-950 font-semibold shadow-sm ring-2 ring-sky-500/20'
                          : 'bg-slate-50/60 hover:bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        isSelected ? 'bg-sky-600 text-white' : 'bg-white border border-slate-300 text-slate-600'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="leading-snug">{opt}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Navigation Buttons */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-6">
              <button
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx((prev) => prev - 1)}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold disabled:opacity-40 flex items-center gap-1.5 transition"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {currentIdx < totalQuestions - 1 ? (
                <button
                  onClick={() => setCurrentIdx((prev) => prev + 1)}
                  className="px-5 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition shadow"
                >
                  <span>Next Question</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmitQuiz}
                  className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition shadow"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Submit Assessment</span>
                </button>
              )}
            </div>
          </div>

          {/* Question Palette Sidebar (4 cols) */}
          <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 text-sm">Question Navigator</h3>

            <div className="grid grid-cols-5 gap-2">
              {quiz.questions.map((_, idx) => {
                const isCurrent = idx === currentIdx;
                const isAnswered = userAnswers[idx] !== undefined;
                const isReview = markedForReview.includes(idx);

                let btnColor = 'bg-slate-100 text-slate-700 border-slate-200';
                if (isCurrent) {
                  btnColor = 'ring-2 ring-sky-500 bg-sky-600 text-white font-bold';
                } else if (isReview) {
                  btnColor = 'bg-amber-100 text-amber-800 border-amber-300 font-bold';
                } else if (isAnswered) {
                  btnColor = 'bg-emerald-100 text-emerald-800 border-emerald-300 font-bold';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-10 rounded-xl border text-xs flex items-center justify-center transition ${btnColor}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="pt-3 border-t border-slate-100 space-y-2 text-[11px] text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-emerald-100 border border-emerald-300"></span>
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-amber-100 border border-amber-300"></span>
                <span>Marked for Review</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-slate-100 border border-slate-200"></span>
                <span>Not Visited</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleSubmitQuiz}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition shadow-sm"
              >
                Submit All Questions
              </button>
            </div>
          </div>

        </div>
      ) : (
        /* Evaluation Results & Answer Review */
        <div className="space-y-6">
          
          {/* Result Banner */}
          <div className={`p-8 rounded-3xl border shadow-xl text-center space-y-4 ${
            scoreResult.passed
              ? 'bg-gradient-to-br from-emerald-500/10 via-emerald-50/40 to-white border-emerald-400'
              : 'bg-gradient-to-br from-rose-500/10 via-rose-50/40 to-white border-rose-400'
          }`}>
            <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center shadow-lg">
              {scoreResult.passed ? (
                <CheckCircle2 className="w-16 h-16 text-emerald-600" />
              ) : (
                <XCircle className="w-16 h-16 text-rose-600" />
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-black font-['Outfit'] text-slate-900">
              {scoreResult.passed ? 'Assessment Passed! Congratulations!' : 'Assessment Not Cleared'}
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              You scored <span className="font-bold text-slate-900">{scoreResult.scorePct}%</span> ({scoreResult.correctCount} of {scoreResult.totalQuestions} correct). Required passing benchmark is {quiz.passPercentage}%.
            </p>

            {/* Generated Certificate Notification */}
            {generatedCert && (
              <div className="max-w-lg mx-auto p-4 bg-emerald-100/60 border border-emerald-300 rounded-2xl text-xs text-emerald-950 space-y-2">
                <div className="font-bold flex items-center justify-center gap-1.5 text-sm text-emerald-900">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Verifiable Certificate Issued: {generatedCert.id}</span>
                </div>
                <div className="text-[11px] text-emerald-800">
                  Cryptographically registered with SHA-256 hash. You can view or print the official certificate PDF.
                </div>
                <div className="pt-1 flex items-center justify-center gap-2">
                  <Link
                    to="/trainee/certificates"
                    className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold transition shadow-sm"
                  >
                    View My Certificates
                  </Link>
                  <Link
                    to={`/verify-certificate?id=${generatedCert.id}`}
                    className="px-4 py-2 bg-white text-emerald-800 border border-emerald-300 rounded-xl font-semibold transition"
                  >
                    Verify Credential Online
                  </Link>
                </div>
              </div>
            )}

            {!scoreResult.passed && (
              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setUserAnswers({});
                    setMarkedForReview([]);
                    setSecondsRemaining(quiz.durationMinutes * 60);
                  }}
                  className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs transition shadow-sm inline-flex items-center gap-1.5"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retake Assessment</span>
                </button>
              </div>
            )}
          </div>

          {/* Detailed Question Review & IMD Scientific Explanations */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="font-bold text-slate-900 text-base border-b border-slate-200 pb-3">
              Detailed Question Review & Operational Scientific Rationales
            </h3>

            <div className="space-y-6">
              {quiz.questions.map((q, idx) => {
                const userAns = userAnswers[idx];
                const isCorrect = userAns === q.correctAnswer;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-2xl border transition ${
                      isCorrect ? 'bg-emerald-50/20 border-emerald-200' : 'bg-rose-50/20 border-rose-200'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-bold text-slate-500 uppercase">Question {idx + 1}</span>
                      <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                        isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {isCorrect ? '✓ Correct (+20 pts)' : '✗ Incorrect (0 pts)'}
                      </span>
                    </div>

                    <div className="font-semibold text-slate-900 text-xs sm:text-sm mb-3">
                      {q.question}
                    </div>

                    {/* Options list showing user choice & correct choice */}
                    <div className="space-y-1.5 text-xs mb-3">
                      {q.options.map((opt, optIdx) => {
                        const wasChosen = userAns === optIdx;
                        const isTheCorrectOne = optIdx === q.correctAnswer;

                        let style = 'bg-slate-50 border-slate-200 text-slate-700';
                        if (isTheCorrectOne) {
                          style = 'bg-emerald-100/80 border-emerald-400 font-bold text-emerald-900';
                        } else if (wasChosen && !isTheCorrectOne) {
                          style = 'bg-rose-100/80 border-rose-400 text-rose-900 line-through';
                        }

                        return (
                          <div key={optIdx} className={`p-2.5 rounded-lg border flex items-center justify-between ${style}`}>
                            <span>{String.fromCharCode(65 + optIdx)}. {opt}</span>
                            {isTheCorrectOne && <span className="text-[10px] font-bold text-emerald-800">Correct Answer</span>}
                            {wasChosen && !isTheCorrectOne && <span className="text-[10px] font-bold text-rose-800">Your Answer</span>}
                          </div>
                        );
                      })}
                    </div>

                    {/* Scientific Explanation */}
                    <div className="p-3 bg-sky-50 rounded-xl border border-sky-200 text-xs text-slate-800">
                      <span className="font-bold text-sky-900 block mb-0.5">Scientific Operational Rationale:</span>
                      {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
