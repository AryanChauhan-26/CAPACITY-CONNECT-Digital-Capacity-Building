import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLowBandwidth } from '../context/LowBandwidthContext';
import {
  Play,
  Pause,
  CheckCircle2,
  FileText,
  Download,
  Wifi,
  WifiOff,
  Clock,
  BookOpen,
  MessageSquare,
  Star,
  ChevronRight,
  ShieldCheck,
  Send,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

export const CoursePlayerPage = () => {
  const { id } = useParams();
  const { courses, currentUser, addToast } = useAuth();
  const { lowBandwidthMode, toggleLowBandwidth, isDocCached, toggleDocCache } = useLowBandwidth();

  const course = courses.find((c) => c.id === id) || courses[0];

  // Active lesson selection
  const [activeLessonId, setActiveLessonId] = useState(
    course.modules[0]?.lessons[0]?.id || 'l1'
  );

  // Tab: 'curriculum', 'documents', 'notes', 'feedback'
  const [activeTab, setActiveTab] = useState('curriculum');

  // Video state
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoQuality, setVideoQuality] = useState('720p'); // '360p (Low Bandwidth)', '720p', '1080p HD'
  const [textModeTranscript, setTextModeTranscript] = useState(lowBandwidthMode);

  // Feedback form state
  const [feedbackRating, setFeedbackRating] = useState(5);
  const [feedbackComment, setFeedbackComment] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  // Forum comment state
  const [forumComment, setForumComment] = useState('');
  const [forumList, setForumList] = useState([
    {
      author: 'Dr. Ramesh Sharma (MC Pune)',
      time: '2 hours ago',
      text: 'For the VCP 21 scan, does the high elevation slice (19.5°) experience significant attenuation during severe cloudburst cells in the Western Ghats?'
    },
    {
      author: 'Dr. Sangeeta Rao (Course Lead)',
      time: '1 hour ago',
      text: 'Excellent query, Ramesh. S-Band (2.8 GHz) is virtually unaffected by rain attenuation, whereas C-Band requires the specific differential phase (KDP) attenuation correction algorithm outlined in Chapter 4.'
    }
  ]);

  // Find active lesson
  let activeLesson = null;
  for (const mod of course.modules) {
    const found = mod.lessons.find((l) => l.id === activeLessonId);
    if (found) {
      activeLesson = found;
      break;
    }
  }

  const handleLessonComplete = () => {
    addToast(`Marked lesson "${activeLesson?.title}" as complete!`, 'success');
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    addToast('Structured course feedback recorded and forwarded to MoES Training Cell.', 'success');
  };

  const handleForumSubmit = (e) => {
    e.preventDefault();
    if (!forumComment.trim()) return;
    setForumList([
      ...forumList,
      {
        author: currentUser ? `${currentUser.name} (${currentUser.center.split(' ')[0]})` : 'Anonymous Station Trainee',
        time: 'Just now',
        text: forumComment
      }
    ]);
    setForumComment('');
    addToast('Your inquiry has been posted to the course peer forum.', 'info');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Top Breadcrumb & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
            <Link to="/courses" className="hover:text-sky-600">Course Catalog</Link>
            <span>/</span>
            <span className="text-sky-700 font-semibold">{course.domain}</span>
            <span>/</span>
            <span className="font-mono">{course.code}</span>
          </div>
          <h1 className="text-lg sm:text-2xl font-black text-slate-900 font-['Outfit']">
            {course.title}
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to={`/assessment/${course.id}`}
            className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-xs transition shadow-sm flex items-center gap-1.5"
          >
            <Clock className="w-4 h-4" />
            <span>Launch Timed Certification Test</span>
          </Link>
        </div>
      </div>

      {/* Main Grid: Player on Left (8 cols), Course Sidebar on Right (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column (Player & Content) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Media Player Box */}
          <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative">
            
            {/* Low-Bandwidth Mode or Text-Mode Transcript */}
            {lowBandwidthMode || textModeTranscript ? (
              <div className="p-8 bg-[#081426] text-slate-200 min-h-[380px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-700/80 pb-3 mb-4">
                    <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase">
                      <WifiOff className="w-4 h-4" />
                      <span>Low-Bandwidth 2G Text Mode (Zero Video Buffering)</span>
                    </div>
                    <button
                      onClick={() => setTextModeTranscript(false)}
                      className="text-xs text-sky-400 hover:underline"
                    >
                      Switch to Video Stream
                    </button>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {activeLesson?.title || 'Lesson Overview'}
                  </h3>

                  <div className="text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
                    <p>
                      <strong>Core Meteorological Principle:</strong> The operational Doppler Weather Radar emits microwave pulses and samples backscattered electromagnetic energy from precipitation hydrometeors. The differential phase (PhiDP) shift is calculated as the radio wave traverses through flattened oblate raindrops.
                    </p>
                    <p>
                      <strong>Key Operational Formula:</strong> Specific Differential Phase <span className="font-mono text-sky-300">KDP = 0.5 * (dPhiDP / dr)</span>. Unlike horizontal reflectivity factor Z, KDP does not suffer from rain attenuation along severe storm radials, enabling precise quantitative precipitation estimation (QPE) even during heavy cloudbursts.
                    </p>
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-700 text-xs text-slate-300 font-mono">
                      IMD SOP Step 4.2: Verify antenna azimuth alignment using solar sun-pointing radio frequency flux calibration every 7 days at 12:00 UTC.
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Bandwidth Consumed: &lt;14 KB (Text Payload)</span>
                  <button
                    onClick={handleLessonComplete}
                    className="px-3 py-1.5 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-500 transition"
                  >
                    Mark Lesson Complete
                  </button>
                </div>
              </div>
            ) : (
              /* Simulated High-Def Video Player */
              <div className="relative aspect-video bg-slate-900 flex flex-col justify-between p-4">
                <div className="flex items-center justify-between z-10 text-xs text-white">
                  <div className="bg-black/60 px-3 py-1 rounded-lg backdrop-blur-md flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    <span>IMD National Training Stream</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Quality Selector */}
                    <select
                      value={videoQuality}
                      onChange={(e) => setVideoQuality(e.target.value)}
                      className="bg-black/70 text-slate-200 border border-slate-700 rounded px-2 py-1 text-xs"
                    >
                      <option value="360p">360p (Data Saver)</option>
                      <option value="720p">720p (Standard)</option>
                      <option value="1080p">1080p (HD)</option>
                    </select>

                    <button
                      onClick={() => setTextModeTranscript(true)}
                      className="bg-black/70 hover:bg-black text-amber-300 border border-amber-500/40 rounded px-2 py-1 text-xs font-medium"
                    >
                      2G Text Mode
                    </button>
                  </div>
                </div>

                {/* Center Play Button Graphic */}
                <div className="flex flex-col items-center justify-center my-auto z-10 text-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 rounded-full bg-sky-600/90 hover:bg-sky-500 text-white flex items-center justify-center shadow-2xl transition transform hover:scale-105"
                  >
                    {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1" />}
                  </button>
                  <span className="mt-3 text-xs font-semibold text-slate-300">
                    {isPlaying ? 'Playing Simulated Stream (128 kbps)' : 'Click to Resume Lecture'}
                  </span>
                </div>

                {/* Bottom Controls */}
                <div className="z-10 bg-black/60 p-2.5 rounded-xl backdrop-blur-md flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px]">18:42 / {activeLesson?.duration || '45 mins'}</span>
                    <span className="text-slate-500">|</span>
                    <span className="truncate max-w-xs">{activeLesson?.title}</span>
                  </div>

                  <button
                    onClick={handleLessonComplete}
                    className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-semibold text-[11px] transition"
                  >
                    Mark Complete
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Tab Navigation for Lesson Details */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="flex border-b border-slate-200 text-xs font-bold">
              <button
                onClick={() => setActiveTab('curriculum')}
                className={`flex-1 py-3 transition text-center border-b-2 ${
                  activeTab === 'curriculum'
                    ? 'border-sky-600 text-sky-600 bg-sky-50/30'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                Curriculum Lessons
              </button>
              <button
                onClick={() => setActiveTab('documents')}
                className={`flex-1 py-3 transition text-center border-b-2 ${
                  activeTab === 'documents'
                    ? 'border-sky-600 text-sky-600 bg-sky-50/30'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                PDFs & Offline Docs ({course.documents.length})
              </button>
              <button
                onClick={() => setActiveTab('notes')}
                className={`flex-1 py-3 transition text-center border-b-2 ${
                  activeTab === 'notes'
                    ? 'border-sky-600 text-sky-600 bg-sky-50/30'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                Peer Discussion Forum
              </button>
              <button
                onClick={() => setActiveTab('feedback')}
                className={`flex-1 py-3 transition text-center border-b-2 ${
                  activeTab === 'feedback'
                    ? 'border-sky-600 text-sky-600 bg-sky-50/30'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                Course Feedback Form
              </button>
            </div>

            <div className="p-6">
              
              {/* TAB 1: Curriculum Lessons */}
              {activeTab === 'curriculum' && (
                <div className="space-y-6">
                  {course.modules.map((mod) => (
                    <div key={mod.id} className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        {mod.title}
                      </h4>
                      <div className="space-y-1.5">
                        {mod.lessons.map((lesson) => {
                          const isActive = lesson.id === activeLessonId;
                          return (
                            <button
                              key={lesson.id}
                              onClick={() => setActiveLessonId(lesson.id)}
                              className={`w-full p-3 rounded-xl border text-left flex items-center justify-between text-xs transition ${
                                isActive
                                  ? 'bg-sky-50/80 border-sky-400 font-bold text-sky-900 shadow-sm'
                                  : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                {lesson.completed ? (
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                ) : (
                                  <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>
                                )}
                                <span>{lesson.title}</span>
                              </div>
                              <span className="text-[11px] text-slate-500 font-mono">
                                {lesson.duration}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 2: Technical Documents & Offline PWA Cache */}
              {activeTab === 'documents' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-600 bg-sky-50 p-3 rounded-xl border border-sky-200">
                    <span className="flex items-center gap-1.5 font-medium text-sky-900">
                      <ShieldCheck className="w-4 h-4 text-sky-600" />
                      <span>PWA Service Worker Storage: Documents can be cached locally for zero-bandwidth offline reading.</span>
                    </span>
                  </div>

                  <div className="space-y-3">
                    {course.documents.map((doc) => {
                      const cached = isDocCached(doc.id);
                      return (
                        <div
                          key={doc.id}
                          className="p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs bg-slate-50/50"
                        >
                          <div className="flex items-start gap-3">
                            <FileText className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                            <div>
                              <div className="font-bold text-slate-900">{doc.title}</div>
                              <div className="text-[11px] text-slate-500 mt-0.5">
                                {doc.size} · {doc.pages} Pages · MoES Approved Reference
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                toggleDocCache(doc.id);
                                addToast(
                                  cached
                                    ? `Removed ${doc.title} from offline PWA cache.`
                                    : `Cached ${doc.title} locally in IndexedDB / ServiceWorker for offline reading!`,
                                  cached ? 'info' : 'success'
                                );
                              }}
                              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                                cached
                                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                  : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                              }`}
                            >
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>{cached ? 'Cached Offline' : 'Cache for Offline (2G)'}</span>
                            </button>

                            <button
                              onClick={() => addToast(`Opening ${doc.title} in secure viewer...`, 'info')}
                              className="px-3 py-1.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-semibold text-xs transition"
                            >
                              View PDF
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 3: Discussion Forum */}
              {activeTab === 'notes' && (
                <div className="space-y-5">
                  <form onSubmit={handleForumSubmit} className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Ask Course Lead or Station Peers:
                    </label>
                    <textarea
                      rows={3}
                      value={forumComment}
                      onChange={(e) => setForumComment(e.target.value)}
                      placeholder="Post a query regarding radar moments, WRF namelists, or cyclone warnings..."
                      className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-sky-500"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Post Inquiry</span>
                    </button>
                  </form>

                  <div className="space-y-3 pt-3 border-t border-slate-200">
                    {forumList.map((item, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                        <div className="flex items-center justify-between text-slate-500 text-[11px]">
                          <span className="font-bold text-slate-900">{item.author}</span>
                          <span>{item.time}</span>
                        </div>
                        <p className="text-slate-700 leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: Structured Feedback Form */}
              {activeTab === 'feedback' && (
                <div>
                  {feedbackSubmitted ? (
                    <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-2">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                      <h4 className="font-bold text-emerald-900 text-sm">Thank You for Your Evaluation</h4>
                      <p className="text-xs text-emerald-800">
                        Your structured feedback has been integrated into the Trainer Competency Matrix and sent to the MoES Academic Board.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleFeedbackSubmit} className="space-y-4 text-xs">
                      <div>
                        <label className="block font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Rate Overall Course Content Quality & Practical Relevance:
                        </label>
                        <div className="flex items-center gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setFeedbackRating(star)}
                              className="p-1 text-amber-500 hover:scale-110 transition"
                            >
                              <Star
                                className={`w-6 h-6 ${
                                  star <= feedbackRating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'
                                }`}
                              />
                            </button>
                          ))}
                          <span className="ml-2 font-bold text-slate-800 text-sm">{feedbackRating} / 5 Stars</span>
                        </div>
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Observatory Applicability & Low-Bandwidth Usability Comments:
                        </label>
                        <textarea
                          rows={3}
                          required
                          value={feedbackComment}
                          onChange={(e) => setFeedbackComment(e.target.value)}
                          placeholder="Provide specific feedback on how well this module prepares your station for severe weather operations..."
                          className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-sky-500"
                        />
                      </div>

                      <button
                        type="submit"
                        className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-bold transition shadow-sm"
                      >
                        Submit Official MoES Evaluation
                      </button>
                    </form>
                  )}
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Right Column (Trainer info & Quick links) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Trainer Profile Card */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <span className="text-[10px] font-bold text-sky-600 uppercase tracking-wider">
              Assigned Course Lead
            </span>
            <div className="flex items-center gap-3">
              <img
                src={course.trainer.avatar}
                alt={course.trainer.name}
                className="w-12 h-12 rounded-xl object-cover border border-sky-400/40"
              />
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{course.trainer.name}</h4>
                <div className="text-xs text-slate-600">{course.trainer.designation}</div>
                <div className="text-[11px] text-slate-500">{course.trainer.center}</div>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-2">
              National subject matter expert appointed under MoES Capacity Building Cell.
            </p>
          </div>

          {/* Certification Assessment Card */}
          <div className="bg-gradient-to-br from-amber-500/15 via-white to-amber-500/5 p-5 rounded-2xl border border-amber-300 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>Timed Subject Certification</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Complete the 5-question timed assessment within 15 minutes to earn your verified SHA-256 digital certificate.
            </p>
            <div className="space-y-1.5 text-xs text-slate-600 font-medium">
              <div>• Time Limit: 15 Minutes</div>
              <div>• Passing Grade: 75% Score</div>
              <div>• Auto-graded with instant review explanations</div>
            </div>
            <Link
              to={`/assessment/${course.id}`}
              className="block w-full text-center py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-xs transition shadow-sm"
            >
              Start Certification Assessment Now
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
};
