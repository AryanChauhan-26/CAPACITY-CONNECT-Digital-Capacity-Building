import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useLowBandwidth } from '../../context/LowBandwidthContext';
import { Link, useNavigate } from 'react-router-dom';
import {
  GraduationCap,
  Briefcase,
  Shield,
  RotateCcw,
  Sparkles,
  ChevronUp,
  ChevronDown
} from 'lucide-react';

export const DemoRoleBar = () => {
  const { currentUser, switchRole, resetDemoData } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleRoleSelect = (role, redirectPath) => {
    switchRole(role);
    setIsOpen(false);
    if (redirectPath) {
      navigate(redirectPath);
    }
  };

  const getRoleBadge = (role) => {
    if (role === 'admin') return { label: 'Admin (MoES)', color: 'bg-purple-500/20 text-purple-300 border-purple-500/40' };
    if (role === 'trainer') return { label: 'Trainer (IMD)', color: 'bg-teal-500/20 text-teal-300 border-teal-500/40' };
    return { label: 'Trainee', color: 'bg-sky-500/20 text-sky-300 border-sky-500/40' };
  };

  const activeBadge = getRoleBadge(currentUser?.role);

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {!isOpen ? (
        /* Sleek Minimized Floating Pill */
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 bg-[#0c2340]/90 hover:bg-[#0c2340] text-white backdrop-blur-md px-3.5 py-2 rounded-full border border-slate-700/80 shadow-xl transition-all hover:scale-105 group"
          title="Switch evaluation persona"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-[11px] font-medium text-slate-300">
            Persona: <strong className="text-white">{currentUser?.name?.split(' ')[0] || 'Guest'}</strong>
          </span>
          <span className={`text-[10px] px-2 py-0.5 rounded-full border font-semibold ${activeBadge.color}`}>
            {currentUser?.role?.toUpperCase() || 'ROLE'}
          </span>
          <span className="text-[10px] text-sky-400 font-semibold group-hover:underline flex items-center">
            Switch ▾
          </span>
        </button>
      ) : (
        /* Refined Expanded Role Switching Dock */
        <div className="bg-[#0c2340]/95 backdrop-blur-md border border-slate-700 text-white rounded-2xl shadow-2xl overflow-hidden w-80 sm:w-96 animate-in fade-in zoom-in-95 duration-150">
          
          {/* Header */}
          <div className="px-3.5 py-2.5 bg-slate-900/80 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold text-white text-xs tracking-wide">
                Role & Persona Switcher
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={resetDemoData}
                title="Reset demo data"
                className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-white/10 transition text-[11px] flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-white/10 transition"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-3 space-y-2.5 text-xs">
            <div className="text-[11px] text-slate-400">
              Active: <span className="text-white font-medium">{currentUser?.name}</span> ({currentUser?.role})
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => handleRoleSelect('trainee', '/trainee')}
                className={`p-2.5 rounded-xl border text-center transition ${
                  currentUser?.role === 'trainee'
                    ? 'bg-sky-600/30 border-sky-400 text-white font-semibold'
                    : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700 text-slate-300'
                }`}
              >
                <div className="text-xs font-semibold flex items-center justify-center gap-1">
                  🎓 Trainee
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Dr. Ramesh</div>
              </button>

              <button
                onClick={() => handleRoleSelect('trainer', '/trainer')}
                className={`p-2.5 rounded-xl border text-center transition ${
                  currentUser?.role === 'trainer'
                    ? 'bg-teal-600/30 border-teal-400 text-white font-semibold'
                    : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700 text-slate-300'
                }`}
              >
                <div className="text-xs font-semibold flex items-center justify-center gap-1">
                  👨‍🏫 Trainer
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Dr. Sangeeta</div>
              </button>

              <button
                onClick={() => handleRoleSelect('admin', '/admin')}
                className={`p-2.5 rounded-xl border text-center transition ${
                  currentUser?.role === 'admin'
                    ? 'bg-purple-600/30 border-purple-400 text-white font-semibold'
                    : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700 text-slate-300'
                }`}
              >
                <div className="text-xs font-semibold flex items-center justify-center gap-1">
                  🛡️ Admin
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Dir. Vikram</div>
              </button>
            </div>

            {/* Quick Links */}
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <Link to="/competency-mapping" onClick={() => setIsOpen(false)} className="text-sky-300 hover:underline">
                Competency AI
              </Link>
              <span>•</span>
              <Link to="/skill-matrix" onClick={() => setIsOpen(false)} className="text-teal-300 hover:underline">
                Skill Matrix
              </Link>
              <span>•</span>
              <Link to="/verify-certificate" onClick={() => setIsOpen(false)} className="text-emerald-300 hover:underline">
                Verify Cert
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
