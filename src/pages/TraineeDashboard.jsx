import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Clock,
  Award,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  PlayCircle,
  FileCheck,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  Zap,
  BarChart2
} from 'lucide-react';

export const TraineeDashboard = () => {
  const { currentUser, courses, certificates } = useAuth();

  if (!currentUser) {
    return (
      <div className="max-w-4xl mx-auto p-12 text-center">
        <h2 className="text-xl font-bold">Please log in to view the Trainee Dashboard</h2>
        <Link to="/login" className="mt-4 inline-block px-4 py-2 bg-sky-600 text-white rounded-lg">Sign In</Link>
      </div>
    );
  }

  const enrolledCourseIds = currentUser.enrolledCourseIds || [];
  const enrolledCourses = courses.filter((c) => enrolledCourseIds.includes(c.id));
  const recommendedCourses = courses.filter((c) => !enrolledCourseIds.includes(c.id)).slice(0, 3);
  const userCerts = certificates.filter((c) => c.employeeId === currentUser.employeeId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Welcome Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-[#081426] via-[#0b1e36] to-[#0f3460] text-white p-6 sm:p-8 border border-slate-700 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4">
            <img
              src={currentUser.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
              alt={currentUser.name}
              className="w-16 h-16 rounded-2xl border-2 border-sky-400 object-cover shadow"
            />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black font-['Outfit']">{currentUser.name}</h1>
                <span className="text-[10px] bg-sky-500/20 text-sky-300 font-bold px-2 py-0.5 rounded border border-sky-400/30 uppercase">
                  {currentUser.role}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                {currentUser.designation} · {currentUser.center} ({currentUser.employeeId})
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-sky-200">
                <span>Dept: {currentUser.department}</span>
                <span>•</span>
                <span>Exp: {currentUser.experienceYears || 5} Years</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-4 bg-slate-900/60 p-3.5 rounded-2xl border border-sky-500/30">
            <div className="text-center px-3 border-r border-slate-700">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Readiness</div>
              <div className="text-xl sm:text-2xl font-black text-emerald-400 font-['Outfit']">
                {currentUser.readinessScore || 84}%
              </div>
            </div>
            <div className="text-center px-3 border-r border-slate-700">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Enrolled</div>
              <div className="text-xl sm:text-2xl font-black text-sky-400 font-['Outfit']">
                {enrolledCourses.length}
              </div>
            </div>
            <div className="text-center px-3">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Certificates</div>
              <div className="text-xl sm:text-2xl font-black text-amber-400 font-['Outfit']">
                {userCerts.length}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Left Column = Enrolled Courses & Assessments; Right Column = Skill Profile & Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column (8 cols) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Active Courses */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-sky-600" />
                <h2 className="text-base font-bold text-slate-900 font-['Outfit']">
                  My Active Courses & Learning Modules ({enrolledCourses.length})
                </h2>
              </div>
              <Link to="/courses" className="text-xs font-semibold text-sky-600 hover:text-sky-800">
                Browse Catalog
              </Link>
            </div>

            {enrolledCourses.length === 0 ? (
              <div className="text-center py-8 text-xs text-slate-500">
                No active courses yet. Browse the catalog to enroll in IMD operational modules.
              </div>
            ) : (
              <div className="space-y-4">
                {enrolledCourses.map((course) => {
                  const isCompleted = currentUser.completedCourseIds?.includes(course.id);
                  const progressPct = isCompleted ? 100 : 65;

                  return (
                    <div
                      key={course.id}
                      className="p-4 rounded-xl border border-slate-200 hover:border-sky-300 transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-50/50"
                    >
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono bg-sky-100 text-sky-800 px-2 py-0.5 rounded font-bold">
                            {course.code}
                          </span>
                          <span className="text-[11px] text-slate-500">{course.domain}</span>
                          {isCompleted && (
                            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" /> Certified
                            </span>
                          )}
                        </div>
                        <h3 className="font-bold text-slate-900 text-sm leading-snug">
                          {course.title}
                        </h3>
                        <div className="text-xs text-slate-500 flex items-center gap-3 pt-1">
                          <span>Trainer: {course.trainer.name}</span>
                          <span>•</span>
                          <span>{course.duration}</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="pt-2 max-w-md">
                          <div className="flex justify-between text-[11px] text-slate-600 mb-1">
                            <span>Module Completion</span>
                            <span className="font-bold">{progressPct}%</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                            <div
                              className={`h-full rounded-full ${isCompleted ? 'bg-emerald-500' : 'bg-sky-600'}`}
                              style={{ width: `${progressPct}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex sm:flex-col items-center gap-2 w-full sm:w-auto">
                        <Link
                          to={`/course/${course.id}`}
                          className="flex-1 sm:w-36 text-center py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-semibold transition flex items-center justify-center gap-1.5 shadow-sm"
                        >
                          <PlayCircle className="w-3.5 h-3.5" />
                          <span>{isCompleted ? 'Review Lessons' : 'Resume Player'}</span>
                        </Link>

                        <Link
                          to={`/assessment/${course.id}`}
                          className="flex-1 sm:w-36 text-center py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-xs transition flex items-center justify-center gap-1.5 shadow-sm"
                        >
                          <Clock className="w-3.5 h-3.5" />
                          <span>Timed Test</span>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Upcoming Assessments & Mandatory Drills Alert */}
          <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-white p-5 rounded-2xl border border-amber-300 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
              <Zap className="w-4 h-4 text-amber-600" />
              <span>Upcoming Scheduled Evaluations & Readiness Audits</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white rounded-xl border border-amber-200 space-y-1">
                <div className="font-bold text-slate-900">
                  Dual-Pol Radar Calibration Assessment
                </div>
                <div className="text-slate-500 text-[11px]">
                  15 Mins · 5 Questions · 75% Passing Score
                </div>
                <div className="text-amber-700 font-semibold text-[11px] pt-1">
                  Mandatory before Post-Monsoon Cyclone Season
                </div>
                <Link
                  to="/assessment/course-1"
                  className="mt-2 inline-flex items-center gap-1 text-sky-600 hover:underline font-bold text-[11px]"
                >
                  Start Assessment Now <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="p-3 bg-white rounded-xl border border-amber-200 space-y-1">
                <div className="font-bold text-slate-900">
                  Tropical Cyclone Track & Surge Simulation
                </div>
                <div className="text-slate-500 text-[11px]">
                  15 Mins · Dvorak & SLOSH Case Studies
                </div>
                <div className="text-amber-700 font-semibold text-[11px] pt-1">
                  National Exercise Scheduled Oct 12
                </div>
                <Link
                  to="/assessment/course-3"
                  className="mt-2 inline-flex items-center gap-1 text-sky-600 hover:underline font-bold text-[11px]"
                >
                  Start Practice Test <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Verifiable Credentials Section */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                <h2 className="text-base font-bold text-slate-900 font-['Outfit']">
                  My Verifiable Digital Certificates ({userCerts.length})
                </h2>
              </div>
              <Link to="/trainee/certificates" className="text-xs font-semibold text-sky-600 hover:text-sky-800">
                View & Download PDF
              </Link>
            </div>

            {userCerts.length === 0 ? (
              <div className="text-center py-6 text-xs text-slate-500">
                No certificates earned yet. Pass the timed assessment in an enrolled course with 75%+ to generate your cryptographic certificate.
              </div>
            ) : (
              <div className="space-y-3">
                {userCerts.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-emerald-800">{cert.id}</span>
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">
                          {cert.grade}
                        </span>
                      </div>
                      <div className="font-bold text-slate-900 mt-1">{cert.courseName}</div>
                      <div className="text-slate-500 text-[11px] mt-0.5">
                        Issued on {cert.issueDate} · Authorized by MoES / IMD DG
                      </div>
                    </div>

                    <Link
                      to={`/verify-certificate?id=${cert.id}`}
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold text-xs transition flex items-center gap-1 shadow-sm"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verify Credential</span>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column (4 cols): Skill Profile, Badges & Recommendations */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Competency Gap & Skill Matrix Card */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-sky-600" />
                <span>Competency Matrix</span>
              </h3>
              <Link to="/trainee/profile" className="text-xs text-sky-600 hover:underline">
                Edit Profile
              </Link>
            </div>

            <div className="space-y-3">
              {(currentUser.skills || [
                { name: 'Doppler Radar (DWR)', level: 85 },
                { name: 'Satellite Nowcasting', level: 92 },
                { name: 'NWP WRF Modeling', level: 68 },
                { name: 'Cyclone Tracking', level: 60 },
              ]).map((skill, idx) => (
                <div key={idx} className="text-xs space-y-1">
                  <div className="flex justify-between text-slate-700">
                    <span>{skill.name}</span>
                    <span className="font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        skill.level >= 80 ? 'bg-emerald-500' : skill.level >= 65 ? 'bg-sky-500' : 'bg-amber-500'
                      }`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skill Gap Alert */}
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1">
              <div className="font-bold flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>Identified Competency Gap:</span>
              </div>
              <p className="text-[11px] text-amber-800 leading-snug">
                Your Cyclone Tracking score is 60% (15% below coastal readiness benchmark). We recommend completing the <strong>Tropical Cyclone Genesis & Track Forecasting</strong> module.
              </p>
            </div>
          </div>

          {/* Badges Earned */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Earned Milestone Badges</span>
            </h3>

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              {(currentUser.badgesEarned || [
                { name: 'INSAT Pro', earnedOn: 'Nov 2025' },
                { name: 'Monsoon 2025', earnedOn: 'Jul 2025' },
                { name: 'Rapid Learner', earnedOn: 'Oct 2025' },
              ]).map((badge, idx) => (
                <div key={idx} className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs mb-1">
                    ★
                  </div>
                  <div className="font-semibold text-slate-800 text-[10px] leading-tight">{badge.name}</div>
                  <div className="text-[9px] text-slate-400 mt-0.5">{badge.earnedOn}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Courses for Career Path */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-teal-600" />
              <span>Recommended Next Modules</span>
            </h3>

            <div className="space-y-3">
              {recommendedCourses.map((c) => (
                <div key={c.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1.5">
                  <div className="font-bold text-slate-900 leading-snug line-clamp-1">{c.title}</div>
                  <div className="text-[11px] text-slate-500">{c.duration} · {c.level}</div>
                  <Link
                    to={`/course/${c.id}`}
                    className="text-sky-600 hover:underline font-semibold flex items-center gap-1 text-[11px]"
                  >
                    View Curriculum <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
