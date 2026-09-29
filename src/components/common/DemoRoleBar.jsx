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
  const { lowBandwidthMode, toggleLowBandwidth } = useLowBandwidth();
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleRoleSelect = (role, redirectPath) => {
    switchRole(role);
    if (redirectPath) {
      navigate(redirectPath);
    }
  };

  return (
    <div className="fixed bottom-3 right-3 z-40 max-w-sm sm:max-w-md w-auto">
      <div className="bg-[#0c2340] border-2 border-amber-400 text-white rounded-xl shadow-2xl overflow-hidden transition-all text-xs">
        
        {/* Header Bar */}
        <div className="px-3 py-1.5 bg-[#08172b] flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-bold text-amber-300 uppercase tracking-wider text-[10px]">
              SIH 2026 Evaluation Toolbar
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={resetDemoData}
              title="Reset sample data"
              className="text-slate-400 hover:text-white p-0.5 rounded"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="text-slate-400 hover:text-white p-0.5 rounded"
            >
              {collapsed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Content Body */}
        {!collapsed && (
          <div className="p-2.5 space-y-2 text-xs">
            <div className="flex items-center justify-between text-[11px] text-slate-300">
              <span>Active Role:</span>
              <span className="font-bold text-amber-300">
                {currentUser ? `${currentUser.name} (${currentUser.role.toUpperCase()})` : 'Public Guest'}
              </span>
            </div>

            {/* Quick 1-Click Role Switch Buttons */}
            <div className="grid grid-cols-3 gap-1.5 pt-0.5">
              <button
                onClick={() => handleRoleSelect('trainee', '/trainee')}
                className={`py-1.5 px-2 rounded-lg border text-center transition ${
                  currentUser?.role === 'trainee'
                    ? 'bg-sky-700 border-sky-400 text-white font-bold'
                    : 'bg-slate-800 hover:bg-slate-700 border-slate-600 text-slate-200'
                }`}
              >
                <div className="text-[11px] font-bold">🎓 Trainee</div>
                <div className="text-[9px] text-slate-300">Dr. Ramesh</div>
              </button>

              <button
                onClick={() => handleRoleSelect('trainer', '/trainer')}
                className={`py-1.5 px-2 rounded-lg border text-center transition ${
                  currentUser?.role === 'trainer'
                    ? 'bg-teal-700 border-teal-400 text-white font-bold'
                    : 'bg-slate-800 hover:bg-slate-700 border-slate-600 text-slate-200'
                }`}
              >
                <div className="text-[11px] font-bold">👨‍🏫 Trainer</div>
                <div className="text-[9px] text-slate-300">Dr. Sangeeta</div>
              </button>

              <button
                onClick={() => handleRoleSelect('admin', '/admin')}
                className={`py-1.5 px-2 rounded-lg border text-center transition ${
                  currentUser?.role === 'admin'
                    ? 'bg-purple-700 border-purple-400 text-white font-bold'
                    : 'bg-slate-800 hover:bg-slate-700 border-slate-600 text-slate-200'
                }`}
              >
                <div className="text-[11px] font-bold">🛡️ MoES Admin</div>
                <div className="text-[9px] text-slate-300">Dir. Vikram</div>
              </button>
            </div>

            <div className="pt-1 border-t border-slate-700 flex items-center justify-between text-[10px] text-slate-400">
              <Link to="/competency-mapping" className="text-amber-300 hover:underline">
                AI Trainer Match
              </Link>
              <span>•</span>
              <Link to="/skill-matrix" className="text-teal-300 hover:underline">
                Readiness Heatmap
              </Link>
              <span>•</span>
              <Link to="/verify-certificate" className="text-emerald-300 hover:underline">
                Verify Cert
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
