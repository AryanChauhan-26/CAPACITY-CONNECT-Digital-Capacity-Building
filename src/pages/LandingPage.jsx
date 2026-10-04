import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLowBandwidth } from '../context/LowBandwidthContext';
import { MOCK_ANNOUNCEMENTS, MOCK_ACHIEVEMENTS } from '../data/mockData';
import {
  BookOpen,
  Users,
  Award,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Bell,
  Star,
  ChevronRight,
  Wifi,
  WifiOff,
  Activity,
  Layers,
  MapPin,
  ExternalLink,
  Search
} from 'lucide-react';

export const LandingPage = () => {
  const { currentUser, courses, enrollCourse, verifyCertificate } = useAuth();
  const { lowBandwidthMode, toggleLowBandwidth } = useLowBandwidth();
  const [quickCertId, setQuickCertId] = useState('IMD-CERT-2025-SAT-4819');
  const [quickResult, setQuickResult] = useState(null);

  const featuredCourses = courses.slice(0, 4);

  const handleQuickVerify = (e) => {
    e.preventDefault();
    if (!quickCertId.trim()) return;
    const cert = verifyCertificate(quickCertId.trim());
    setQuickResult(cert || { notFound: true, id: quickCertId });
  };

  return (
    <div id="main-content" className="space-y-16 pb-20">
      
      {/* 1. Sleek Institutional Notice Strip */}
      <section className="bg-sky-50/70 border-b border-sky-100 py-2 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <span className="flex items-center gap-1.5 font-semibold text-sky-900 bg-sky-100 px-2 py-0.5 rounded text-[11px] shrink-0 border border-sky-200">
              <Bell className="w-3 h-3 text-sky-700" />
              <span>Official Circular</span>
            </span>
            <div className="truncate text-slate-700 text-xs font-medium">
              <span className="text-slate-900 font-semibold">{MOCK_ANNOUNCEMENTS[0].title}</span>
              <span className="text-slate-400 ml-2">({MOCK_ANNOUNCEMENTS[0].date})</span>
            </div>
          </div>

          <Link
            to="/courses"
            className="text-sky-700 hover:text-sky-900 text-[11px] font-semibold shrink-0 hidden md:flex items-center gap-1 transition"
          >
            <span>View All Notices</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 2. Executive Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0c2340] via-[#122e54] to-[#1a4277] text-white p-8 sm:p-14 shadow-lg border border-slate-700/50 overflow-hidden">
          
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-medium border border-white/15">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-300" />
              <span>MoES & IMD Digital Capacity Building Initiative</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-['Outfit'] leading-tight sm:leading-tight">
              CAPACITY <span className="text-sky-300">CONNECT</span>
              <span className="block text-xl sm:text-2xl font-normal text-slate-200 mt-2">
                Digital LMS & Institutional Competency Portal
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl">
              A unified learning management system for India's meteorological workforce, connecting 6 Regional Centers and 120+ field observatories into a standardized, low-bandwidth ready digital training framework.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                to={currentUser ? (currentUser.role === 'admin' ? '/admin' : currentUser.role === 'trainer' ? '/trainer' : '/trainee') : '/login'}
                className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-xl text-xs sm:text-sm transition shadow-sm flex items-center gap-2"
              >
                <span>{currentUser ? `Go to ${currentUser.role.toUpperCase()} Workspace` : 'Sign In to Portal'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/courses"
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl text-xs sm:text-sm transition border border-white/20 flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-sky-300" />
                <span>Browse Course Catalog</span>
              </Link>

              <button
                onClick={toggleLowBandwidth}
                className={`px-4 py-2.5 rounded-xl text-xs font-medium transition border flex items-center gap-1.5 ${
                  lowBandwidthMode
                    ? 'bg-amber-400 text-slate-950 border-amber-300 font-semibold'
                    : 'bg-black/20 hover:bg-black/40 text-slate-200 border-white/20'
                }`}
              >
                {lowBandwidthMode ? <WifiOff className="w-3.5 h-3.5" /> : <Wifi className="w-3.5 h-3.5 text-sky-400" />}
                <span>{lowBandwidthMode ? '2G Bandwidth Active' : 'Low-Bandwidth Mode'}</span>
              </button>
            </div>

            {/* Key Assurance Badges */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-5 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>PWA Offline Cache</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>AI Competency Matching</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>SHA-256 Verifiable Badges</span>
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. National Operational Metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {MOCK_ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.id}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-slate-300 transition"
            >
              <div className="text-2xl sm:text-3xl font-black text-[#0c2340] font-['Outfit'] tracking-tight">
                {ach.metric}
              </div>
              <div className="text-xs font-semibold text-slate-800 mt-1.5">
                {ach.title}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                {ach.subtitle}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Core Innovation Showcases (Clean Interactive Teasers instead of huge page embeds) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider">
              Core Architectural Pillars
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit'] mt-1">
              National Training Intelligence
            </h2>
          </div>
          <p className="text-xs text-slate-500 max-w-md">
            Dedicated automated systems solving the primary operational bottlenecks of India's meteorological training network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: AI Competency Engine Teaser */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 font-['Outfit']">
                  AI Competency Mapping
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Automated role-to-personnel matching engine based on WMO-258 standards, identifying skill gaps across Doppler Radar and Cyclone units.
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5 text-xs">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-slate-500">Target Role:</span>
                  <span className="font-semibold text-slate-800">Doppler Radar Specialist</span>
                </div>
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-slate-500">Algorithmic Fit:</span>
                  <span className="font-bold text-emerald-600">92.4% Match</span>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full w-[92%]"></div>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-slate-100">
              <Link
                to="/competency-mapping"
                className="text-xs font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1.5 transition"
              >
                <span>Launch Competency Engine</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Skill Matrix & Readiness Heatmap Teaser */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 font-['Outfit']">
                  National Skill Matrix
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Real-time operational readiness radar across 6 RMCs and 120+ field stations. Enables rapid emergency cyclone crew mobilization.
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-2 text-xs">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-600 font-medium">Coastal Observatories</span>
                  <span className="font-bold text-emerald-600">96% Ready</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-600 font-medium">Himalayan High-Altitude</span>
                  <span className="font-bold text-amber-600">84% Ready</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-600 font-medium">Island Stations (Minicoy)</span>
                  <span className="font-bold text-sky-600">89% Ready</span>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-slate-100">
              <Link
                to="/skill-matrix"
                className="text-xs font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1.5 transition"
              >
                <span>Explore Live Readiness Matrix</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: Cryptographic Certificate Verification Teaser */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-600">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 font-['Outfit']">
                  SHA-256 Public Verification
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Cryptographically secured credentials preventing counterfeit records. Instantly verifiable by station heads and MoES audits.
                </p>
              </div>

              {/* Quick Input Test */}
              <form onSubmit={handleQuickVerify} className="space-y-2">
                <div className="relative">
                  <input
                    type="text"
                    value={quickCertId}
                    onChange={(e) => setQuickCertId(e.target.value)}
                    placeholder="Enter Certificate ID"
                    className="w-full text-xs font-mono px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-500 text-slate-800"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-1.5 bg-[#0c2340] hover:bg-[#15345d] text-white rounded-lg text-xs font-medium transition"
                >
                  Quick Verify Now
                </button>
              </form>

              {quickResult && (
                <div className="p-2 bg-emerald-50 border border-emerald-200 rounded-lg text-[11px] text-emerald-800 flex items-center justify-between">
                  {quickResult.notFound ? (
                    <span className="text-rose-600">Record not found in registry</span>
                  ) : (
                    <>
                      <span className="truncate font-medium">{quickResult.candidateName}</span>
                      <span className="font-bold text-emerald-700">✓ Valid</span>
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="pt-5 mt-4 border-t border-slate-100">
              <Link
                to="/verify-certificate"
                className="text-xs font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1.5 transition"
              >
                <span>Full Certificate Registry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Standardized 4-Step Institutional Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider bg-sky-50 px-2.5 py-1 rounded border border-sky-100">
              Standard Operating Procedure
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit']">
              Standardized Capacity Building Lifecycle
            </h2>
            <p className="text-xs text-slate-500">
              Transitioning from manual zonal paper registries to an audited digital lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Official Enrolment',
                desc: 'Personnel authenticate via Govt Employee ID with Station Head approval.'
              },
              {
                step: '02',
                title: 'Offline-First Study',
                desc: 'PWA document caching enables full access on low-bandwidth 2G observatory channels.'
              },
              {
                step: '03',
                title: 'Timed Assessment',
                desc: 'Standardized 15-minute exams with automated randomized grading.'
              },
              {
                step: '04',
                title: 'Certified Readiness',
                desc: 'Digital credentials with SHA-256 hash automatically update regional skill matrix.'
              }
            ].map((st) => (
              <div key={st.step} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <div className="text-xs font-mono font-bold text-sky-700 bg-sky-100/70 px-2 py-0.5 rounded w-max">
                  STAGE {st.step}
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{st.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Featured Operational Modules */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider">
              Accredited Curricula
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit'] mt-1">
              Featured Operational Modules
            </h2>
          </div>
          <Link
            to="/courses"
            className="text-xs font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1 transition"
          >
            <span>View All Courses</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-mono font-semibold text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                    {course.code}
                  </span>
                  <span className="text-slate-500 font-medium">{course.level}</span>
                </div>

                <h3 className="font-bold text-slate-900 text-sm leading-snug line-clamp-2">
                  {course.title}
                </h3>

                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {course.description}
                </p>

                <div className="text-[11px] text-slate-600 pt-1 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{course.duration}</span>
                  </span>
                  <span className="text-amber-600 font-semibold">★ {course.rating}</span>
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center gap-2">
                <Link
                  to={`/course/${course.id}`}
                  className="flex-1 py-1.5 text-center bg-[#0c2340] hover:bg-[#15345d] text-white rounded-xl text-xs font-medium transition"
                >
                  Open Player
                </Link>
                <button
                  onClick={() => enrollCourse(course.id)}
                  className="px-3 py-1.5 bg-slate-50 border border-slate-300 hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-medium transition"
                >
                  Enroll
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Bottom Institutional Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 to-[#0c2340] text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-slate-800">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold font-['Outfit']">
              Ready to verify operational readiness at your station?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Access the National Skill Matrix to monitor your observatory's certifications or launch automated competency assessments.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/skill-matrix"
              className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-xl text-xs transition shadow-xs"
            >
              Observatory Matrix
            </Link>
            <Link
              to="/courses"
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl text-xs transition border border-white/20"
            >
              Browse Catalog
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
