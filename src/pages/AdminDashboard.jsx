import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
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
  AreaChart,
  Area
} from 'recharts';
import {
  ShieldCheck,
  Users,
  Award,
  BookOpen,
  TrendingUp,
  FileSpreadsheet,
  AlertCircle,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const AdminDashboard = () => {
  const { users, courses, certificates, addToast } = useAuth();

  const pendingUsers = users.filter((u) => u.status === 'Pending Approval');
  const activeTrainees = users.filter((u) => u.role === 'trainee' && u.status === 'Active');
  const activeTrainers = users.filter((u) => u.role === 'trainer' && u.status === 'Active');

  // Chart data: Monthly Certification Issuance
  const monthlyCertifications = [
    { month: 'Apr', certs: 180 },
    { month: 'May', certs: 240 },
    { month: 'Jun', certs: 390 },
    { month: 'Jul', certs: 480 },
    { month: 'Aug', certs: 620 },
    { month: 'Sep', certs: 810 }
  ];

  // Regional Completion Rates
  const regionalCompletion = [
    { region: 'Northern RMC', completion: 92 },
    { region: 'Southern RMC', completion: 94 },
    { region: 'Eastern RMC', completion: 86 },
    { region: 'Western RMC', completion: 89 },
    { region: 'NE RMC', completion: 76 },
    { region: 'Central RMC', completion: 84 }
  ];

  const handleExportCSV = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      'Employee ID,Name,Center,Role,Status,Readiness Index\n' +
      users
        .map(
          (u) =>
            `"${u.employeeId}","${u.name}","${u.center}","${u.role}","${u.status}","${u.readinessScore || 80}%"`
        )
        .join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `IMD_National_Training_Report_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    addToast('Generated and exported national capacity report to CSV!', 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#081426] via-[#1e1b4b] to-[#4c1d95] text-white p-6 sm:p-8 rounded-3xl border border-purple-700 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
            alt="Director Sen"
            className="w-16 h-16 rounded-2xl border-2 border-purple-400 object-cover shadow"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black font-['Outfit']">
                Shri Vikramaditya Sen
              </h1>
              <span className="text-[10px] bg-purple-400/20 text-purple-200 font-bold px-2 py-0.5 rounded border border-purple-300/30 uppercase">
                Director MoES
              </span>
            </div>
            <p className="text-xs text-purple-200 mt-0.5">
              Directorate of National Capacity Building & Human Resources · Ministry of Earth Sciences
            </p>
            <div className="text-[11px] text-purple-300 font-mono mt-1">
              Mission Mausam Central Governance Desk · Prithvi Bhavan New Delhi
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleExportCSV}
            className="px-4 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold transition shadow flex items-center gap-2"
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>Export National Report (CSV)</span>
          </button>
        </div>
      </div>

      {/* Admin KPI Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Active Trainees
          </div>
          <div className="text-3xl font-black text-slate-900 font-['Outfit'] mt-1">
            {activeTrainees.length * 120 + 340}
          </div>
          <div className="text-[11px] text-emerald-600 font-medium mt-1">
            Across 120 IMD stations
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Certificates Issued
          </div>
          <div className="text-3xl font-black text-sky-800 font-['Outfit'] mt-1">
            {certificates.length + 3410}
          </div>
          <div className="text-[11px] text-sky-600 font-medium mt-1">
            Tamper-proof SHA-256
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            National Readiness
          </div>
          <div className="text-3xl font-black text-emerald-700 font-['Outfit'] mt-1">
            86.4%
          </div>
          <div className="text-[11px] text-emerald-600 font-medium mt-1">
            Target benchmark: 80%
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-amber-300 bg-amber-50/30 shadow-sm">
          <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
            Pending Approvals
          </div>
          <div className="text-3xl font-black text-amber-700 font-['Outfit'] mt-1">
            {pendingUsers.length}
          </div>
          <Link
            to="/admin/users"
            className="text-[11px] text-sky-700 font-bold hover:underline flex items-center gap-1 mt-1"
          >
            <span>Review & Approve</span> <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Admin Action Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          to="/admin/users"
          className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-purple-400 transition flex items-center justify-between group"
        >
          <div>
            <h4 className="font-bold text-slate-900 text-sm">User & RBAC Security</h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Approve applicants, assign roles, inspect audit trail
            </p>
          </div>
          <Users className="w-5 h-5 text-purple-600 group-hover:scale-110 transition" />
        </Link>

        <Link
          to="/admin/homepage"
          className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-purple-400 transition flex items-center justify-between group"
        >
          <div>
            <h4 className="font-bold text-slate-900 text-sm">Homepage Directives</h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Manage national alerts, marquee ticker, achievements
            </p>
          </div>
          <Sparkles className="w-5 h-5 text-amber-600 group-hover:scale-110 transition" />
        </Link>

        <Link
          to="/competency-mapping"
          className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-purple-400 transition flex items-center justify-between group"
        >
          <div>
            <h4 className="font-bold text-slate-900 text-sm">Competency Engine</h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Automated trainer-course matching matrix
            </p>
          </div>
          <ShieldCheck className="w-5 h-5 text-teal-600 group-hover:scale-110 transition" />
        </Link>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Chart 1: Monthly Certification Issuance Trend */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-slate-900 text-sm font-['Outfit']">
                Monthly Certified Personnel Growth
              </h3>
              <p className="text-xs text-slate-500">Accelerated under Mission Mausam 2026</p>
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyCertifications}>
                <defs>
                  <linearGradient id="colorCerts" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stop-color="#4c1d95" stop-opacity={0.8}/>
                    <stop offset="95%" stop-color="#4c1d95" stop-opacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Area type="monotone" dataKey="certs" stroke="#4c1d95" fillOpacity={1} fill="url(#colorCerts)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Regional Completion Rates */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-slate-900 text-sm font-['Outfit']">
                Regional Meteorological Centre (RMC) Completion Velocity
              </h3>
              <p className="text-xs text-slate-500">% of Enrolled Staff Cleared</p>
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={regionalCompletion}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="region" tick={{ fontSize: 10 }} />
                <YAxis domain={[50, 100]} tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="completion" fill="#6d28d9" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

    </div>
  );
};
