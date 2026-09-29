import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLowBandwidth } from '../context/LowBandwidthContext';
import { MOCK_ANNOUNCEMENTS, MOCK_ACHIEVEMENTS } from '../data/mockData';
import { SmartCompetencyMapper } from '../components/differentiators/SmartCompetencyMapper';
import { SkillMatrixHeatmap } from '../components/differentiators/SkillMatrixHeatmap';
import { CertificateVerifier } from '../components/differentiators/CertificateVerifier';
import {
  CloudLightning,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  BookOpen,
  Users,
  Award,
  Zap,
  CheckCircle2,
  Clock,
  Radio,
  FileCheck,
  TrendingUp,
  Cpu,
  WifiOff,
  Star,
  ChevronRight,
  Bell
} from 'lucide-react';

export const LandingPage = () => {
  const { currentUser, courses, enrollCourse } = useAuth();
  const { lowBandwidthMode, toggleLowBandwidth } = useLowBandwidth();
  const [activeTab, setActiveTab] = useState('courses');

  // Featured courses: first 4
  const featuredCourses = courses.slice(0, 4);

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. Live Announcements Marquee / Ticker */}
      <section className="bg-gradient-to-r from-amber-500/10 via-sky-500/10 to-amber-500/10 border-b border-amber-500/20 py-2.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-bold text-amber-700 uppercase tracking-wider bg-amber-100 px-2.5 py-0.5 rounded-full shrink-0 border border-amber-300">
            <Bell className="w-3.5 h-3.5 animate-bounce" />
            <span>National Directive</span>
          </div>
          <div className="overflow-hidden relative w-full">
            <div className="flex items-center gap-6 whitespace-nowrap overflow-x-auto no-scrollbar py-0.5">
              {MOCK_ANNOUNCEMENTS.map((ann) => (
                <div key={ann.id} className="inline-flex items-center gap-2 text-slate-800 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
                  <span className="font-semibold text-sky-900">{ann.title}</span>
                  <span className="text-[10px] text-slate-500">({ann.date})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#081426] via-[#0b1e36] to-[#0d3880] text-white p-8 sm:p-12 lg:p-16 overflow-hidden border border-slate-700/80 shadow-2xl">
          
          {/* Subtle Radar Ring Background Visual */}
          <div className="absolute right-0 top-0 w-96 h-96 opacity-10 pointer-events-none transform translate-x-20 -translate-y-20">
            <img src="/imd-logo.svg" alt="Radar Pattern" className="w-full h-full object-contain" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>MoES Mission Mausam & SIH 2026 Initiative</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] font-['Outfit']">
              CAPACITY CONNECT
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-amber-300 mt-1">
                Empowering India's Meteorological Workforce
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              A unified, cloud-native Learning Management & Competency Tracking System designed specifically for the Ministry of Earth Sciences (MoES) and India Meteorological Department (IMD). Connecting all 6 Regional Meteorological Centres (RMCs) and 100+ high-altitude, coastal, and island observatories with zero latency.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                to={currentUser ? (currentUser.role === 'admin' ? '/admin' : currentUser.role === 'trainer' ? '/trainer' : '/trainee') : '/login'}
                className="px-6 py-3 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white font-bold rounded-xl text-sm transition shadow-lg flex items-center gap-2 group"
              >
                <span>{currentUser ? `Go to ${currentUser.role.toUpperCase()} Workspace` : 'Access Trainee & Scientist Portal'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>

              <Link
                to="/courses"
                className="px-6 py-3 bg-slate-800/90 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm transition border border-slate-600 flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-sky-400" />
                <span>Explore Course Catalog</span>
              </Link>

              <button
                onClick={toggleLowBandwidth}
                className={`px-4 py-3 rounded-xl text-xs font-semibold transition border flex items-center gap-2 ${
                  lowBandwidthMode
                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                    : 'bg-slate-900/60 hover:bg-slate-900 text-slate-300 border-slate-700'
                }`}
              >
                <WifiOff className="w-4 h-4" />
                <span>{lowBandwidthMode ? '2G Bandwidth Active' : 'Low-Bandwidth Mode'}</span>
              </button>
            </div>

            {/* Feature Pills */}
            <div className="pt-4 border-t border-slate-700/60 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Offline PWA Caching</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>AI Competency Matching</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Verifiable SHA-256 Certificates</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Emergency Scenario Drills</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. National Stats Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {MOCK_ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.id}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition text-center"
            >
              <div className="text-3xl sm:text-4xl font-black text-sky-800 font-['Outfit']">
                {ach.metric}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                {ach.title}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                {ach.subtitle}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Interactive How It Works Workflow Pipeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            Standardized Government Lifecycle
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-['Outfit'] mt-2">
            End-to-End Capacity Building Workflow
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Replaces manual paper registers and fragmented local training with a verified 6-stage digital pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
          {[
            { step: '01', title: 'Register', desc: 'Station personnel register with Govt Employee ID', icon: Users },
            { step: '02', title: 'Admin Verification', desc: 'MoES / Station Head RBAC approval', icon: ShieldCheck },
            { step: '03', title: 'Domain Enroll', desc: 'Choose specialized DWR, NWP or Cyclone track', icon: BookOpen },
            { step: '04', title: 'Learn & PWA Cache', desc: 'Adaptive bitrate video & offline docs', icon: CloudLightning },
            { step: '05', title: 'Timed MCQ Test', desc: 'Real-time countdown & auto-grading', icon: Clock },
            { step: '06', title: 'SHA-256 Certify', desc: 'Tamper-proof verifiable credential', icon: FileCheck },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm relative group hover:border-sky-400 transition"
              >
                <div className="text-sky-600 font-mono font-bold text-xs mb-2">
                  STAGE {item.step}
                </div>
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-3 group-hover:bg-sky-600 group-hover:text-white transition">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
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

      {/* 7. Featured Courses Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
              Curriculum Catalog
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-['Outfit'] mt-2">
              Featured Operational Modules
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Curated by IMD senior scientists and validated by MoES Training Board.
            </p>
          </div>
          <Link
            to="/courses"
            className="text-xs font-semibold text-sky-600 hover:text-sky-800 flex items-center gap-1 group"
          >
            <span>View All Courses</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col group"
            >
              {/* Course Thumbnail Image */}
              <div className="relative h-40 overflow-hidden bg-slate-900">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute top-2 left-2 bg-[#0b1e36]/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-sky-300 border border-sky-400/30">
                  {course.code}
                </div>
                <div className="absolute top-2 right-2 bg-emerald-600 text-white px-2 py-0.5 rounded text-[10px] font-bold">
                  {course.level}
                </div>
              </div>

              {/* Course Details */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-sky-700 uppercase tracking-wide">
                    {course.domain}
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mt-1 line-clamp-2 leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1 text-amber-600 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      {course.rating}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      to={`/course/${course.id}`}
                      className="flex-1 text-center py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-semibold transition shadow-sm"
                    >
                      Open Player
                    </Link>
                    <button
                      onClick={() => enrollCourse(course.id)}
                      className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition"
                      title="Enroll"
                    >
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Public Certificate Verification Quick Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CertificateVerifier initialCertId="IMD-CERT-2025-SAT-4819" />
      </section>

      {/* 9. Station Testimonials & Governance Endorsements */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100/80 rounded-3xl p-8 sm:p-10 border border-slate-200">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit']">
              Trusted Across India's Meteorological Network
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Field observations on transition from manual logs to Capacity Connect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-xs space-y-3">
              <p className="italic text-slate-700 leading-relaxed">
                "At Leh observatory, 2G connectivity and severe winters previously meant waiting months for offline training in Delhi. Capacity Connect's PWA caching allows our team to study radar and avalanche manuals seamlessly offline."
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-xs">
                  VR
                </div>
                <div>
                  <div className="font-bold text-slate-900">Vikram Rathore</div>
                  <div className="text-[11px] text-slate-500">MC Leh Ladakh (High Altitude)</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-xs space-y-3">
              <p className="italic text-slate-700 leading-relaxed">
                "During cyclone season, having an exact Readiness Index for all coastal radar stations ensures zero guesswork. The Competency Engine matched our junior forecasters with Dr. Sangeeta Rao for an emergency calibration drill."
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-xs">
                  MS
                </div>
                <div>
                  <div className="font-bold text-slate-900">Dr. Meenakshi Sundaram</div>
                  <div className="text-[11px] text-slate-500">ACWC Lead, RMC Chennai</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-xs space-y-3">
              <p className="italic text-slate-700 leading-relaxed">
                "The verifiable SHA-256 certificates eliminated counterfeit claims. Every training record is now linked to employee ID and station code, saving MoES over ₹14 Crores annually in offline TA/DA expenditures."
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-xs">
                  VS
                </div>
                <div>
                  <div className="font-bold text-slate-900">Shri Vikramaditya Sen</div>
                  <div className="text-[11px] text-slate-500">Director Capacity Building, MoES</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
