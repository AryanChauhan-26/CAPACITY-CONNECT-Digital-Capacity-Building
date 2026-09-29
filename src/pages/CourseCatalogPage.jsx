import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import {
  Search,
  BookOpen,
  Filter,
  Clock,
  Star,
  Users,
  Award,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const CourseCatalogPage = () => {
  const { courses, currentUser, enrollCourse } = useAuth();
  const [search, setSearch] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  // Domains list
  const domains = [
    'All',
    'Radar & Remote Sensing',
    'Modeling & Computing',
    'Cyclone Tracking & Severe Weather',
    'Satellite Meteorology',
    'Agro-Meteorology',
    'Oceanography & Coastal Hazards',
    'Instrumentation & Surface Obs',
    'Aviation Meteorology'
  ];

  const levels = ['All', 'Foundational', 'Intermediate', 'Advanced', 'Advanced Specialist'];

  const filteredCourses = courses.filter((c) => {
    const matchesSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase());
    const matchesDomain = selectedDomain === 'All' || c.domain.toLowerCase().includes(selectedDomain.toLowerCase());
    const matchesLevel = selectedLevel === 'All' || c.level.toLowerCase().includes(selectedLevel.toLowerCase());
    return matchesSearch && matchesDomain && matchesLevel;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#081426] via-[#0b1e36] to-[#0d3880] rounded-3xl p-8 text-white border border-slate-700 shadow-xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold uppercase tracking-wider border border-sky-400/30">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Standardized IMD Operational Curricula</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-['Outfit']">
            National Meteorological Course Catalog
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            Accredited capacity-building modules covering Doppler Weather Radars, Numerical Weather Prediction (WRF/NCUM), Tropical Cyclone early warnings, INSAT-3DS payloads, and Agro-advisory services.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          
          {/* Search Field */}
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search by title, subject code (e.g. IMD-DWR-401), or keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
            />
          </div>

          {/* Level Filter */}
          <div className="w-full md:w-56">
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              {levels.map((lvl) => (
                <option key={lvl} value={lvl}>
                  Level: {lvl}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-xs font-semibold text-slate-500 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-sky-600" /> Domain:
          </span>
          {domains.map((dom) => {
            const isSelected = selectedDomain === dom;
            return (
              <button
                key={dom}
                onClick={() => setSelectedDomain(dom)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                  isSelected
                    ? 'bg-sky-600 text-white font-bold shadow'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {dom}
              </button>
            );
          })}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="space-y-4">
        <div className="text-xs text-slate-500 font-medium">
          Showing <span className="font-bold text-slate-900">{filteredCourses.length}</span> operational courses matching your criteria.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => {
            const isEnrolled = currentUser?.enrolledCourseIds?.includes(course.id);
            const isCompleted = currentUser?.completedCourseIds?.includes(course.id);

            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col group"
              >
                {/* Image & Badges */}
                <div className="relative h-44 bg-slate-900 overflow-hidden">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#0b1e36]/80 backdrop-blur-md px-2.5 py-0.5 rounded text-[11px] font-mono text-sky-300 border border-sky-400/30">
                    {course.code}
                  </div>
                  <div className="absolute top-2.5 right-2.5 bg-emerald-600 text-white px-2.5 py-0.5 rounded text-[11px] font-bold">
                    {course.level}
                  </div>
                  {isCompleted && (
                    <div className="absolute bottom-2.5 right-2.5 bg-amber-500 text-slate-950 px-2 py-0.5 rounded text-[10px] font-black flex items-center gap-1 shadow">
                      <CheckCircle2 className="w-3 h-3" /> Certified
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-[11px] font-semibold text-sky-700 uppercase tracking-wide">
                      {course.domain}
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mt-1 line-clamp-2 leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1 text-amber-600 font-semibold">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        {course.rating} ({course.enrolledCount} trained)
                      </span>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <Link
                        to={`/course/${course.id}`}
                        className="flex-1 py-2 text-center bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-semibold transition shadow-sm"
                      >
                        {isEnrolled ? 'Open Player' : 'View Syllabus'}
                      </Link>

                      {isEnrolled ? (
                        <span className="px-3 py-2 bg-emerald-50 text-emerald-700 border border-emerald-300 rounded-xl text-xs font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Enrolled</span>
                        </span>
                      ) : (
                        <button
                          onClick={() => enrollCourse(course.id)}
                          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition shadow-sm"
                        >
                          Enroll Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
