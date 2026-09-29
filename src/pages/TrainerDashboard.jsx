import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import {
  Users,
  BookOpen,
  Award,
  BarChart3,
  Upload,
  FileCheck,
  TrendingUp,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const TrainerDashboard = () => {
  const { currentUser, courses, users } = useAuth();

  const trainer = currentUser?.role === 'trainer' ? currentUser : {
    name: 'Dr. Sangeeta Rao',
    designation: 'Scientist-F & Chief Radar Scientist',
    center: 'RMC New Delhi (HQ)',
    employeeId: 'IMD-1998-1042',
    totalTraineesTrained: 840,
    averageRating: 4.9,
    assignedCourseIds: ['course-1', 'course-4']
  };

  const myCourses = courses.filter((c) =>
    trainer.assignedCourseIds?.includes(c.id) || c.trainer.name.includes('Sangeeta')
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#081426] via-[#044e54] to-[#0d9488] text-white p-6 sm:p-8 rounded-3xl border border-teal-700 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
            alt={trainer.name}
            className="w-16 h-16 rounded-2xl border-2 border-teal-300 object-cover shadow"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black font-['Outfit']">{trainer.name}</h1>
              <span className="text-[10px] bg-teal-400/20 text-teal-200 font-bold px-2 py-0.5 rounded border border-teal-300/30 uppercase">
                Trainer Console
              </span>
            </div>
            <p className="text-xs text-teal-100 mt-0.5">
              {trainer.designation} · {trainer.center} ({trainer.employeeId})
            </p>
            <div className="text-[11px] text-teal-200 mt-1">
              Directorate of Radar Meteorology & National Capacity Building Cell
            </div>
          </div>
        </div>

        {/* Quick Trainer Metrics */}
        <div className="flex items-center gap-4 bg-slate-950/40 p-3.5 rounded-2xl border border-teal-400/30 backdrop-blur-md">
          <div className="text-center px-3 border-r border-teal-600/40">
            <div className="text-[10px] text-teal-200 uppercase font-semibold">Trainees</div>
            <div className="text-xl sm:text-2xl font-black text-white font-['Outfit']">
              {trainer.totalTraineesTrained || 840}
            </div>
          </div>
          <div className="text-center px-3 border-r border-teal-600/40">
            <div className="text-[10px] text-teal-200 uppercase font-semibold">Courses</div>
            <div className="text-xl sm:text-2xl font-black text-teal-300 font-['Outfit']">
              {myCourses.length}
            </div>
          </div>
          <div className="text-center px-3">
            <div className="text-[10px] text-teal-200 uppercase font-semibold">Rating</div>
            <div className="text-xl sm:text-2xl font-black text-amber-300 font-['Outfit']">
              ★ {trainer.averageRating || 4.9}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Navigation Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link
          to="/trainer/content"
          className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-teal-400 transition flex items-center gap-4 group"
        >
          <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition">
            <Upload className="w-6 h-6" />
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm">Content Repository</div>
            <div className="text-xs text-slate-500">Upload technical docs & radar guides</div>
          </div>
        </Link>

        <Link
          to="/trainer/evaluations"
          className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-teal-400 transition flex items-center gap-4 group"
        >
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition">
            <FileCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm">Evaluation Suite</div>
            <div className="text-xs text-slate-500">Build MCQ tests & timed question banks</div>
          </div>
        </Link>

        <Link
          to="/trainer/analytics"
          className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-teal-400 transition flex items-center gap-4 group"
        >
          <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm">Trainee Analytics</div>
            <div className="text-xs text-slate-500">Performance charts & station drill-down</div>
          </div>
        </Link>
      </div>

      {/* Courses Lead by Trainer */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="font-bold text-slate-900 text-base font-['Outfit']">
            Operational Courses Under My Directorship
          </h3>
          <Link to="/courses" className="text-xs text-teal-700 font-semibold hover:underline">
            View All in Catalog
          </Link>
        </div>

        <div className="space-y-4">
          {myCourses.map((c) => (
            <div
              key={c.id}
              className="p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-50/40"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] bg-teal-100 text-teal-800 px-2 py-0.5 rounded font-bold">
                    {c.code}
                  </span>
                  <span className="text-[11px] text-slate-500">{c.domain}</span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{c.title}</h4>
                <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
                  <span>Enrolled: {c.enrolledCount} personnel</span>
                  <span>•</span>
                  <span>Completion Rate: {c.completionRate}%</span>
                  <span>•</span>
                  <span>Rating: ★ {c.rating}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  to={`/course/${c.id}`}
                  className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold transition"
                >
                  View as Trainee
                </Link>
                <Link
                  to="/trainer/evaluations"
                  className="px-3.5 py-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-semibold transition"
                >
                  Manage Quiz
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Submissions & Auto-Graded Assessments Table */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="font-bold text-slate-900 text-base font-['Outfit']">
          Recent Trainee Assessment Submissions
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-700">
            <thead className="text-[11px] uppercase bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-2.5 px-3">Trainee Name</th>
                <th className="py-2.5 px-3">Station / RMC</th>
                <th className="py-2.5 px-3">Assessed Module</th>
                <th className="py-2.5 px-3 text-center">Score</th>
                <th className="py-2.5 px-3 text-center">Status</th>
                <th className="py-2.5 px-3 text-right">Certificate ID</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { name: 'Dr. Ramesh Sharma', station: 'MC Pune', course: 'DWR Dual-Pol Operations', score: '94%', status: 'Passed', cert: 'IMD-CERT-2025-SAT-4819' },
                { name: 'Ananya Sen', station: 'RMC Kolkata', course: 'DWR Dual-Pol Operations', score: '88%', status: 'Passed', cert: 'IMD-CERT-2026-DWR-9012' },
                { name: 'Vikram Rathore', station: 'MC Leh Ladakh', course: 'AWS Sensor Calibration', score: '76%', status: 'Passed', cert: 'IMD-CERT-2026-AWS-1102' },
                { name: 'Priya Pillai', station: 'RMC Chennai', course: 'Tropical Cyclone Track Forecasting', score: '96%', status: 'Passed', cert: 'IMD-CERT-2026-TC-7741' },
                { name: 'Sunil Kumar Das', station: 'MC Bhubaneswar', course: 'DWR Dual-Pol Operations', score: '68%', status: 'Retake Required', cert: '-' },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition">
                  <td className="py-3 px-3 font-semibold text-slate-900">{row.name}</td>
                  <td className="py-3 px-3 text-slate-600">{row.station}</td>
                  <td className="py-3 px-3 text-slate-700">{row.course}</td>
                  <td className="py-3 px-3 text-center font-bold text-slate-900">{row.score}</td>
                  <td className="py-3 px-3 text-center">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      row.status === 'Passed'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-rose-100 text-rose-800'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right font-mono text-sky-700 font-semibold">{row.cert}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
