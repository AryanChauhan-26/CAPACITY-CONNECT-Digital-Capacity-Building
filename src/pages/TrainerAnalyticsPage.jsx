import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import {
  BarChart3,
  TrendingUp,
  Users,
  Search,
  CheckCircle2,
  AlertTriangle,
  Award,
  Filter
} from 'lucide-react';

export const TrainerAnalyticsPage = () => {
  const { users } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');

  // Sample analytics data for charts
  const scoreDistribution = [
    { range: '50-60%', count: 18, fill: '#f87171' },
    { range: '61-70%', count: 42, fill: '#fbbf24' },
    { range: '71-80%', count: 120, fill: '#38bdf8' },
    { range: '81-90%', count: 245, fill: '#0284c7' },
    { range: '91-100%', count: 310, fill: '#10b981' }
  ];

  const regionalParticipation = [
    { region: 'Northern RMC', count: 320 },
    { region: 'Southern RMC', count: 280 },
    { region: 'Eastern RMC', count: 210 },
    { region: 'Western RMC', count: 260 },
    { region: 'NE RMC', count: 140 },
    { region: 'Central RMC', count: 160 }
  ];

  const COLORS = ['#0284c7', '#0d9488', '#f59e0b', '#10b981', '#6366f1', '#ec4899'];

  const trainees = users.filter((u) => u.role === 'trainee');

  const filteredTrainees = trainees.filter(
    (t) =>
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.center?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.designation?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#081426] via-[#044e54] to-[#0d9488] text-white p-6 sm:p-8 rounded-3xl border border-teal-700 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/20 text-teal-200 text-xs font-semibold uppercase tracking-wider mb-2 border border-teal-300/30">
            <BarChart3 className="w-4 h-4" />
            <span>Trainee Learning Analytics & Drill-Down</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black font-['Outfit']">
            National Performance & Progression Suite
          </h1>
          <p className="text-xs text-teal-100 mt-0.5">
            Monitor real-time assessment pass velocities, score distributions, and observatory-specific competency gaps.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-slate-900/60 p-3 rounded-xl border border-teal-400/30 text-right text-xs">
            <div className="text-teal-200">Active Evaluated Cohort</div>
            <div className="text-lg font-bold text-white">1,135 Forecasters</div>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Chart 1: Score Distribution */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-slate-900 text-sm font-['Outfit']">
                Assessment Score Distribution Histogram
              </h3>
              <p className="text-xs text-slate-500">Across 15-Minute Timed MCQ Tests (Passing Benchmark: 75%)</p>
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={scoreDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="range" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                  {scoreDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Regional Participation Breakdown */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-slate-900 text-sm font-['Outfit']">
                Regional Training Participation Volume
              </h3>
              <p className="text-xs text-slate-500">Total Personnel Upskilled by RMC Territory</p>
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={regionalParticipation} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis type="number" tick={{ fontSize: 11 }} />
                <YAxis dataKey="region" type="category" width={110} tick={{ fontSize: 10 }} />
                <Tooltip />
                <Bar dataKey="count" fill="#0d9488" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Trainee Drill-Down Table */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h3 className="font-bold text-slate-900 text-base font-['Outfit']">
              Individual Trainee Performance Directory
            </h3>
            <p className="text-xs text-slate-500">
              Showing {filteredTrainees.length} registered station personnel
            </p>
          </div>

          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search by name, station, designation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-xs pl-9 pr-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 w-64"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-700">
            <thead className="text-[11px] uppercase bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-3">Trainee</th>
                <th className="py-3 px-3">Station / RMC</th>
                <th className="py-3 px-3">Designation</th>
                <th className="py-3 px-3 text-center">Readiness Index</th>
                <th className="py-3 px-3 text-center">Status</th>
                <th className="py-3 px-3 text-center">Certifications</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredTrainees.map((t) => (
                <tr key={t.id} className="hover:bg-slate-50 transition">
                  <td className="py-3 px-3">
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{t.employeeId}</div>
                  </td>
                  <td className="py-3 px-3 text-slate-600">{t.center}</td>
                  <td className="py-3 px-3 text-slate-700">{t.designation}</td>
                  <td className="py-3 px-3 text-center">
                    <span className="font-mono font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                      {t.readinessScore || 80}%
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      {t.status}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                      {t.certificates?.length || 1} Issued
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
