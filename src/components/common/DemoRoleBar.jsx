import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useLowBandwidth } from '../../context/LowBandwidthContext';
import { Link, useNavigate } from 'react-router-dom';
import {
  Users,
  GraduationCap,
  Briefcase,
  Shield,
  Wifi,
  WifiOff,
  RotateCcw,
  Sparkles,
  ExternalLink,
  ChevronUp,
  ChevronDown
} from 'lucide-react';

export const DemoRoleBar = () => {
  const { currentUser, switchRole, resetDemoData } = useAuth();
  const { lowBandwidthMode, toggleLowBandwidth, networkSpeed, setNetworkSpeed } = useLowBandwidth();
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleRoleSelect = (role, redirectPath) => {
    switchRole(role);
    if (redirectPath) {
      navigate(redirectPath);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-sm sm:max-w-md w-auto">
      <div className="bg-[#0b1e36]/95 border border-sky-500/40 text-white rounded-2xl shadow-2xl backdrop-blur-md overflow-hidden transition-all">
        {/* Header Bar */}
        <div className="px-3.5 py-2 bg-gradient-to-r from-sky-900/60 to-slate-900 flex items-center justify-between border-b border-sky-500/20 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-bold text-sky-300 uppercase tracking-wider text-[10px]">
              SIH 2026 Judge & Demo Bar
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={resetDemoData}
              title="Reset sample data"
              className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition"
            >
              {collapsed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Content Body */}
        {!collapsed && (
          <div className="p-3 text-xs space-y-2.5">
            <div className="flex items-center justify-between text-[11px] text-slate-300">
              <span>Active Session:</span>
              <span className="font-semibold text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-500/30">
                {currentUser ? `${currentUser.name} (${currentUser.role.toUpperCase()})` : 'Public Guest'}
              </span>
            </div>

            {/* Quick 1-Click Role Switch Buttons */}
            <div className="grid grid-cols-3 gap-1.5 pt-1">
              <button
                onClick={() => handleRoleSelect('trainee', '/trainee')}
                className={`flex flex-col items-center justify-center p-2 rounded-xl border transition ${
                  currentUser?.role === 'trainee'
                    ? 'bg-sky-600 border-sky-400 text-white font-bold shadow'
                    : 'bg-slate-800/80 hover:bg-slate-800 border-slate-700 text-slate-300'
                }`}
              >
                <GraduationCap className="w-4 h-4 mb-1 text-sky-300" />
                <span className="text-[11px]">Trainee</span>
                <span className="text-[9px] text-slate-400">Dr. Ramesh</span>
              </button>

              <button
                onClick={() => handleRoleSelect('trainer', '/trainer')}
                className={`flex flex-col items-center justify-center p-2 rounded-xl border transition ${
                  currentUser?.role === 'trainer'
                    ? 'bg-teal-600 border-teal-400 text-white font-bold shadow'
                    : 'bg-slate-800/80 hover:bg-slate-800 border-slate-700 text-slate-300'
                }`}
              >
                <Briefcase className="w-4 h-4 mb-1 text-teal-300" />
                <span className="text-[11px]">Trainer</span>
                <span className="text-[9px] text-slate-400">Dr. Sangeeta</span>
              </button>

              <button
                onClick={() => handleRoleSelect('admin', '/admin')}
                className={`flex flex-col items-center justify-center p-2 rounded-xl border transition ${
                  currentUser?.role === 'admin'
                    ? 'bg-purple-600 border-purple-400 text-white font-bold shadow'
                    : 'bg-slate-800/80 hover:bg-slate-800 border-slate-700 text-slate-300'
                }`}
              >
                <Shield className="w-4 h-4 mb-1 text-purple-300" />
                <span className="text-[11px]">MoES Admin</span>
                <span className="text-[9px] text-slate-400">Dir. Vikram</span>
              </button>
            </div>

            {/* Quick Links to Key Differentiators */}
            <div className="pt-1 border-t border-slate-800 flex items-center justify-between text-[11px]">
              <Link
                to="/competency-mapping"
                className="text-amber-400 hover:underline flex items-center gap-1 font-medium"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI Trainer Match</span>
              </Link>
              <span className="text-slate-600">|</span>
              <Link
                to="/skill-matrix"
                className="text-teal-400 hover:underline flex items-center gap-1 font-medium"
              >
                <span>Readiness Heatmap</span>
              </Link>
              <span className="text-slate-600">|</span>
              <button
                onClick={toggleLowBandwidth}
                className="text-sky-300 hover:underline flex items-center gap-1 font-medium"
              >
                {lowBandwidthMode ? 'Disable 2G' : 'Simulate 2G'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
