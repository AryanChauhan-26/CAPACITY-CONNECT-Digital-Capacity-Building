import React from 'react';
import { useLowBandwidth } from '../../context/LowBandwidthContext';
import { useAuth } from '../../context/AuthContext';
import { Wifi, WifiOff, ShieldCheck, UserCheck, Layers, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const GovHeader = () => {
  const { lowBandwidthMode, toggleLowBandwidth, fontSize, setFontSize, lang, setLang, networkSpeed, setNetworkSpeed } = useLowBandwidth();
  const { currentUser, switchRole } = useAuth();

  return (
    <header className="w-full bg-[#081426] text-slate-100 text-xs border-b border-slate-700/60 select-none">
      {/* Tiranga Indian Flag Top Strip */}
      <div className="h-1.5 w-full flex">
        <div className="w-1/3 bg-[#FF9933]"></div>
        <div className="w-1/3 bg-white"></div>
        <div className="w-1/3 bg-[#138808]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Official Government of India & MoES/IMD Identifier */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block px-1.5 py-0.5 bg-amber-500/20 text-amber-300 font-bold rounded text-[10px] tracking-wider uppercase border border-amber-500/30">
              Govt. of India
            </span>
            <span className="font-semibold text-slate-200 hidden sm:inline">
              {lang === 'hi' ? 'पृथ्वी विज्ञान मंत्रालय' : 'Ministry of Earth Sciences (MoES)'}
            </span>
            <span className="text-slate-500 hidden sm:inline">|</span>
            <span className="text-sky-300 hidden md:inline">
              {lang === 'hi' ? 'भारत मौसम विज्ञान विभाग' : 'India Meteorological Department (IMD)'}
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SIH 2026 #26075: Smart Education</span>
          </div>
        </div>

        {/* Right: Low-Bandwidth Mode Switcher, Accessibility & Role Quick Switch */}
        <div className="flex items-center flex-wrap gap-2.5 sm:gap-4 ml-auto">
          {/* Low-Bandwidth Mode Toggle Button */}
          <button
            onClick={toggleLowBandwidth}
            title="Toggle Low-Bandwidth Mode for remote/2G IMD stations"
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded font-medium text-[11px] transition-all border ${
              lowBandwidthMode
                ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-sm'
                : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border-slate-700'
            }`}
          >
            {lowBandwidthMode ? (
              <>
                <WifiOff className="w-3.5 h-3.5 text-slate-950" />
                <span>Low-Bandwidth (2G Active)</span>
              </>
            ) : (
              <>
                <Wifi className="w-3.5 h-3.5 text-sky-400" />
                <span>Low-Bandwidth Mode</span>
              </>
            )}
          </button>

          {/* Quick Role Switcher for Hackathon Demo */}
          <div className="flex items-center bg-slate-900 border border-slate-700 rounded p-0.5 text-[11px]">
            <span className="px-1.5 text-slate-400 font-mono hidden md:inline">Demo Role:</span>
            <button
              onClick={() => switchRole('trainee')}
              className={`px-2 py-0.5 rounded transition ${
                currentUser?.role === 'trainee'
                  ? 'bg-sky-600 text-white font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
              title="View as Dr. Ramesh Sharma (Trainee at MC Pune)"
            >
              Trainee
            </button>
            <button
              onClick={() => switchRole('trainer')}
              className={`px-2 py-0.5 rounded transition ${
                currentUser?.role === 'trainer'
                  ? 'bg-teal-600 text-white font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
              title="View as Dr. Sangeeta Rao (Trainer & Chief Radar Scientist at IMD HQ)"
            >
              Trainer
            </button>
            <button
              onClick={() => switchRole('admin')}
              className={`px-2 py-0.5 rounded transition ${
                currentUser?.role === 'admin'
                  ? 'bg-purple-600 text-white font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
              title="View as Shri Vikramaditya Sen (Admin & Director MoES)"
            >
              Admin
            </button>
          </div>

          {/* Language Switch */}
          <button
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
            className="px-2 py-0.5 text-slate-300 hover:text-white bg-slate-800/80 rounded border border-slate-700 text-[11px] font-medium"
          >
            {lang === 'en' ? 'हिन्दी' : 'English'}
          </button>

          {/* Accessibility Font Size Toggle */}
          <div className="hidden sm:flex items-center bg-slate-900 border border-slate-700 rounded text-[10px]">
            <button
              onClick={() => setFontSize('normal')}
              className={`px-1.5 py-0.5 ${fontSize === 'normal' ? 'text-sky-400 font-bold' : 'text-slate-400'}`}
              title="Default Font Size"
            >
              A
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`px-1.5 py-0.5 ${fontSize === 'large' ? 'text-sky-400 font-bold' : 'text-slate-400'}`}
              title="Medium Font Size"
            >
              A+
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
