import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLowBandwidth } from '../context/LowBandwidthContext';
import { MOCK_ANNOUNCEMENTS, MOCK_ACHIEVEMENTS } from '../data/mockData';
import { SmartCompetencyMapper } from '../components/differentiators/SmartCompetencyMapper';
import { SkillMatrixHeatmap } from '../components/differentiators/SkillMatrixHeatmap';
import { CertificateVerifier } from '../components/differentiators/CertificateVerifier';
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
  MapPin,
  Building2,
  Send,
  WifiOff
} from 'lucide-react';

export const LandingPage = () => {
  const { currentUser, courses, enrollCourse } = useAuth();
  const { lowBandwidthMode, toggleLowBandwidth } = useLowBandwidth();

  // Featured courses: first 4
  const featuredCourses = courses.slice(0, 4);

  return (
    <div id="main-content" className="space-y-12 pb-16">
      
      {/* 1. Live Announcements Bulletin Marquee */}
      <section className="bg-amber-50/80 border-b border-amber-200/80 py-2 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-bold text-amber-900 uppercase tracking-wider bg-amber-200/70 px-2.5 py-0.5 rounded text-[11px] shrink-0 border border-amber-300">
            <Bell className="w-3.5 h-3.5 text-amber-800" />
            <span>Latest Directives</span>
          </div>
          <div className="overflow-hidden relative w-full">
            <div className="flex items-center gap-6 whitespace-nowrap overflow-x-auto no-scrollbar py-0.5">
              {MOCK_ANNOUNCEMENTS.map((ann) => (
                <div key={ann.id} className="inline-flex items-center gap-2 text-slate-800 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-700"></span>
                  <span className="font-semibold text-slate-900">{ann.title}</span>
                  <span className="text-[10px] text-slate-500">[{ann.date}]</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Hero Section: Clean, Authoritative Government Portal Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <div className="bg-gradient-to-r from-[#0c2340] via-[#102e54] to-[#143d70] rounded-2xl p-8 sm:p-12 text-white shadow-md border-b-4 border-amber-500 relative overflow-hidden">
          
          <div className="relative z-10 max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-semibold uppercase tracking-wider border border-white/20">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Smart India Hackathon 2026 · Problem Statement ID: 26075</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-['Outfit'] leading-tight">
              CAPACITY CONNECT
              <span className="block text-sky-200 font-medium text-lg sm:text-2xl mt-1">
                A Digital Capacity Building & LMS Portal for India's Meteorological Workforce
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              An institutional Learning Management and Competency Tracking System developed for the <strong>Ministry of Earth Sciences (MoES)</strong> and <strong>India Meteorological Department (IMD)</strong>. Unifying 6 Regional Meteorological Centres (RMCs) and 120+ observatories into a standardized, low-bandwidth-ready digital training ecosystem.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to={currentUser ? (currentUser.role === 'admin' ? '/admin' : currentUser.role === 'trainer' ? '/trainer' : '/trainee') : '/login'}
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-lg text-xs sm:text-sm transition shadow flex items-center gap-2"
              >
                <span>{currentUser ? `Go to ${currentUser.role.toUpperCase()} Workspace` : 'Sign In to Official LMS Portal'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/courses"
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg text-xs sm:text-sm transition border border-white/30 flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-sky-300" />
                <span>Browse Course Catalog</span>
              </Link>

              <button
                onClick={toggleLowBandwidth}
                className={`px-3.5 py-2.5 rounded-lg text-xs font-semibold transition border flex items-center gap-1.5 ${
                  lowBandwidthMode
                    ? 'bg-amber-400 text-slate-950 border-amber-300 font-bold'
                    : 'bg-black/30 hover:bg-black/50 text-slate-200 border-white/20'
                }`}
              >
                <WifiOff className="w-3.5 h-3.5" />
                <span>{lowBandwidthMode ? '2G Bandwidth Active' : 'Low-Bandwidth Mode'}</span>
              </button>
            </div>

            {/* Feature Badges */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Offline PWA Enabled
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> AI Competency Matching
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> SHA-256 Verifiable Certificates
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Emergency Drill Readiness
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Official Government Statistics Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {MOCK_ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.id}
              className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm text-center"
            >
              <div className="text-2xl sm:text-3xl font-black text-[#0c2340] font-['Outfit']">
                {ach.metric}
              </div>
              <div className="text-xs font-bold text-slate-800 mt-1">
                {ach.title}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                {ach.subtitle}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. How It Works Pipeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] font-bold text-sky-800 uppercase tracking-wider bg-sky-50 px-2.5 py-1 rounded border border-sky-200">
              Government Standard Process
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit'] mt-1.5">
              Standardized Capacity Building Lifecycle
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              End-to-end digital lifecycle replacing paper registers with certified verification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {[
              { step: '1', title: 'Register', desc: 'Personnel sign up with Official Govt Employee ID' },
              { step: '2', title: 'RBAC Approval', desc: 'Station Head / MoES Admin authorization' },
              { step: '3', title: 'Enrollment', desc: 'Select DWR, NWP or Cyclone modules' },
              { step: '4', title: 'Learn & Cache', desc: 'Offline PWA documents & 2G text mode' },
              { step: '5', title: 'Timed Test', desc: '15-min countdown & instant grading' },
              { step: '6', title: 'Certification', desc: 'Verifiable SHA-256 digital certificate' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-1 relative"
              >
                <div className="w-7 h-7 mx-auto rounded-full bg-[#0c2340] text-white font-bold text-xs flex items-center justify-center mb-1">
                  {item.step}
                </div>
                <div className="font-bold text-slate-900 text-xs">{item.title}</div>
                <div className="text-[11px] text-slate-500 leading-snug">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Key Differentiator #1: Smart Competency Mapping Engine */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SmartCompetencyMapper />
      </section>

      {/* 6. Key Differentiator #2: Automated Skill Matrix & National Readiness Index */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SkillMatrixHeatmap />
      </section>

      {/* 7. Featured Operational Modules */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit']">
              Featured Operational Modules
            </h2>
            <p className="text-xs text-slate-600">
              National curricula accredited by the Ministry of Earth Sciences Training Cell.
            </p>
          </div>
          <Link
            to="/courses"
            className="text-xs font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1"
          >
            <span>View All Courses</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-mono font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                    {course.code}
                  </span>
                  <span className="text-slate-500 font-semibold">{course.level}</span>
                </div>

                <h3 className="font-bold text-slate-900 text-sm leading-snug line-clamp-2">
                  {course.title}
                </h3>

                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {course.description}
                </p>

                <div className="text-[11px] text-slate-600 pt-1 flex items-center justify-between">
                  <span>{course.duration}</span>
                  <span className="text-amber-700 font-semibold">★ {course.rating}</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center gap-2">
                <Link
                  to={`/course/${course.id}`}
                  className="flex-1 py-1.5 text-center bg-[#0c2340] hover:bg-[#143d70] text-white rounded-lg text-xs font-semibold transition"
                >
                  Open Player
                </Link>
                <button
                  onClick={() => enrollCourse(course.id)}
                  className="px-3 py-1.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold transition"
                >
                  Enroll
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Public Certificate Registry Quick Lookup */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CertificateVerifier initialCertId="IMD-CERT-2025-SAT-4819" />
      </section>

    </div>
  );
};
