import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Users,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Search,
  Filter,
  UserCheck,
  Clock,
  History,
  AlertTriangle
} from 'lucide-react';

export const UserManagementPage = () => {
  const { users, approveUser, rejectUser, auditLogs, addToast } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  const pendingUsers = users.filter((u) => u.status === 'Pending Approval');
  const activeUsers = users.filter((u) => u.status !== 'Pending Approval');

  const filteredActiveUsers = activeUsers.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.center?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'All' || u.role.toLowerCase() === roleFilter.toLowerCase();
    return matchesSearch && matchesRole;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#081426] via-[#1e1b4b] to-[#4c1d95] text-white p-6 sm:p-8 rounded-3xl border border-purple-700 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-400/20 text-purple-200 text-xs font-semibold uppercase tracking-wider mb-2 border border-purple-300/30">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>MoES Role-Based Access Control (RBAC)</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black font-['Outfit']">
            Personnel Directory & Registration Governance
          </h1>
          <p className="text-xs text-purple-200 mt-0.5">
            Verify official identity records, approve observatory personnel, and inspect tamper-proof audit trails.
          </p>
        </div>

        <div className="text-xs bg-slate-900/60 p-3 rounded-xl border border-purple-400/30 text-right">
          <div className="text-purple-300">Pending Authorization</div>
          <div className="text-lg font-bold text-amber-300">{pendingUsers.length} Applicants</div>
        </div>
      </div>

      {/* 1. Pending Approvals Queue */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-slate-900 text-base font-['Outfit']">
              Pending Station Personnel Registrations ({pendingUsers.length})
            </h3>
          </div>
          <span className="text-xs text-slate-500">
            Requires National Director approval before LMS access
          </span>
        </div>

        {pendingUsers.length === 0 ? (
          <div className="p-8 text-center text-xs text-slate-500 bg-slate-50 rounded-xl">
            No registration requests pending approval at this time.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-slate-700">
              <thead className="text-[11px] uppercase bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3">Applicant Name</th>
                  <th className="py-2.5 px-3">Employee ID</th>
                  <th className="py-2.5 px-3">Center / Station</th>
                  <th className="py-2.5 px-3">Designation</th>
                  <th className="py-2.5 px-3">Requested Role</th>
                  <th className="py-2.5 px-3 text-right">Authorization Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pendingUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50 transition">
                    <td className="py-3 px-3">
                      <div className="font-bold text-slate-900">{user.name}</div>
                      <div className="text-[11px] text-slate-500">{user.email}</div>
                    </td>
                    <td className="py-3 px-3 font-mono font-bold text-slate-800">
                      {user.employeeId}
                    </td>
                    <td className="py-3 px-3 font-medium text-slate-700">{user.center}</td>
                    <td className="py-3 px-3 text-slate-600">{user.designation}</td>
                    <td className="py-3 px-3 capitalize">
                      <span className="px-2 py-0.5 rounded font-bold text-[10px] bg-sky-100 text-sky-800">
                        {user.role}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right space-x-2">
                      <button
                        onClick={() => approveUser(user.id, 'trainee')}
                        className="px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow-sm transition"
                        title="Approve as Trainee"
                      >
                        Approve (Trainee)
                      </button>
                      <button
                        onClick={() => approveUser(user.id, 'trainer')}
                        className="px-2.5 py-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-semibold shadow-sm transition"
                        title="Approve as Trainer"
                      >
                        Approve (Trainer)
                      </button>
                      <button
                        onClick={() => rejectUser(user.id)}
                        className="px-2.5 py-1.5 bg-rose-100 hover:bg-rose-200 text-rose-800 rounded-lg text-xs font-semibold transition"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* 2. Registered Users Directory */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h3 className="font-bold text-slate-900 text-base font-['Outfit']">
              Active National Personnel Directory ({filteredActiveUsers.length})
            </h3>
            <p className="text-xs text-slate-500">Filter by role or search by name and observatory</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search personnel..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="text-xs pl-9 pr-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 w-56"
              />
            </div>

            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="text-xs px-3 py-2 border border-slate-300 rounded-xl"
            >
              <option value="All">All Roles</option>
              <option value="trainee">Trainees</option>
              <option value="trainer">Trainers</option>
              <option value="admin">Administrators</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-700">
            <thead className="text-[11px] uppercase bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-2.5 px-3">Personnel</th>
                <th className="py-2.5 px-3">Employee ID</th>
                <th className="py-2.5 px-3">Station / RMC</th>
                <th className="py-2.5 px-3">Designation</th>
                <th className="py-2.5 px-3">Assigned Role</th>
                <th className="py-2.5 px-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredActiveUsers.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50 transition">
                  <td className="py-3 px-3 font-semibold text-slate-900">{u.name}</td>
                  <td className="py-3 px-3 font-mono text-slate-700">{u.employeeId}</td>
                  <td className="py-3 px-3 text-slate-600">{u.center}</td>
                  <td className="py-3 px-3 text-slate-700">{u.designation}</td>
                  <td className="py-3 px-3 capitalize">
                    <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                      u.role === 'admin' ? 'bg-purple-100 text-purple-800' :
                      u.role === 'trainer' ? 'bg-teal-100 text-teal-800' :
                      'bg-sky-100 text-sky-800'
                    }`}>
                      {u.role}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="px-2 py-0.5 rounded font-bold text-[10px] bg-emerald-100 text-emerald-800">
                      {u.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Security Audit Trail Log */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <History className="w-5 h-5 text-purple-600" />
            <h3 className="font-bold text-slate-900 text-base font-['Outfit']">
              Security & Governance Audit Trail
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-mono">
            CERT-In Compliant Log Registry
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-700">
            <thead className="text-[11px] uppercase bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-2.5 px-3">Timestamp (IST)</th>
                <th className="py-2.5 px-3">Action</th>
                <th className="py-2.5 px-3">Actor</th>
                <th className="py-2.5 px-3">Source IP</th>
                <th className="py-2.5 px-3">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono text-[11px]">
              {auditLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50 transition">
                  <td className="py-2.5 px-3 text-slate-500">{log.timestamp}</td>
                  <td className="py-2.5 px-3 font-bold text-purple-900">{log.action}</td>
                  <td className="py-2.5 px-3 text-slate-800">{log.actor}</td>
                  <td className="py-2.5 px-3 text-slate-500">{log.ip}</td>
                  <td className="py-2.5 px-3 text-slate-600 font-sans text-xs">{log.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
